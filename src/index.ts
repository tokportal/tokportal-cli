#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import {
  COMMANDS,
  TOKPORTAL_BASE_URL,
  type CliCommandDefinition,
} from "./generated.js";

const TOKPORTAL_CLI_VERSION = "0.1.2";
const TOKPORTAL_CLIENT_HEADER = `tokportal-cli/${TOKPORTAL_CLI_VERSION}`;

type ParsedArgs = {
  command?: string;
  flags: Record<string, string | boolean>;
  positionals: string[];
};

type RequestPayload =
  | { kind: "none" }
  | { kind: "json"; body: unknown }
  | { kind: "multipart"; body: FormData };

const EXIT_USAGE = 2;
const EXIT_AUTH = 3;
const EXIT_API = 1;
const SENSITIVE_RESPONSE_OPERATION_IDS = new Set([
  "retrieveAccountVerificationCode",
  "revealAccountCredentials",
  "createWebhookEndpoint",
  "uploadImage",
  "uploadVideo",
  "createAnalyticsReport",
]);

function headerInt(headers: Headers, name: string): number | undefined {
  const value = headers.get(name);
  if (!value) return undefined;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function apiDiagnostics(response: Response) {
  const rateLimit = {
    limit: headerInt(response.headers, "x-ratelimit-limit"),
    remaining: headerInt(response.headers, "x-ratelimit-remaining"),
    reset: headerInt(response.headers, "x-ratelimit-reset"),
  };
  const hasRateLimit = Object.values(rateLimit).some(
    (value) => value !== undefined,
  );

  return {
    request_id:
      response.headers.get("x-tokportal-request-id") ||
      response.headers.get("x-request-id") ||
      response.headers.get("request-id") ||
      response.headers.get("x-vercel-id") ||
      undefined,
    retry_after_seconds: headerInt(response.headers, "retry-after"),
    ...(hasRateLimit ? { rate_limit: rateLimit } : {}),
  };
}

function parsePayload(text: string): unknown {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return { raw_body: text };
  }
}

function parseArgs(argv: string[]): ParsedArgs {
  const [command, ...rest] = argv;
  const flags: Record<string, string | boolean> = {};
  const positionals: string[] = [];

  for (let index = 0; index < rest.length; index += 1) {
    const arg = rest[index];

    if (!arg.startsWith("--")) {
      positionals.push(arg);
      continue;
    }

    const raw = arg.slice(2);
    const eq = raw.indexOf("=");
    if (eq !== -1) {
      flags[raw.slice(0, eq)] = raw.slice(eq + 1);
      continue;
    }

    const next = rest[index + 1];
    if (next && !next.startsWith("--")) {
      flags[raw] = next;
      index += 1;
    } else {
      flags[raw] = true;
    }
  }

  return { command, flags, positionals };
}

function usage(): string {
  const commands = COMMANDS.map(
    (command) => `  ${command.name.padEnd(32)} ${command.description}`,
  ).join("\n");

  return `TokPortal CLI

Usage:
  tokportal <command> [flags]

Global flags:
  --api-key <key>          Defaults to TOKPORTAL_API_KEY
  --base-url <url>         Defaults to TOKPORTAL_BASE_URL or ${TOKPORTAL_BASE_URL}
  --json                   Print raw JSON only
  --body '<json>'          JSON body for commands that accept one
  --body-file <path>       Read JSON body from file
  --file <path>            File for multipart upload commands
  --idempotency-key <key>  Sends Idempotency-Key for eligible mutating commands
                           Never use it for commands that return secrets

Generated commands:
${commands}
`;
}

function dashed(name: string) {
  return name.replace(/_/g, "-");
}

function flagValue(flags: ParsedArgs["flags"], name: string) {
  return flags[name] ?? flags[dashed(name)];
}

function multipartFileFlag(fieldName: string) {
  return fieldName === "file" ? "file" : `${fieldName}-file`;
}

function readPayload(
  flags: ParsedArgs["flags"],
  command: CliCommandDefinition,
): RequestPayload {
  if (command.requestContentType === "multipart/form-data") {
    const form = new FormData();

    for (const field of command.multipartFields) {
      if (field.binary) {
        const fileFlag = multipartFileFlag(field.name);
        const filePath = flagValue(flags, fileFlag);
        if (typeof filePath !== "string" || filePath.length === 0) {
          if (field.required)
            throw new Error(`${command.name} requires --${dashed(fileFlag)}.`);
          continue;
        }
        const bytes = new Uint8Array(fs.readFileSync(filePath));
        form.append(field.name, new Blob([bytes]), path.basename(filePath));
        continue;
      }

      const value = flagValue(flags, field.name);
      if (value === undefined) {
        if (field.required)
          throw new Error(`${command.name} requires --${dashed(field.name)}.`);
        continue;
      }
      form.append(field.name, String(value));
    }

    return { kind: "multipart", body: form };
  }

  if (!command.hasJsonBody) return { kind: "none" };

  if (typeof flags.body === "string") {
    return { kind: "json", body: JSON.parse(flags.body) };
  }

  if (typeof flags["body-file"] === "string") {
    return {
      kind: "json",
      body: JSON.parse(fs.readFileSync(flags["body-file"], "utf8")),
    };
  }

  if (command.jsonBodyRequired) {
    throw new Error(`${command.name} requires --body or --body-file.`);
  }

  return { kind: "none" };
}

