class HomePage{
getSalesbutton(){
    
 return    cy.get(':nth-child(2) > .nav-link');
}
}
export default HomePage;