import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "u2c3oy",
  video: true,
  e2e: {
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config; // 👈 Make sure to return the config
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: false,
      json: true,
    }
  },
});
