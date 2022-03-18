Cypress.Commands.add('interceptAircraftsAPI', aircrafts => {
  cy.intercept('GET', '**/aircrafts', {
    ...aircrafts
  }).as('getAircrafts')

  cy.visit('http://localhost:3000')
  cy.wait('@getAircrafts')
})

Cypress.Commands.add('interceptFlightsAPI', flights => {
  cy.intercept('GET', '**/flights**', {
    ...flights
  }).as('getFlights')

  cy.visit('http://localhost:3000')
  cy.wait('@getFlights')
})
