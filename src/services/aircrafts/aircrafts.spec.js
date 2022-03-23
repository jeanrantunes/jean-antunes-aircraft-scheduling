import MockAdapter from 'axios-mock-adapter'
import { api } from 'services/api'
import { getAircrafts } from 'services/aircrafts'
import successResponse from '../../../__mocks/aircrafts.json'

window.alert = jest.fn()

describe('Aircrafts service', () => {
  function setup(status, response) {
    const axiosMock = new MockAdapter(api)

    axiosMock.onGet(new RegExp('\\/aircrafts')).reply(status, response)
    return axiosMock
  }

  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should request aircrafts from api', async () => {
    const axiosMock = setup(200, successResponse)
    const aircrafts = await getAircrafts()

    expect(aircrafts.data).toMatchObject(successResponse.data)
    expect(axiosMock.history.get.length).toBe(1)
  })

  describe.each([400, 404, 500])('when %s error occurs', error => {
    it('should return null', async () => {
      const axiosMock = setup(error, {})

      const aircrafts = await getAircrafts()
      expect(axiosMock.history.get.length).toBe(1)
      expect(aircrafts).toBeNull()
    })
  })
})
