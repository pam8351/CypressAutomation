class ProductPage{
    getCheckoutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
    getFinalCheckoutButton(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn');
    }

    getDeliveryLocation(){
        return cy.get('#country');
    }

    getResultDropDown(){
        return cy.get('.suggestions > :nth-child(1) > li > a');
    }
}
export default ProductPage;