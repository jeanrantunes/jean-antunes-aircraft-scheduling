import { render, waitFor } from '@testing-library/react'
import aircraftsMock from '../../../__mocks/aircrafts.json'
import flightsMock from '../../../__mocks/flights.json'
import AircraftsList from './AircraftsList'
import { api } from 'services/api'

jest.mock('services/api')
window.alert = jest.fn()

describe('AircraftsList component', () => {
  const setAircraftSelected = jest.fn()
  const flightsSelected = [flightsMock.data[0], flightsMock.data[1]]
  const height = 300

  beforeEach(() => {
    api.get.mockResolvedValueOnce({ data: aircraftsMock })
  })

  it('should render AircraftsList with all aircrafts mocked', async () => {
    const { getByText } = render(
      <AircraftsList
        setAircraftSelected={setAircraftSelected}
        flightsSelected={flightsSelected}
        height={height}
      />
    )
    aircraftsMock.data.forEach(async aircraft => {
      await waitFor(() => expect(getByText(aircraft.ident)).toBeInTheDocument())
    })
  })
})
