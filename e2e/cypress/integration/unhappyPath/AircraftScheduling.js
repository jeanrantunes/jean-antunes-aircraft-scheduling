import aircrafts from '../../../../__mocks/aircrafts.json'
import flights from '../../../../__mocks/flights.json'

describe('Aircraft scheduling page', () => {
  it('should mock aircrafts response', () => {
    cy.interceptAircraftsAPI(aircrafts)
  })

  it('should mock flights response', () => {
    cy.interceptFlightsAPI(flights)
  })

  it('should not be to select a flight without select a aircraft first', () => {
    cy.contains('XS1001').closest('li').find('input[type="checkbox"]').click()
    cy.on('window:alert', text => {
      expect(text).to.contains(
        'No aircraft selected. You must select an aircraft!'
      )
    })
  })

  it('should select the first aircraft', () => {
    cy.get('#aircrafts-list > li button').click()
    cy.contains('Rotation GABCD')
  })

  it('should select the 2 firsts valid', () => {
    cy.contains('XS1001').closest('li').find('input[type="checkbox"]').click()
    cy.contains('AS1002').closest('li').find('input[type="checkbox"]').click()
  })

  it('Should trigger the alert because AS1025 do NOT follow the rules', () => {
    cy.contains('AS1025').closest('li').find('input[type="checkbox"]').click()
    cy.on('window:alert', text => {
      expect(text).to.contains('Flight AS1025 can NOT be added as next flight.')
    })
    cy.get('#selected-flights').should('not.contain', 'AS1025')
  })

  it('should verify if contains the selected flights', () => {
    cy.get('#selected-flights').contains('XS1001')
    cy.get('#selected-flights').contains('AS1002')
  })
})
