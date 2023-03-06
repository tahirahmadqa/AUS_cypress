
class mainpage {
  RegisterEmail() {
    return cy.get('#email')
  }
  RegisterPassword() {
    return cy.get('#password')
  }

  RegisterConfirmPassword() {
    return cy.get('#password-confirm')
  }
  NewUserButton() {
    return cy.xpath('//a[contains(text(),"Register")]')

  }
  Register() {
    return cy.xpath('//input[@value="Register"]')
  }
  LoginUsername() {
    return cy.get('#username')
  }
  LoginPassword() {
    return cy.get('#password')
  }
  LoginButton() {
    return cy.get('#kc-login')
  }
  generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const domain = "example.com";
    const email = randomString + "@" + domain;
    return email;
  }
  generateRandomPassword(length) {
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * possibleChars.length);
      password += possibleChars.charAt(randomIndex);
    }
    return password;

  }
  emptyError() {
    return cy.xpath('//span[contains(text(),"Please specify username.")]')
  }
}
export const MainLoginPage = new mainpage()
