import { api } from './api'

jest.mock('./api')

describe('api service', () => {
  const responseData = 'result example'

  beforeEach(() => {
    api.get.mockResolvedValueOnce({ data: responseData })
  })

  it('should return the mocked response when a get request it is made', async () => {
    const response = await api.get('/')
    expect(response.data).toBe(responseData)
  })
})
