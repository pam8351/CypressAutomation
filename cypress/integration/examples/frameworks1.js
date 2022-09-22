/*Hooks :
All before() hooks run (once)
Any beforeEach() hooks run
Tests run
Any afterEach() hooks run
All after() hooks run (once)*/

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import HomePage from '../examples/pageObjects/HomePage';
import ProductPage from '../examples/pageObjects/ProductPage';

describe('My first Test suite', function () {

    before(()=>{

        cy.fixture('example').then(function(data){
            this.data=data;
        })

    })

    const homePage=new HomePage();
    const productPage=new ProductPage();
    it('My fist test case', function () {
        cy.visit(Cypress.env('url'));
         homePage.getSalesbutton().click()
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
           
        });
        productPage.getCheckoutButton().click();

        var sum=0;
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            const amount =$el.text()
            var res=amount.split(" ");
            res=res[1].trim();
            sum =Number(sum)+Number(res);
            cy.log(sum);
        })
        productPage.getFinalCheckoutButton().click();
        let country=process.argv.country;
        productPage.getDeliveryLocation().type(country);
       
        productPage.getResultDropDown().click();
        cy.get('#checkbox2').click({force:true});
        cy.get('input[type="submit"]').click();

        cy.get('.alert').then(function(element){
            const msg=element.text();
            expect(msg.includes("Success")).to.be.true;
        })
        
      

    })
});

// To run the test from command prompt with new env link :  \.bin\cypress run --spec cypress/integration/examples/franeworks1.js --env url=http://google.com --headed

//To rerun the failed test cases ylou can use ""retries":{ json code}" google and refer cypress retries failure.


