/// <reference types="Cypress" />

const Platform = '.platform-menu'
const Solution = '.font-normal.menu-item-nolink'

export default class requestModal {
  
  static firstNameField() {
    return cy.get('input[name="FirstName"]')
  }

  static lastNameField() {
    return cy.get('input[name="LastName"]')
  }

  static titleField() {
    return cy.get('input[name="Title"]')
  }

  static emailField() {
    return cy.get('input[name="Email"]')
  }

  static phoneField() {
    return cy.get('input[name="Phone"]')
  }

  static compnayField() {
    return cy.get('input[name="Company"]')
  }

  static noOfEmployeesField() {
    return cy.get('select[name="Number_of_Employees_Company_Size__c"]')
  }

  static businessField() {
    return cy.get('select[name="Business_Use_Case__c"]')
  }

  static countryField() {
    return cy.get('select[name="Country"]')
  }

  static stateField() {
    return cy.get('select[name="State"]')
  }

  static requestButton() {
    return cy.get('.mktoButton')
  }

  static sucessfulMessage() {
    cy.get('.marketo-form-success-message').should('have.text', 'Thanks! One of our team members will be in touch shortly.\n')
  }
}
