const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    
  },
  defaultCommandTimeout:8000,

  env:{
    url:"https://rahulshettyacademy.com/angularpractice/",
  },
  

    projectId: "n6q5tb",
    // The rest of the Cypress config options go here...

   reporter:"mochawesome"


  
});
