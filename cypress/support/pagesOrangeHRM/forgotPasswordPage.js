class forgotPasswordPage{
    visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')    
    }
    inputValidUsername(validUserData){
    cy.get('.oxd-input').type(validUserData).should('have.value', validUserData)
    }
    inputInvalidUsername(invalidUserData){
    cy.get('.oxd-input').type(invalidUserData).should('have.value', invalidUserData)  
    }
    inputBlankUsername(blankUserData){
        cy.get('.oxd-input').should('have.value', "")
    }
    interceptMessages() {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages')
    }
    clickForgotPasswordButton(){
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    }
    waitMessagesStatusMessageisNotModified() {
    cy.wait('@messages').its('response.statusMessage').should('equal', 'Not Modified')
    }
    directToResetCodePage() {
    cy.url().should('include', 'ResetCode')
    }
    clickResetPasswordButton(){
    cy.get('.oxd-button--secondary').click()
    }
    getNotify(ResetPasswordSuccessData){
    cy.get('.oxd-text--h6').should('contain', ResetPasswordSuccessData)
    }
    getAlertReq(RequiredData) {
    cy.get('.oxd-input-group > .oxd-text').should('contain', RequiredData)
    }
    directToNotifyResetPasswordPage() {
    cy.url().should('include', 'sendPasswordReset')
    }
    stayAtRequestPasswordPage() {
    cy.url().should('include', 'ResetCode')
    }
}

export default new forgotPasswordPage()