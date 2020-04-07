import axios from 'axios'

const TOKEN = localStorage.getItem('token-access')
export const HTTP = axios.create({
  baseURL: 'http://localhost:8081/api/',
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
})
