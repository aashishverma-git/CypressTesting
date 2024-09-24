const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    // "env":{
    //   "devUrl":"https://example.cypress.io" 
    //   },
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
  },
});
