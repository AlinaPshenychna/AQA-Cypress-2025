const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultBrowser: "chrome",
  viewportHeight: 1024,
  viewportWidth: 1440,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 5000,
  env: {
BASIC_AUTH_USERNAME:"guest1",
BASIC_AUTH_PASSWROD: "welcomee2qauto"
  },
  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    specPattern: "cypress/**/*.{spec,test}.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
