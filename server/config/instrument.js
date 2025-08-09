// Import with `import * as Sentry from "@sentry/node"` if you are using ESM

import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://e8a5f7742cb011db60fcfa7e3ba6fc5e@o4509814277144577.ingest.us.sentry.io/4509814291955712",
  integrations: [Sentry.mongooseIntegration()],


  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});