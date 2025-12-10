class loginPageSauceDemo{
    visit(){
        cy.visit('https://www.saucedemo.com')
    }
    inputUsername(){
        cy.get('#user-name').type('standard_user')
    }
    inputPassword(){
        cy.get('#password').type('secret_sauce')
    }    
    clickLoginButton(){
        cy.get('.btn_action').click()
    }
    validationLogin(){
        cy.url().should('include', 'inventory')
    }
}

export default new loginPageSauceDemo()