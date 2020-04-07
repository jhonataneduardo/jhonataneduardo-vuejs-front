import { HTTP } from './base'

export default {

  async login (email, password) {
    const response = await HTTP.get('user/login', {
      auth: {
        username: email,
        password: password
      }
    })
    return response
  },

  async register (body = {}) {
    const response = await HTTP.post('user/register', body)
    return response
  }

}
