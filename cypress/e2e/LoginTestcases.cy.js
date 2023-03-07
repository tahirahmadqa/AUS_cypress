/// <reference types="cypress" />
import { MainLoginPage } from "../POM/mainpage.js"

describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Enter Email Address with valid credentials', () => {
    MainLoginPage.LoginUsername().type('email.tahirahmed@gmail.com');
    MainLoginPage.LoginPassword().type('1234')
    MainLoginPage.LoginButton().click()
  })

  it('Enter Email Address which is not register with web', () => {
    MainLoginPage.LoginUsername().click().type('123@gmail.com');
    MainLoginPage.LoginPassword().click().type('1234')
    MainLoginPage.LoginButton().click()
  })

  it('Enter Email Address with valid credentials', () => {
    MainLoginPage.LoginUsername().click().type('email.tahirahmed@gmail.com');
    MainLoginPage.LoginPassword().click().type('1234')
    MainLoginPage.LoginButton().click()
  })

  it('Enter empty password', () => {
    MainLoginPage.LoginUsername().click().type('email.tahirahmed@gmail.com');
    MainLoginPage.LoginPassword().click()
    MainLoginPage.LoginButton().click()
  })
  it('Enter empty Email', () => {
    MainLoginPage.LoginUsername().click();
    MainLoginPage.LoginPassword().click().type('1234')
    MainLoginPage.LoginButton().click()
  })
  it('Enter empty credentials', () => {
    MainLoginPage.LoginUsername().click()
    MainLoginPage.LoginPassword().click()
    MainLoginPage.LoginButton().click()
  })

})
