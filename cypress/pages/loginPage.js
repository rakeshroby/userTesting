/// <reference types="Cypress" />


const EMAIL_INPUT = '[data-test-id="email"]';
const PASSWORD_INPUT = '[data-test-id="password"]';
const LOGIN_BUTTON = '[data-test-id="log-in-button"]';
const ERROR_TOASTER = '.m-0x.hydrated'

export default class LoginPage {
  static loginWith(email, password) {
    cy.get(EMAIL_INPUT).type(email).should('have.value', email);
    cy.get(PASSWORD_INPUT).type(password, { log: false })
      .should(($el) => {
        if ($el.val() !== password) {
          throw new Error('Different value of typed password')
        }
      })
    cy.get(LOGIN_BUTTON).click();
  }

  static verifyErrorMessage() {
    cy.get(ERROR_TOASTER).should(($el) => expect($el).to.contain('Please check your email address and password and try again.'))
  }

  static verifySignOutPage() {
    cy.get('body').then(($body) => {
      if ($body.find('#ap-account-switcher-container').length) {
        cy.get('h1.a-text-left').should('be.visible')
      }
      else {
        cy.get('.a-padding-extra-large > .a-spacing-small').should('be.visible')
      }
    })
  }

}
