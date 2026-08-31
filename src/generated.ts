// Generated from app/api/_schema/public-openapi.ts.
// Do not edit by hand. Run `node scripts/generate-cli-commands.mjs`.

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type CliCommandDefinition = {
  name: string;
  operationId: string;
  description: string;
  method: HttpMethod;
  path: string;
  idempotencyPolicy: 'standard' | 'reject-sensitive-response' | 'not-applicable';
  pathParams: string[];
  queryParams: string[];
  requestContentType: 'application/json' | 'multipart/form-data' | null;
  hasJsonBody: boolean;
  jsonBodyRequired: boolean;
  multipartFields: Array<{
    name: string;
    required: boolean;
    binary: boolean;
    schema: Record<string, unknown>;
  }>;
};

export const TOKPORTAL_BASE_URL = "https://app.tokportal.com/api/ext";

// prettier-ignore
export const COMMANDS: CliCommandDefinition[] = [
  {
    "name": "get-current-user",
    "operationId": "getCurrentUser",
    "description": "Get authenticated user",
    "method": "GET",
    "path": "/me",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "update-current-user-settings",
    "operationId": "updateCurrentUserSettings",
    "description": "Update safe workspace settings",
    "method": "PATCH",
    "path": "/me",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-account-managed-subscription",
    "operationId": "getAccountManagedSubscription",
    "description": "Get TokPortal Coverage status",
    "method": "GET",
    "path": "/accounts/{id}/managed-subscription",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "reactivate-account-managed-subscription",
    "operationId": "reactivateAccountManagedSubscription",
    "description": "Reactivate TokPortal Coverage",
    "method": "POST",
    "path": "/accounts/{id}/managed-subscription/reactivate",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "cancel-account-managed-subscription",
    "operationId": "cancelAccountManagedSubscription",
    "description": "Pause TokPortal Coverage",
    "method": "POST",
    "path": "/accounts/{id}/managed-subscription/cancel",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-countries",
    "operationId": "listCountries",
    "description": "List available countries",
    "method": "GET",
    "path": "/countries",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-platforms",
    "operationId": "listPlatforms",
    "description": "List available platforms",
    "method": "GET",
    "path": "/platforms",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-credit-costs",
    "operationId": "getCreditCosts",
    "description": "Get credit pricing",
    "method": "GET",
    "path": "/credit-costs",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-credit-balance",
    "operationId": "getCreditBalance",
    "description": "Get credit balance",
    "method": "GET",
    "path": "/credits/balance",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-credit-transactions",
    "operationId": "listCreditTransactions",
    "description": "List credit transactions",
    "method": "GET",
    "path": "/credits/history",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "page",
      "per_page",
      "date_from",
      "date_to"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-bundles",
    "operationId": "listBundles",
    "description": "List bundles",
    "method": "GET",
    "path": "/bundles",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "page",
      "per_page",
      "status",
      "bundle_type",
      "platform",
      "external_ref",
      "account_status"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "create-bundle",
    "operationId": "createBundle",
    "description": "Create a bundle",
    "method": "POST",
    "path": "/bundles",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "create-bundles-bulk",
    "operationId": "createBundlesBulk",
    "description": "Create bundles in bulk",
    "method": "POST",
    "path": "/bundles/bulk",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-bundle",
    "operationId": "getBundle",
    "description": "Get a bundle",
    "method": "GET",
    "path": "/bundles/{id}",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "update-bundle",
    "operationId": "updateBundle",
    "description": "Update bundle settings",
    "method": "PATCH",
    "path": "/bundles/{id}",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "publish-bundle",
    "operationId": "publishBundle",
    "description": "Publish a bundle",
    "method": "POST",
    "path": "/bundles/{id}/publish",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-bundle-publish-readiness",
    "operationId": "getBundlePublishReadiness",
    "description": "Check bundle publish readiness",
    "method": "GET",
    "path": "/bundles/{id}/publish-readiness",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "unpublish-bundle",
    "operationId": "unpublishBundle",
    "description": "Unpublish a bundle",
    "method": "POST",
    "path": "/bundles/{id}/unpublish",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "add-video-slots",
    "operationId": "addVideoSlots",
    "description": "Add video slots to a bundle",
    "method": "POST",
    "path": "/bundles/{id}/add-video-slots",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "add-edit-slots",
    "operationId": "addEditSlots",
    "description": "Add VIDEO-editing slots to a bundle",
    "method": "POST",
    "path": "/bundles/{id}/add-edit-slots",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-bundle-account",
    "operationId": "getBundleAccount",
    "description": "Get bundle account configuration",
    "method": "GET",
    "path": "/bundles/{id}/account",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "configure-bundle-account",
    "operationId": "configureBundleAccount",
    "description": "Configure bundle account profile",
    "method": "PUT",
    "path": "/bundles/{id}/account",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "request-bundle-account-corrections",
    "operationId": "requestBundleAccountCorrections",
    "description": "Request account corrections",
    "method": "POST",
    "path": "/bundles/{id}/account/corrections",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "finalize-bundle-account",
    "operationId": "finalizeBundleAccount",
    "description": "Finalize account review",
    "method": "POST",
    "path": "/bundles/{id}/account/finalize",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-bundle-videos",
    "operationId": "listBundleVideos",
    "description": "List bundle video slots",
    "method": "GET",
    "path": "/bundles/{id}/videos",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-bundle-video",
    "operationId": "getBundleVideo",
    "description": "Get video slot configuration",
    "method": "GET",
    "path": "/bundles/{id}/videos/{position}",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "configure-bundle-video",
    "operationId": "configureBundleVideo",
    "description": "Configure a video slot",
    "method": "PUT",
    "path": "/bundles/{id}/videos/{position}",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "patch-bundle-video",
    "operationId": "patchBundleVideo",
    "description": "Patch video metadata or schedule",
    "method": "PATCH",
    "path": "/bundles/{id}/videos/{position}",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "batch-configure-bundle-videos",
    "operationId": "batchConfigureBundleVideos",
    "description": "Configure video slots in bulk",
    "method": "PUT",
    "path": "/bundles/{id}/videos/batch",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "publish-all-bundle-videos",
    "operationId": "publishAllBundleVideos",
    "description": "Publish all configured videos on an active bundle",
    "method": "POST",
    "path": "/bundles/{id}/videos/publish-all",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "import-bundle-videos-csv",
    "operationId": "importBundleVideosCsv",
    "description": "Import video slots from CSV",
    "method": "POST",
    "path": "/bundles/{id}/videos/import-csv",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "multipart/form-data",
    "hasJsonBody": false,
    "jsonBodyRequired": true,
    "multipartFields": [
      {
        "name": "file",
        "required": true,
        "binary": true,
        "schema": {
          "type": "string",
          "format": "binary"
        }
      },
      {
        "name": "auto_publish",
        "required": false,
        "binary": false,
        "schema": {
          "type": "boolean",
          "default": false,
          "description": "Publish the bundle once the import has configured at least one row. Covers the whole import — there is one publish attempt per call. A publish failure never fails the import: read auto_publish.published, auto_publish.blockers and auto_publish.adjusted_videos."
        }
      }
    ]
  },
  {
    "name": "publish-bundle-video",
    "operationId": "publishBundleVideo",
    "description": "Publish one video slot",
    "method": "POST",
    "path": "/bundles/{id}/videos/{position}/publish",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "reset-bundle-video",
    "operationId": "resetBundleVideo",
    "description": "Reset one video slot",
    "method": "POST",
    "path": "/bundles/{id}/videos/{position}/reset",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "unschedule-bundle-video",
    "operationId": "unscheduleBundleVideo",
    "description": "Unschedule one video slot",
    "method": "POST",
    "path": "/bundles/{id}/videos/{position}/unschedule",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "finalize-bundle-video",
    "operationId": "finalizeBundleVideo",
    "description": "Finalize video review",
    "method": "POST",
    "path": "/bundles/{id}/videos/{position}/finalize",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "request-bundle-video-corrections",
    "operationId": "requestBundleVideoCorrections",
    "description": "Request video corrections",
    "method": "POST",
    "path": "/bundles/{id}/videos/{position}/corrections",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "fix-bundle-video-download",
    "operationId": "fixBundleVideoDownload",
    "description": "Fix a broken video download",
    "method": "POST",
    "path": "/bundles/{id}/videos/{position}/fix-download",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "position"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "list-accounts",
    "operationId": "listAccounts",
    "description": "List delivered accounts",
    "method": "GET",
    "path": "/accounts",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "page",
      "per_page",
      "platform",
      "country",
      "banned"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-account-bans",
    "operationId": "listAccountBans",
    "description": "List ban reports and appeals",
    "method": "GET",
    "path": "/account-bans",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "page",
      "per_page",
      "status",
      "resolution",
      "account_id",
      "since",
      "include_screenshots"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-account",
    "operationId": "getAccount",
    "description": "Get a delivered account",
    "method": "GET",
    "path": "/accounts/{id}",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "update-account-commenting-profile",
    "operationId": "updateAccountCommentingProfile",
    "description": "Update account commenting profile",
    "method": "PATCH",
    "path": "/accounts/{id}/commenting-profile",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "list-account-bundles",
    "operationId": "listAccountBundles",
    "description": "List bundles for a delivered account",
    "method": "GET",
    "path": "/accounts/{id}/bundles",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "page",
      "per_page",
      "status"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "retrieve-account-verification-code",
    "operationId": "retrieveAccountVerificationCode",
    "description": "Retrieve latest account verification code",
    "method": "POST",
    "path": "/accounts/{id}/verification-code",
    "idempotencyPolicy": "reject-sensitive-response",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "reveal-account-credentials",
    "operationId": "revealAccountCredentials",
    "description": "Reveal delivered account credentials",
    "method": "POST",
    "path": "/accounts/{id}/reveal-credentials",
    "idempotencyPolicy": "reject-sensitive-response",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "can-refresh-account-analytics",
    "operationId": "canRefreshAccountAnalytics",
    "description": "Check analytics refresh availability",
    "method": "GET",
    "path": "/accounts/{id}/analytics/can-refresh",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "refresh-account-analytics",
    "operationId": "refreshAccountAnalytics",
    "description": "Refresh account analytics",
    "method": "POST",
    "path": "/accounts/{id}/analytics/refresh",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-account-edit-request",
    "operationId": "getAccountEditRequest",
    "description": "Get active account edit request",
    "method": "GET",
    "path": "/accounts/{id}/edit-request",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "create-account-edit-request",
    "operationId": "createAccountEditRequest",
    "description": "Request profile edits for a delivered account",
    "method": "POST",
    "path": "/accounts/{id}/edit-request",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "rewarm-account",
    "operationId": "rewarmAccount",
    "description": "Order Advanced Niche Warming (rewarm) on a delivered account",
    "method": "POST",
    "path": "/accounts/{id}/rewarm",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "configure-bundle-warming-terms",
    "operationId": "configureBundleWarmingTerms",
    "description": "Configure the niche targets of a count-only Advanced Niche Warming purchase",
    "method": "PUT",
    "path": "/bundles/{id}/warming-terms",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "list-account-warming-sessions",
    "operationId": "listAccountWarmingSessions",
    "description": "List Advanced Niche Warming sessions for an account",
    "method": "GET",
    "path": "/accounts/{id}/warming-sessions",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-warming-session",
    "operationId": "getWarmingSession",
    "description": "Get an Advanced Niche Warming session",
    "method": "GET",
    "path": "/warming-sessions/{id}",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "generate-warming-terms",
    "operationId": "generateWarmingTerms",
    "description": "Generate Advanced Niche Warming search terms",
    "method": "POST",
    "path": "/warming/generate-terms",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "list-webhook-events",
    "operationId": "listWebhookEvents",
    "description": "List webhook event catalog",
    "method": "GET",
    "path": "/webhooks/events",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-webhook-endpoints",
    "operationId": "listWebhookEndpoints",
    "description": "List webhook endpoints",
    "method": "GET",
    "path": "/webhooks",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "page",
      "per_page",
      "enabled",
      "event"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "create-webhook-endpoint",
    "operationId": "createWebhookEndpoint",
    "description": "Create a webhook endpoint",
    "method": "POST",
    "path": "/webhooks",
    "idempotencyPolicy": "reject-sensitive-response",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-webhook-endpoint",
    "operationId": "getWebhookEndpoint",
    "description": "Get a webhook endpoint",
    "method": "GET",
    "path": "/webhooks/{id}",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "update-webhook-endpoint",
    "operationId": "updateWebhookEndpoint",
    "description": "Update a webhook endpoint",
    "method": "PATCH",
    "path": "/webhooks/{id}",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "delete-webhook-endpoint",
    "operationId": "deleteWebhookEndpoint",
    "description": "Delete a webhook endpoint",
    "method": "DELETE",
    "path": "/webhooks/{id}",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-webhook-deliveries",
    "operationId": "listWebhookDeliveries",
    "description": "List webhook deliveries",
    "method": "GET",
    "path": "/webhooks/{id}/deliveries",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "page",
      "per_page",
      "event_type",
      "success"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "retry-webhook-delivery",
    "operationId": "retryWebhookDelivery",
    "description": "Retry a webhook delivery",
    "method": "POST",
    "path": "/webhooks/{id}/deliveries/{delivery_id}/retry",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id",
      "delivery_id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "test-webhook-endpoint",
    "operationId": "testWebhookEndpoint",
    "description": "Send a test webhook",
    "method": "POST",
    "path": "/webhooks/{id}/test",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "upload-video",
    "operationId": "uploadVideo",
    "description": "Create a video upload URL",
    "method": "POST",
    "path": "/upload/video",
    "idempotencyPolicy": "reject-sensitive-response",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "upload-video-direct",
    "operationId": "uploadVideoDirect",
    "description": "Upload a video file directly",
    "method": "POST",
    "path": "/upload/video/direct",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "multipart/form-data",
    "hasJsonBody": false,
    "jsonBodyRequired": true,
    "multipartFields": [
      {
        "name": "file",
        "required": true,
        "binary": true,
        "schema": {
          "type": "string",
          "format": "binary"
        }
      },
      {
        "name": "bundle_id",
        "required": true,
        "binary": false,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  },
  {
    "name": "upload-image",
    "operationId": "uploadImage",
    "description": "Create an image upload URL",
    "method": "POST",
    "path": "/upload/image",
    "idempotencyPolicy": "reject-sensitive-response",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "upload-image-direct",
    "operationId": "uploadImageDirect",
    "description": "Upload an image file directly",
    "method": "POST",
    "path": "/upload/image/direct",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "multipart/form-data",
    "hasJsonBody": false,
    "jsonBodyRequired": true,
    "multipartFields": [
      {
        "name": "file",
        "required": true,
        "binary": true,
        "schema": {
          "type": "string",
          "format": "binary"
        }
      },
      {
        "name": "bundle_id",
        "required": true,
        "binary": false,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      },
      {
        "name": "purpose",
        "required": false,
        "binary": false,
        "schema": {
          "type": "string",
          "enum": [
            "carousel",
            "profile_picture"
          ],
          "default": "carousel"
        }
      }
    ]
  },
  {
    "name": "upload-image-from-url",
    "operationId": "uploadImageFromUrl",
    "description": "Import an image from URL",
    "method": "POST",
    "path": "/upload/image/from-url",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-analytics-dashboard",
    "operationId": "getAnalyticsDashboard",
    "description": "Get analytics dashboard",
    "method": "GET",
    "path": "/analytics",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "workspace",
      "platform",
      "country",
      "account",
      "from",
      "to"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-analytics-contract",
    "operationId": "getAnalyticsContract",
    "description": "Get analytics data contract",
    "method": "GET",
    "path": "/analytics/contract",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "export-analytics-videos",
    "operationId": "exportAnalyticsVideos",
    "description": "Export analytics videos CSV",
    "method": "GET",
    "path": "/analytics/export/videos",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "account",
      "workspace",
      "platform",
      "country",
      "q",
      "from",
      "to"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "create-analytics-report",
    "operationId": "createAnalyticsReport",
    "description": "Create analytics web report",
    "method": "POST",
    "path": "/analytics/export/reports",
    "idempotencyPolicy": "reject-sensitive-response",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "export-analytics-report-html",
    "operationId": "exportAnalyticsReportHtml",
    "description": "Export analytics report HTML",
    "method": "POST",
    "path": "/analytics/export/reports/html",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-analytics-series",
    "operationId": "getAnalyticsSeries",
    "description": "Get analytics time series",
    "method": "GET",
    "path": "/analytics/series",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "metric",
      "granularity",
      "mode",
      "account",
      "from",
      "to"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-analytics-account",
    "operationId": "getAnalyticsAccount",
    "description": "Get account analytics drilldown",
    "method": "GET",
    "path": "/analytics/accounts/{id}",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "refresh-analytics-account",
    "operationId": "refreshAnalyticsAccount",
    "description": "Refresh analytics account",
    "method": "POST",
    "path": "/analytics/accounts/{id}/refresh",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "list-analytics-account-raw-snapshots",
    "operationId": "listAnalyticsAccountRawSnapshots",
    "description": "List raw account analytics snapshots",
    "method": "GET",
    "path": "/analytics/accounts/{id}/raw",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "source",
      "limit",
      "from",
      "to"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-account-analytics",
    "operationId": "getAccountAnalytics",
    "description": "Get account analytics compatibility view",
    "method": "GET",
    "path": "/accounts/{id}/analytics",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-account-video-analytics",
    "operationId": "listAccountVideoAnalytics",
    "description": "List post analytics for an account",
    "method": "GET",
    "path": "/accounts/{id}/analytics/videos",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "page",
      "per_page",
      "sort_by",
      "sort_order"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-video-analytics",
    "operationId": "getVideoAnalytics",
    "description": "Get single video analytics",
    "method": "GET",
    "path": "/videos/{id}/analytics",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "create-video-ad-code-request",
    "operationId": "createVideoAdCodeRequest",
    "description": "Request an ad code (TikTok Spark Code / Instagram Partner Code) for a finalized video",
    "method": "POST",
    "path": "/videos/{id}/ad-code-request",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-video-ad-code-request",
    "operationId": "getVideoAdCodeRequest",
    "description": "Get / poll the ad code for a video",
    "method": "GET",
    "path": "/videos/{id}/ad-code-request",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "get-comment-pulse",
    "operationId": "getCommentPulse",
    "description": "Get comment pulse analytics",
    "method": "GET",
    "path": "/analytics/comments",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "platform",
      "country",
      "account",
      "post",
      "limit",
      "postLimit",
      "from",
      "to"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-analytics-account-comments",
    "operationId": "listAnalyticsAccountComments",
    "description": "List comments for an account post",
    "method": "GET",
    "path": "/analytics/accounts/{id}/comments",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "trackedPostId",
      "postId",
      "limit"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-analytics-post-raw-snapshots",
    "operationId": "listAnalyticsPostRawSnapshots",
    "description": "List raw post analytics snapshots",
    "method": "GET",
    "path": "/analytics/posts/{id}/raw",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "source",
      "limit",
      "from",
      "to"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "list-comment-tasks",
    "operationId": "listCommentTasks",
    "description": "List comment tasks",
    "method": "GET",
    "path": "/comments",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [],
    "queryParams": [
      "page",
      "per_page",
      "status",
      "saved_account_id"
    ],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "create-comment-tasks",
    "operationId": "createCommentTasks",
    "description": "Create comment tasks",
    "method": "POST",
    "path": "/comments",
    "idempotencyPolicy": "standard",
    "pathParams": [],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "get-comment-task",
    "operationId": "getCommentTask",
    "description": "Get a comment task",
    "method": "GET",
    "path": "/comments/{id}",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "delete-comment-task",
    "operationId": "deleteCommentTask",
    "description": "Cancel a pending comment task",
    "method": "DELETE",
    "path": "/comments/{id}",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "approve-comment-task",
    "operationId": "approveCommentTask",
    "description": "Approve a manually confirmed comment task",
    "method": "POST",
    "path": "/comments/{id}/approve",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  },
  {
    "name": "dispute-comment-task",
    "operationId": "disputeCommentTask",
    "description": "Dispute a manually confirmed comment task",
    "method": "POST",
    "path": "/comments/{id}/dispute",
    "idempotencyPolicy": "standard",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": "application/json",
    "hasJsonBody": true,
    "jsonBodyRequired": true,
    "multipartFields": []
  },
  {
    "name": "list-comment-task-verifications",
    "operationId": "listCommentTaskVerifications",
    "description": "List comment task verification events",
    "method": "GET",
    "path": "/comments/{id}/verifications",
    "idempotencyPolicy": "not-applicable",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "requestContentType": null,
    "hasJsonBody": false,
    "jsonBodyRequired": false,
    "multipartFields": []
  }
];
