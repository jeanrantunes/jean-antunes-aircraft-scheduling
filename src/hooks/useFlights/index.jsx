import { useState, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { getFlights } from 'services/flights'

export const useFlights = () => {
  const [flights, setFlights] = useState([])
  const { data, ...rest } = useInfiniteQuery(
    ['flights'],
    ({ pageParam }) => {
      return getFlights(pageParam)
    },
    {
      getNextPageParam: lastPage => {
        const next = lastPage.pagination.offset + 1
        return next
      },
      getPreviousPageParam: firstPage => {
        return firstPage.pagination.offset
      }
    }
  )

  useEffect(() => {
    if (!!flights?.length) {
      const last = data.pages?.length - 1
      setFlights([...flights, data.pages[last]])
      return
    }
    setFlights(data?.pages || [])
  }, [data])

  const updateFlight = flightSelected => {
    setFlights(
      flights.map(page => {
        const pages = page.data?.map(flight => {
          if (flight.id === flightSelected.id) {
            return {
              ...flight,
              selected: !flightSelected.selected
            }
          }
          return flight
        })
        return { ...page, data: pages }
      })
    )
  }

  return {
    ...rest,
    flights: flights,
    pagination: data?.pages?.pagination || null,
    updateFlight
  }
}
