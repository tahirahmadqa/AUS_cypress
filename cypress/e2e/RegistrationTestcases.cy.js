/// <reference types="cypress" />
import { MainLoginPage } from "../POM/mainpage.js"

describe('Registration functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Register Email Address with valid credentials', () => {
    MainLoginPage.NewUserButton().click();
    MainLoginPage.RegisterEmail().click().type(MainLoginPage.generateRandomEmail());
    var pass = MainLoginPage.generateRandomPassword(10)
    MainLoginPage.RegisterPassword().click().type(pass);
    MainLoginPage.RegisterConfirmPassword().type(pass);
    MainLoginPage.Register().click();
  })

  it('Register user with empty email and password', () => {
    MainLoginPage.NewUserButton().click();
    MainLoginPage.RegisterEmail().click();
    MainLoginPage.RegisterPassword().click();
    MainLoginPage.RegisterConfirmPassword().click();
    MainLoginPage.Register().click();
    MainLoginPage.emptyError().should('be.visible');
  })

  it('Enters a Different password in the " confirm password " box', () => {
    MainLoginPage.NewUserButton().click();
    MainLoginPage.RegisterEmail().click().type(MainLoginPage.generateRandomEmail());
    var pass = MainLoginPage.generateRandomPassword(10)
    var value = MainLoginPage.generateRandomPassword(4)
    MainLoginPage.RegisterPassword().click().type(pass);
    MainLoginPage.RegisterConfirmPassword().type(value);
    MainLoginPage.Register().click();
  })

  it('Enter an email that is already registered with the website', () => {
    MainLoginPage.NewUserButton().click();
    MainLoginPage.RegisterEmail().click().type('email.tahirahmad2@gmail.com');
    var pass = MainLoginPage.generateRandomPassword(10)
    MainLoginPage.RegisterPassword().click().type(pass);
    MainLoginPage.RegisterConfirmPassword().type(pass);
    MainLoginPage.Register().click();
  })
})
