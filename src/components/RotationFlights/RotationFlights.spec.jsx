import { render, waitFor } from 'utils/tests'
import aircraftsMock from '../../../__mocks/aircrafts.json'
import flightsMock from '../../../__mocks/flights.json'
import RotationFlights from './RotationFlights'
import { useFlights } from 'hooks/useFlights'

const mockIntersectionObserver = function () {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }
}
window.IntersectionObserver = mockIntersectionObserver

jest.mock('hooks/useFlights')

describe('RotationFlights component', () => {
  const aircraftSelected = aircraftsMock.data[0]
  const height = 300
  const queueFlightsSelected = flightsMock.data[0]
  const setQueueFlightsSelected = jest.fn()

  beforeEach(() => {
    useFlights.mockReturnValue({
      fetchNextPage: jest.fn(),
      updateFlight: jest.fn(),
      flights: [
        {
          ...flightsMock
        }
      ],
      pagination: flightsMock.pagination
    })
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
