const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
    
      
    },

    viewportWidth: 1500,
    viewportHeight: 950,
    chromeWebSecurity: false,
    failOnStatusCode: false,
   

  },
});
