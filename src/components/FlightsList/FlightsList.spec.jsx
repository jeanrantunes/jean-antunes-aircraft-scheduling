import { render } from '@testing-library/react'
import flightsMock from '../../../__mocks/flights.json'

import FlightsList from './FlightsList'

describe('FlightsList component', () => {
  const mockFlightsSelected = [
    flightsMock.data[0],
    flightsMock.data[1],
    flightsMock.data[4]
  ]

  it('should render the component with selected flights', () => {
    const { getByText } = render(
      <FlightsList queueFlightsSelected={mockFlightsSelected} height={400} />
    )
    mockFlightsSelected.forEach(flight => {
      expect(getByText(flight.id)).toBeInTheDocument()
      expect(getByText(flight.readable_departure)).toBeInTheDocument()
      expect(getByText(flight.readable_arrival)).toBeInTheDocument()
    })
  })
  it('should render the component with 400px height', () => {
    const { getByRole } = render(
      <FlightsList queueFlightsSelected={mockFlightsSelected} height={400} />
    )
    expect(getByRole('list').style.height).toBe('400px')
  })
})
