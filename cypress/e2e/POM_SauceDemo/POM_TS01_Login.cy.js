import loginPageSauceDemo from "../../support/pagesSauceDemo/loginPageSauceDemo"
describe('TS01 Login', () => {
  it('TC001 Access Login Valid Username and Password', () => {
    loginPageSauceDemo.visit()
    //cy.visit('https://www.saucedemo.com')
    loginPageSauceDemo.inputUsername()   
    //cy.get('#user-name').type('standard_user')
    loginPageSauceDemo.inputPassword()  
    //cy.get('#password').type('secret_sauce')
    loginPageSauceDemo.clickLoginButton()
    //cy.get('.btn_action').click()
    loginPageSauceDemo.validationLogin()
    //cy.url().should('include', 'inventory')
  })
})  