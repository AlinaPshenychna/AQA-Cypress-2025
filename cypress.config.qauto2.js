const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results-qauto",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: "https://qauto2.forstudy.space",
    specPattern: "cypress/e2e/**/*.{spec,test}.{js,jsx,ts,tsx}",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      login: "quest",
      password: "welcome2qauto",
    },
    viewportWidth: 1440,
    viewportHeight: 1024,
    defaultCommandTimeout: 5000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});