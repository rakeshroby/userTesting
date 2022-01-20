/// <reference types="cypress" />

import {LoginPage, homePage} from '../../pages/index'

const { credentials } = require('../../utils/test_data')

const LogInButton = '.hide-mobile.icon-person'

describe('Login Validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
  })

  afterEach(() => {
    cy.clearCookies()
  })

    it('Login with in-valid credentials', () => {
      cy.get(LogInButton)
        .contains('Log in')
        .should('be.visible')
        .click()
      cy.url().should('include', '/users/sign_in')
      cy.intercept('POST', '/users/sign_in').as('LoginApi')
      LoginPage.loginWith(credentials.email, credentials.pass)
      cy.wait('@LoginApi').its('response.statusCode').should('eq', 200)
      LoginPage.verifyErrorMessage()
    })
})

