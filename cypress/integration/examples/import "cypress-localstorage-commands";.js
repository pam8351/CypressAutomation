/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('My third Test suite', function () {
    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
        cy.get('select').select('option3');
        cy.get('#autocomplete').type('usa')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if ($e1.text().includes("United States")) {
                cy.wrap($e1).click();
            }
        })
        //Reading pop up. Cypress will automatically accept the pop and close it. To read a pop up contents , you need to read using event handler.
        cy.get('#alertbtn').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        // Cypress can't work on new window or new tab. instead you need to delete the target attribute and make the browser open the link in the same tab/window. 

        cy.get('#opentab').invoke('removeAttr','target').click();

        //getting the URL of the website we are visiting and validating. 
        cy.url().should('include','rahulshetty');

        //browser navigation  cy.go('direction',option);
        cy.go('back');

        //Iterating over a table and get the value and compare, then finding the price of the course. 
        //To find the only the second coluemn or (n th child element ) syntax is tr td:nth-child(2)
        //next() is to get the next sibiling element
        cy.get('tr td:nth-child(2)').each(($e1,index,list)=>{
            const text=$e1.text()
            if(text.includes('python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText=price.text()
                    expect(priceText).to.equal('25');
                })
            }
        })
        //Mouse over . Cypress do not support mouse over. instead we need to use invoke method from Jquery to show all hidden element
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
        cy.url().should('include','top');

        //Instead of the above method, you can use "force:true " to click on hidden element without using the jquery
        //cy.contins('Top').click('force:true')

        //Also, you can copy the href value and go there instead of opening the child window . But, Cypress will not allow to proceed when the domain is different second time

        //cy.get('button').then(function(el)=>{ const url=el.prop('href')})


        //iFrame  :  - Latest cypress supports iframe. but you need to install cypress-iframe. Also, you need import the package.

        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href="mentorship"]').eq(0).click();

    });



});

/*
it('My fist test case',function(){
    cy.visit('https://web.qa-1dot6.ew.exo.inc/');
    cy.get('#username').type('aprakash');
    cy.get('#password').type('Pa$sW0rd!@3');
    cy.get('[data-testid="login-submit"]').click();
    
})*/