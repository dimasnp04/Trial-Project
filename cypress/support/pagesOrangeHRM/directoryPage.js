class directoryPage{
    interceptEmployees() {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0').as('employees')
    }
    clickDirectoryMenu() {
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    }
    directToDirectoryMenu() {
    cy.url().should('include', 'viewDirectory')
    }
    waitEmployeesStatusCodeis200() {
    cy.wait('@employees').its('response.statusCode').should('equal', 200)
    }
    clickEmployeeNameField() {
    cy.get('input[placeholder="Type for hints..."]').click()
    }
    inputRegisteredEmployeeName(RegisteredName) {
    cy.get('input[placeholder="Type for hints..."]').type(RegisteredName).should('have.value', RegisteredName)
    }
    inputUnregisteredEmployeeName(UnregisteredName) {
    cy.get('input[placeholder="Type for hints..."]').type(UnregisteredName).should('have.value', UnregisteredName)
    }
    wait4s(){
    cy.wait(4000)
    }
    clickFullNameBox() {
    cy.get('[role="listbox"]').click()
    }
    clickSearchButton() {
    cy.get('.oxd-button--secondary').click()
    }
    clickEmployeeNameFound() {
    cy.get('.oxd-sheet').click()
    }
    EmployeeNameDetails() {
    cy.get('.orangehrm-qr-code').should('have.exist').and('have.visible')
    }
    getAlertInv(invalidData) {
    cy.get('.oxd-input-group > .oxd-text').should('contain', invalidData)
    }
    clickjobTitleListButton() {
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
    }
    chooseOneJobTitleList() {
    cy.get(':nth-child(6) > span').click()
    }
    notificationRecordFound() {
    cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.exist').and('have.visible')
    }
    clickLocationListButton() {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    }
    chooseOneLocationList() {
    cy.get(':nth-child(5) > span').click()
    }
    clickResetButton() {
    cy.get('button[type="reset"]').click()
    }
    blankEmployeeNameField() {
    cy.get('input[placeholder="Type for hints..."]').should('have.value', '')
    }
    blankJobTitleField() {
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').should('have.value', '')
    }
    blankLocationField() {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('have.value', '')
    }
    clickTopMenuButton() {
    cy.get('.oxd-userdropdown-tab').click()
    }
    clickAbout() {
    cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
    }
    directToAboutPage() {
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'About')
    }
    clickSupport() {
    cy.get(':nth-child(2) > .oxd-userdropdown-link').click()
    }
    directToSupportPage() {
    cy.url().should('include', 'support')
    }
    titleCustomerSupport() {
    cy.get('.orangehrm-sub-title').should('have.text', 'Customer Support')
    }
    clickChangePassword() {
    cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
    }
    directToChangePasswordPage() {
    cy.url().should('include', 'updatePassword')
    }
    titleUpdatePassword() {
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Update Password')
    }
    clickLogout() {
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }
    directToLoginPage() {
    cy.url().should('include', 'login')
    }
    titleLoginPage() {
    cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('have.text', 'Login')
    }
    clickMainMenuButton() {
    cy.get('button[role="none"]').click()
    }
    mainMenuClosed() {
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').should('not.be.visible')
    }
    mainMenuOpened() {
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').should('be.visible')
    }
    clickToggleButton() {
    cy.get(':nth-child(3) > .oxd-icon-button').click()
    }
    searchMenuClosed() {
    cy.get(':nth-child(1) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('not.be.visible')
    }
    searchMenuOpened() {
    cy.get(':nth-child(1) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible')
    }
    clickHelpButton() {
    cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen')})
    cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button').click()
    }
    directToHelpPage() {
    cy.get('@windowOpen').should('have.been.called')
    }
    scrollIntoBottom() {
    cy.get('.oxd-layout-footer > :nth-child(2) > a').scrollIntoView()
    }
    bottomView() {
    cy.get('.oxd-layout-footer > :nth-child(2) > a').should('be.visible')
    }
    scrollIntoTop() {
    cy.get('.oxd-table-filter-header-title > .oxd-text').scrollIntoView()
    }
    topView() {
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')    
    }
}

export default new directoryPage()