function fillPath(command: CliCommandDefinition, flags: ParsedArgs["flags"]) {
  return command.path.replace(/\{([^}]+)\}/g, (_match, name) => {
    const value = flagValue(flags, name);
    if (typeof value !== "string") {
      throw new Error(`${command.name} requires --${dashed(name)}.`);
    }
    return encodeURIComponent(value);
  });
}

function buildQuery(command: CliCommandDefinition, flags: ParsedArgs["flags"]) {
  const query = new URLSearchParams();
  const multipartFlagNames = new Set(
    command.multipartFields.flatMap((field) => {
      const names = field.binary
        ? [multipartFileFlag(field.name)]
        : [field.name];
      return names.flatMap((name) => [name, dashed(name)]);
    }),
  );
  const globalFlags = new Set([
    "api-key",
    "base-url",
    "json",
    "body",
    "body-file",
    "file",
    "idempotency-key",
    "help",
  ]);

  for (const key of command.queryParams) {
    const value = flagValue(flags, key);
    if (value !== undefined && typeof value !== "boolean")
      query.set(key, value);
  }

  for (const [key, value] of Object.entries(flags)) {
    if (
      globalFlags.has(key) ||
      multipartFlagNames.has(key) ||
      command.pathParams.includes(key) ||
      command.pathParams.map(dashed).includes(key) ||
      command.queryParams.includes(key) ||
      command.queryParams.map(dashed).includes(key)
    )
      continue;
    if (value !== undefined && typeof value !== "boolean")
      query.set(key, value);
  }

  const queryString = query.toString();
  return queryString ? `?${queryString}` : "";
}

function printHuman(payload: unknown) {
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
}

async function run() {
  const parsed = parseArgs(process.argv.slice(2));

  if (!parsed.command || parsed.command === "help" || parsed.flags.help) {
    process.stdout.write(usage());
    return;
  }

  const command = COMMANDS.find(
    (candidate) => candidate.name === parsed.command,
  );
  if (!command) {
    process.stderr.write(`Unknown command: ${parsed.command}\n\n${usage()}`);
    process.exit(EXIT_USAGE);
  }

  if (
    typeof parsed.flags["idempotency-key"] === "string" &&
    SENSITIVE_RESPONSE_OPERATION_IDS.has(command.operationId)
  ) {
    throw new Error(
      `${command.name} returns a secret and does not accept --idempotency-key. Remove the flag and reconcile safe resource state before retrying.`,
    );
  }

  const apiKey =
    typeof parsed.flags["api-key"] === "string"
      ? parsed.flags["api-key"]
      : process.env.TOKPORTAL_API_KEY;
  if (!apiKey) {
    process.stderr.write(
      "Missing API key. Pass --api-key or set TOKPORTAL_API_KEY.\n",
    );
    process.exit(EXIT_AUTH);
  }

  const baseUrl =
    (typeof parsed.flags["base-url"] === "string"
      ? parsed.flags["base-url"]
      : process.env.TOKPORTAL_BASE_URL) || TOKPORTAL_BASE_URL;

  const requestPayload = readPayload(parsed.flags, command);
  const apiPath = fillPath(command, parsed.flags);
  const url = `${baseUrl.replace(/\/+$/, "")}${apiPath}${buildQuery(command, parsed.flags)}`;

  const response = await fetch(url, {
    method: command.method,
    headers: {
      Accept: "application/json",
      "X-API-Key": apiKey,
      "X-TokPortal-Client": TOKPORTAL_CLIENT_HEADER,
      ...(requestPayload.kind === "json"
        ? { "Content-Type": "application/json" }
        : {}),
      ...(typeof parsed.flags["idempotency-key"] === "string"
        ? { "Idempotency-Key": parsed.flags["idempotency-key"] }
        : {}),
    },
    body:
      requestPayload.kind === "none"
        ? undefined
        : requestPayload.kind === "json"
          ? JSON.stringify(requestPayload.body)
          : requestPayload.body,
  });

  const text = await response.text();
  const responsePayload = parsePayload(text);

  if (!response.ok) {
    process.stderr.write(
      `${JSON.stringify({ payload: responsePayload, diagnostics: apiDiagnostics(response) }, null, 2)}\n`,
    );
    process.exit(EXIT_API);
  }

  printHuman(responsePayload);
}

run().catch((error) => {
  process.stderr.write(
    `${error instanceof Error ? error.message : String(error)}\n`,
  );
  process.exit(EXIT_USAGE);
});
