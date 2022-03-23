import { render, waitFor } from 'utils/tests'
import aircraftsMock from '../../../__mocks/aircrafts.json'
import flightsMock from '../../../__mocks/flights.json'
import AircraftsList from './AircraftsList'
import { useAircrafts } from 'hooks/useAircrafts'

jest.mock('hooks/useAircrafts')

describe('AircraftsList component', () => {
  const setAircraftSelected = jest.fn()
  const flightsSelected = [flightsMock.data[0], flightsMock.data[1]]
  const height = 300

  beforeEach(() => {
    useAircrafts.mockReturnValue({
      isLoading: false,
      aircrafts: aircraftsMock.data
    })
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
