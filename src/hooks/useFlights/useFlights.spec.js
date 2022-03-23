import { useInfiniteQuery } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import { useFlights } from 'hooks/useFlights'
import mockFlights from '../../../__mocks/flights.json'

const mockFlightsResult = {
  isLoading: false,
  data: {
    pages: {
    ...mockFlights
  }
},
}

const mockExpect = {
  isLoading: false,
  flights: {
    ...mockFlights
  },
  pagination: mockFlights.pagination,
}

function setup() {
  return renderHook(() => useFlights()).result.current
}

jest.mock('react-query', () => ({
  useInfiniteQuery: jest.fn()
}))

describe('useFlights', () => {
  describe('when called', () => {
    it('should return flights with right values', () => {
      useInfiniteQuery.mockReturnValue(mockFlightsResult)
      const response = setup()
      expect(response).toMatchObject(mockExpect)
    })
  })

  describe('when is loading', () => {
    it('should return flights as empty data', () => {
      const mockLoading = {
        isLoading: true,
        flights: []
      }

      useInfiniteQuery.mockReturnValue(mockLoading)

      const response = setup()
      expect(response).toMatchObject(mockLoading)
    })
  })
})
