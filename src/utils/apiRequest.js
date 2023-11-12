import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://shopery-api.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})