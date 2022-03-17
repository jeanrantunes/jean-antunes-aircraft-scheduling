import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://infinite-dawn-93085.herokuapp.com/'
})
