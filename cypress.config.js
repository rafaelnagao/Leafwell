const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mfn56j",
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    chromeWebSecurity: false,
  },
  viewport: {
    width: 1600,
    height: 900,
  },
});
