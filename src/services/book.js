import { HTTP } from './base'

export default {
  async post (body = {}) {
    const response = await HTTP.post('book/create', body)
    return response
  }
}
