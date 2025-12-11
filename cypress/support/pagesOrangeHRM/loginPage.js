class loginPage{
    visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')    
    }
    inputValidUsername(validUserData){
        cy.get('[name="username"]').type(validUserData).should('have.value', 'Admin')
    }
    inputValidPassword(validPassData){
        cy.get('[name="password"]').type(validPassData).should('have.value', 'admin123')
    }
    inputInvalidUsername(invalidUserData){
        cy.get('[name="username"]').type(invalidUserData).should('not.have.value', 'Admin')
    }
    inputInvalidPassword(invalidPassData){
         cy.get('[name="password"]').type(invalidPassData).should('not.have.value', 'admin123')
    }
    inputBlankUsername(blankUserData){
        cy.get('[name="username"]').should('not.have.value', 'Admin')
    }
    inputBlankPassword(blankPassData){
        cy.get('[name="password"]').should('not.have.value', 'admin123')
    }
    clickLoginButton(){
        cy.get('[type="submit"]').click()
    }
    clickForgotPasswordButton(){
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
    }
    interceptSubUnit() {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit')
    }
    interceptMessages() {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages')
    }
    interceptValidate() {
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('validate')
    }
    interceptLogin() {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login')
    }
    getAlertInv(invalidCredentialsData) {
    cy.get('.oxd-alert').should('contain', invalidCredentialsData)
    }
    getAlertReq(RequiredData) {
    cy.get('.oxd-input-group > .oxd-text').should('contain', RequiredData)
    }
    waitSubUnitStatusCodeis200() {
    cy.wait('@subunit').its('response.statusCode').should('equal', 200)
    }
    waitMessagesStatusCodeis304() {
    cy.wait('@messages').its('response.statusCode').should('equal', 304)
    }
    waitValidateStatusCodeis302() {
    cy.wait('@validate').its('response.statusCode').should('equal', 302)
    }
    waitValidateStatusMessageisFound() {
    cy.wait('@validate').its('response.statusMessage').should('equal', 'Found')
    }
    waitLoginisUnresponse() {
    cy.wait('@login').should('include.all.keys', ['request', 'response'])
    }
    waitLoginStatusCodeis200() {
    cy.wait('@login').its('response.statusCode').should('equal', 200)
    }
    waitLoginStatusMessageisOK() {
    cy.wait('@login').its('response.statusMessage').should('equal', 'OK')
    }
    waitMessagesStatusMessageisOK() {
    cy.wait('@messages').its('response.statusMessage').should('equal', 'OK')
    }
    waitMessagesStatusCodeis200() {
    cy.wait('@messages').its('response.statusCode').should('equal', 200)
    }
    waitMessagesStatusMessageisNotModified() {
    cy.wait('@messages').its('response.statusMessage').should('equal', 'Not Modified')
    }
    directToDashboard() {
    cy.url().should('include', 'dashboard')
    }
    stayAtLoginPage() {
    cy.url().should('include', 'login')
    }
    directToResetCodePage() {
    cy.url().should('include', 'ResetCode')
    }
}

export default new loginPage()