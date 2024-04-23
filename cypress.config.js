const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    async devServer({ specs, cypressConfig, devServerEvents }) {
      const { port, close } = await startDevServer(
        specs,
        cypressConfig,
        devServerEvents
      );

      return {
        port,
        close,
      };
    },
  },

  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'http://localhost:4200',
    specPattern: 'ngx-cypress-test/cypress/e2e/**/*.*',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  },
});
