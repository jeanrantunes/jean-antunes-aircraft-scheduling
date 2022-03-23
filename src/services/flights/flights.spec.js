import MockAdapter from 'axios-mock-adapter'
import { api } from 'services/api'
import { getFlights } from 'services/flights'
import successResponse from '../../../__mocks/flights.json'

window.alert = jest.fn()

describe('Flights service', () => {
  function setup(status, response) {
    const axiosMock = new MockAdapter(api)

    axiosMock.onGet(new RegExp('\\/flights')).reply(status, response)
    return axiosMock
  }

  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should request flights from api', async () => {
    const axiosMock = setup(200, successResponse)
    const flights = await getFlights()

    expect(flights).toMatchObject(successResponse)
    expect(axiosMock.history.get.length).toBe(1)
  })

  describe.each([400, 404, 500])('when %s error occurs', error => {
    it('should return null', async () => {
      const axiosMock = setup(error, {})

      const flights = await getFlights()
      expect(axiosMock.history.get.length).toBe(1)
      expect(flights).toBeNull()
    })
  })
})
