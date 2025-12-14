import forgotPasswordPage from "../../support/pagesOrangeHRM/forgotPasswordPage"
import forgotPasswordData from "../../fixtures/DataOrangeHRM/forgotPasswordData.json"
const Login = forgotPasswordPage

describe('TS02 Forgot Password', () => {  
  it('TC001 Access Forgot Password Valid Username', () => {
    Login.visit()
    Login.interceptMessages()
    Login.clickForgotPasswordButton()
    Login.waitMessagesStatusMessageisNotModified()
    Login.directToResetCodePage()
    Login.inputValidUsername(forgotPasswordData.validUsername)
    Login.clickResetPasswordButton()
    Login.getNotify(forgotPasswordData.notifyResetPasswordLinkSentSuccesfully)
    Login.directToNotifyResetPasswordPage()
  })
  it('TC002 Access Forgot Password Invalid Username', () => {
    Login.visit()
    Login.interceptMessages()
    Login.clickForgotPasswordButton()
    Login.waitMessagesStatusMessageisNotModified()
    Login.directToResetCodePage()
    Login.inputInvalidUsername(forgotPasswordData.invalidUsername)
    Login.clickResetPasswordButton()
    Login.getNotify(forgotPasswordData.notifyResetPasswordLinkSentSuccesfully)
    Login.directToNotifyResetPasswordPage()
  })
    it('TC003 Access Forgot Password Blank Username', () => {
    Login.visit()
    Login.interceptMessages()
    Login.clickForgotPasswordButton()
    Login.waitMessagesStatusMessageisNotModified()
    Login.directToResetCodePage()
    Login.inputBlankUsername(forgotPasswordData.blankUsername)
    Login.clickResetPasswordButton()
    Login.getAlertReq(forgotPasswordData.popOutRequired)
    Login.stayAtRequestPasswordPage()
  })
})