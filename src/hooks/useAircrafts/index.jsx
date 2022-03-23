import { useQuery } from 'react-query'
import { getAircrafts } from 'services/aircrafts'

export const useAircrafts = () => {
  const aircrafts = useQuery(['aircrafts'], () => getAircrafts())

  return {
    isLoading: aircrafts.isLoading,
    error: aircrafts.error,
    aircrafts: aircrafts.data?.data || [],
    pagination: aircrafts.data?.pagination || null
  }
}
