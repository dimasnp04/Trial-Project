import loginPage from "../../support/pagesOrangeHRM/loginPage"
import loginData from "../../fixtures/DataOrangeHRM/loginData.json"
const Login = loginPage
describe('TS02 Forgot Password', () => {  
  it('TC001 Access Forgot Password Valid Username', () => {
    Login.visit()
    Login.interceptMessages()
    Login.clickForgotPasswordButton()
    Login.waitMessagesStatusMessageisNotModified()
    Login.directToResetCodePage()
    cy.get('.oxd-input').type('Admin').should('have.value', 'Admin')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-text--h6').should('contain', 'Reset Password link sent successfully')
    cy.url().should('include', 'sendPasswordReset')
  })
  it('TC002 Access Forgot Password Invalid Username', () => {
    Login.visit()
    Login.interceptMessages()
    Login.clickForgotPasswordButton()
    Login.waitMessagesStatusMessageisNotModified()
    Login.directToResetCodePage()
    cy.get('.oxd-input').type('dimas').should('not.have.value', 'Admin')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-text--h6').should('contain', 'Reset Password link sent successfully')
    cy.url().should('include', 'sendPasswordReset')
  })
    it('TC003 Access Forgot Password Blank Username', () => {
    Login.visit()
    Login.interceptMessages()
    Login.clickForgotPasswordButton()
    Login.waitMessagesStatusMessageisNotModified()
    Login.directToResetCodePage()
    cy.get('.oxd-input').should('not.have.value', 'Admin')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required')
    cy.url().should('include', 'ResetCode')
  })
})