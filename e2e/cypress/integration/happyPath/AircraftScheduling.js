import aircrafts from '../../../../__mocks/aircrafts.json'
import flights from '../../../../__mocks/flights.json'

describe('Aircraft scheduling page', () => {
  it('should mock aircrafts response', () => {
    cy.interceptAircraftsAPI(aircrafts)
  })

  it('should mock flights response', () => {
    cy.interceptFlightsAPI(flights)
  })

  it('should select the first aircraft', () => {
    cy.get('#aircrafts-list > li button').click()
    cy.contains('Rotation GABCD')
  })

  it('should select the 2 firsts valid', () => {
    cy.contains('XS1001').closest('li').find('input[type="checkbox"]').click()
    cy.contains('AS1002').closest('li').find('input[type="checkbox"]').click()
  })

  it('should verify if contains the selected flights', () => {
    cy.get('#selected-flights').contains('XS1001')
    cy.get('#selected-flights').contains('AS1002')
  })

  it('should have flights scheduled in the timeline', () => {
    cy.get('.turnaround-time').should('be.visible')
    cy.get('.schedule-service').should('be.visible')
  })
})
