import axios from 'axios'

const port = process.env.PORT || 3000

const http = axios.create({
  baseURL: `http://localhost:${port}/api`
})
export default {
  get: page => http.get(`/tree/${page}`)
}
