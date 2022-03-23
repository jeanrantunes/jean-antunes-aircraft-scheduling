import { api } from 'services/api'

export const getFlights = async offset => {
  try {
    const { data } = await api.get('/flights', { params: { offset } })

    return data
  } catch (err) {
    alert('Error flights endpoint.', err)
    return null
  }
}
