/// <reference types="cypress" />
import { MainLoginPage } from "../POM/mainpage.js"

describe('Registration functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it.only('Register Email Address with valid credentials',() => {
      MainLoginPage.NewUserButton().click();
      MainLoginPage.RegisterEmail().click().type(MainLoginPage.generateRandomEmail());
      var pass =MainLoginPage.generateRandomPassword(10)
      MainLoginPage.RegisterPassword().click().type(pass);
      MainLoginPage.RegisterConfirmPassword().type(pass);
      MainLoginPage.Register().click();
  })
  it('Register user with empty email and password', () =>{
      MainLoginPage.NewUserButton().click();
      MainLoginPage.RegisterEmail().click();
      MainLoginPage.RegisterPassword().click();
      MainLoginPage.RegisterConfirmPassword().click();
      MainLoginPage.Register().click();
      MainLoginPage.emptyError().should('be.visible');
  })
})
