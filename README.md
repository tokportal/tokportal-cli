# @tokportal/cli

[![npm](https://img.shields.io/npm/v/@tokportal/cli.svg)](https://www.npmjs.com/package/@tokportal/cli)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

TokPortal is the managed social infrastructure API: real TikTok, Instagram and YouTube accounts created, warmed and operated by human account managers in 16+ countries — exposed as a REST API and an MCP server. No OAuth per account, no 25-posts/day cap, no app review.

Docs https://developers.tokportal.com · API base https://app.tokportal.com/api/ext · OpenAPI https://developers.tokportal.com/openapi.json · MCP remote https://app.tokportal.com/api/ext/mcp · Get an API key https://app.tokportal.com/developer/api-keys?utm_source=npm&utm_medium=readme&utm_campaign=tokportal-cli · llms.txt https://developers.tokportal.com/llms.txt

---

`@tokportal/cli` is the official command-line interface for the TokPortal API. One command per API operation, generated from OpenAPI, JSON in / JSON out — ideal for scripts, CI and quick checks. Requires Node 18+.

## Install

```bash
npm install -g @tokportal/cli
# or without installing:
npx @tokportal/cli get-current-user
```

## 30-second quickstart

```bash
export TOKPORTAL_API_KEY=sk_your_key_here

# who am I / credit balance
tokportal get-current-user
tokportal get-credit-balance

# create a 1-video TikTok bundle in the USA and capture its id (credits are debited here)
BUNDLE_ID=$(tokportal create-bundle --body '{"bundle_type":"account_and_videos","platform":"tiktok","country":"USA","title":"US launch","videos_quantity":1}' | jq -r .data.id)

# upload the video from disk -> public_url
VIDEO_URL=$(tokportal upload-video-direct --file ./launch.mp4 --bundle_id "$BUNDLE_ID" | jq -r .data.public_url)

# configure the account profile + video slot 1, then publish
tokportal configure-bundle-account --id "$BUNDLE_ID" --body '{"username":"mybrand.us","visible_name":"My Brand","biography":"Official account"}'
tokportal configure-bundle-video --id "$BUNDLE_ID" --position 1 --body "{\"video_type\":\"video\",\"video_url\":\"$VIDEO_URL\",\"description\":\"Day 1 #launch\",\"target_publish_date\":\"2026-09-01\"}"
tokportal get-bundle-publish-readiness --id "$BUNDLE_ID"
tokportal publish-bundle --id "$BUNDLE_ID"

# follow progress
tokportal get-bundle --id "$BUNDLE_ID"
tokportal help   # list every generated command
```

## Reference

```bash
npm install -g @tokportal/cli
export TOKPORTAL_API_KEY=sk_your_key_here

tokportal get-current-user
tokportal list-bundles --page 1 --per_page 25
tokportal create-bundle --body '{"bundle_type":"account_and_videos","country":"USA","videos_quantity":5}'
tokportal upload-video-direct --file ./video.mp4 --bundle_id 00000000-0000-0000-0000-000000000000
```

The CLI sends `X-TokPortal-Client: tokportal-cli/0.1.2` on API requests for observability and support diagnostics.

Multipart upload commands are generated from OpenAPI too. Use `--file <path>` for the binary field and pass form fields such as `--bundle_id` or `--auto_publish` as regular flags.

Failed API responses are printed with a `diagnostics` object containing `request_id`, `retry_after_seconds`, and `rate_limit` when those headers are available.

Use `--idempotency-key` only for eligible mutations. The CLI rejects it locally
for credential reveal, verification-code retrieval, webhook creation, signed
image/video upload URL creation, and analytics report creation because those
responses contain secrets and are never stored for replay.

The CLI is generated from the public OpenAPI schema. Use `tokportal help` to list generated commands.

## Source of truth

This package is generated from the TokPortal public OpenAPI schema
(https://developers.tokportal.com/openapi.json) in the private TokPortal
monorepo. Generated files (`src/generated.ts`) are overwritten on every release — do not edit
them by hand. See [CONTRIBUTING.md](./CONTRIBUTING.md) for what we accept as PRs
and [SECURITY.md](./SECURITY.md) for vulnerability reporting.

## Links

- Documentation: https://developers.tokportal.com
- SDKs & CLI guide: https://developers.tokportal.com/sdks-cli
- MCP server: https://developers.tokportal.com/mcp · [`tokportal-mcp`](https://www.npmjs.com/package/tokportal-mcp)
- API reference (OpenAPI): https://developers.tokportal.com/openapi.json
- Other packages: [`@tokportal/node`](https://www.npmjs.com/package/@tokportal/node) · [`@tokportal/cli`](https://www.npmjs.com/package/@tokportal/cli) · [`tokportal` (PyPI)](https://pypi.org/project/tokportal/) · [`github.com/tokportal/tokportal-go`](https://github.com/tokportal/tokportal-go)

MIT © TokPortal
