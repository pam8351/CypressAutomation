const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/*.js',
    
  },
  defaultCommandTimeout:8000,

  env:{
    url:"https://rahulshettyacademy.com/angularpractice/",
    country:"usa"
  },
  

    projectId: "n6q5tb",
    // The rest of the Cypress config options go here...

   reporter:"mochawesome"


  
});
