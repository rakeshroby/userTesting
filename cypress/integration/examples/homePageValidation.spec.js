/// <reference types="cypress" />

import { homePage, requestModal } from '../../pages/index'

const { details } = require('../../utils/test_data')


describe('HomePage Validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
  })

  afterEach(() => {
    cy.clearCookies()
  })

    it('Validate elements on home page', () => {
      homePage.verifyPlatformMenu()
      homePage.verifySolutionMenu()
    })
})
