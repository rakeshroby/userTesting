/// <reference types="cypress" />

import { homePage, requestModal } from '../../pages/index'

const { details } = require('../../utils/test_data')


describe('Validate request trial functionality', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
  })

  afterEach(() => {
    cy.clearCookies()
  })

  it('Request Trial', () => {
      cy.intercept('POST', '/leadCapture/save2').as('request')
      homePage.getRequestTrialButton().click({ force:true })
      requestModal.firstNameField().type(details.firstName)
      requestModal.lastNameField().type(details.lastName)
      requestModal.titleField().type(details.title)
      requestModal.emailField().type(details.email)
      requestModal.phoneField().type(details.phone)
      requestModal.compnayField().type(details.companyName)
      requestModal.noOfEmployeesField().select(details.noOfEmployees)
      requestModal.businessField().select(details.business)
      requestModal.countryField().select(details.country)
      requestModal.stateField().select(details.state)
      requestModal.requestButton().click()
      cy.wait('@request').its('response.statusCode').should('eq', 200)
      requestModal.sucessfulMessage()
  })

})
