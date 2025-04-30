import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'u2c3oy',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
