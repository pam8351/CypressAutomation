/// <reference types="Cypress" />

describe('My second Test suite',function()
{
    it('My fist test case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

        cy.get('.products').find('.product').each(($e1,index,$list)=>{
            const veg=$e1.find('h4.product-name').text();
            if(veg.includes('Cashews')){
                cy.wrap($e1).find('button').click();
            }

        })
        
    })
});

/*
it('My fist test case',function(){
    cy.visit('https://web.qa-1dot6.ew.exo.inc/');
    cy.get('#username').type('aprakash');
    cy.get('#password').type('Pa$sW0rd!@3');
    cy.get('[data-testid="login-submit"]').click();
    
})*/