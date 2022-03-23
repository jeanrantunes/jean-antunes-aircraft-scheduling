import { api } from 'services/api'

export const getAircrafts = async () => {
  try {
    const { data } = await api.get('/aircrafts')

    return data
  } catch (err) {
    alert('Error aircrafts endpoint.', err)
    return null
  }
}
