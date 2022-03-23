import { useQuery } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import { useAircrafts } from 'hooks/useAircrafts'
import mockAircrafts from '../../../__mocks/aircrafts.json'

const mockAircraftsResult = {
  isLoading: false,
  data: {
    ...mockAircrafts
  }
}

const mockExpect = {
  isLoading: false,
  error: undefined,
  aircrafts: mockAircrafts.data,
  pagination: mockAircrafts.pagination
}

function setup() {
  return renderHook(() => useAircrafts()).result.current
}

jest.mock('react-query', () => ({
  useQuery: jest.fn()
}))

describe('useAircrafts', () => {
  describe('when called', () => {
    it('should return aircrafts with right values', () => {
      useQuery.mockReturnValue(mockAircraftsResult)
      const response = setup()
      expect(response).toEqual(mockExpect)
    })
  })

  describe('when is loading', () => {
    it('should return aircrafts as empty data', () => {
      const mockLoading = {
        isLoading: true,
        aircrafts: []
      }

      useQuery.mockReturnValue(mockLoading)

      const response = setup()
      expect(response).toMatchObject(mockLoading)
    })
  })
})
