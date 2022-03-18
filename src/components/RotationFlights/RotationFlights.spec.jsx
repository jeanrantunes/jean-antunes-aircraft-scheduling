import { render, waitFor } from '@testing-library/react'
import aircraftsMock from '../../../__mocks/aircrafts.json'
import flightsMock from '../../../__mocks/flights.json'
import RotationFlights from './RotationFlights'
import { api } from 'services/api'
jest.mock('services/api')

describe('RotationFlights component', () => {
  const aircraftSelected = aircraftsMock.data[0]
  const height = 300
  const queueFlightsSelected = flightsMock.data[0]
  const setQueueFlightsSelected = jest.fn()

  beforeEach(() => {
    api.get.mockResolvedValueOnce({ data: flightsMock })
  })

  it('should render the list of flights', () => {
    const { getByText } = render(
      <RotationFlights
        aircraftSelected={aircraftSelected}
        queueFlightsSelected={queueFlightsSelected}
        setQueueFlightsSelected={setQueueFlightsSelected}
        height={height}
      />
    )
    flightsMock.data.forEach(async flight => {
      await waitFor(() => {
        expect(getByText(flight.id)).toBeInTheDocument()
        expect(getByText(flight.readable_departure)).toBeInTheDocument()
        expect(getByText(flight.readable_arrival)).toBeInTheDocument()
      })
    })
  })
})
