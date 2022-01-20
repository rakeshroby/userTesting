/// <reference types="Cypress" />

const Platform = '.platform-menu'
const Solution = '.font-normal.menu-item-nolink'

export default class homePage {
  static validateUser(user) {
    cy.getElementById(Account)
        .should(($el) => expect($el).to.contain(`Hello, ${user}`))
  }

  static getReturnOrdersButton() {
    return cy.get('#nav-orders')
  }

  static verifySolutionMenu() {
    const menu_items = ['Product', 'Marketing', 'Executives']
    menu_items.forEach(verify)
    function verify(item) {
      cy.get(Solution)
        .click()
      cy.contains(item)
        .should('be.visible')
        .click()
        .then(() => {
          cy.url().should('include', `/${item.toLowerCase()}`)
        })

    }
  }

  static verifyPlatformMenu() {
    cy.get(Platform)
      .click()
      .then(() => cy.url().should('include', '/platform'))
    cy.contains('Introducing the Human Insight Platform')
      .should('be.visible')
  }

  static getRequestTrialButton() {
    return cy.get('.btn').contains('Request Trial')
  }

}
