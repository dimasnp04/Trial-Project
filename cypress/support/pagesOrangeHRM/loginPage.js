class loginPage{
    visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')    
    }
    inputValidUsername(validUserData){
        cy.get('[name="username"]').type(validUserData).should('have.value', validUserData)
    }
    inputValidPassword(validPassData){
        cy.get('[name="password"]').type(validPassData).should('have.value', validPassData)
    }
    inputInvalidUsername(invalidUserData){
        cy.get('[name="username"]').type(invalidUserData).should('have.value', invalidUserData)
    }
    inputInvalidPassword(invalidPassData){
         cy.get('[name="password"]').type(invalidPassData).should('have.value', invalidPassData)
    }
    inputBlankUsername(blankUserData){
        cy.get('[name="username"]').should('have.value', "")
    }
    inputBlankPassword(blankPassData){
        cy.get('[name="password"]').should('have.value', "")
    }
    clickLoginButton(){
        cy.get('[type="submit"]').click()
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
}

export default new loginPage()