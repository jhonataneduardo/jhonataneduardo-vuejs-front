import { HTTP } from './base'

export default {
  loggedIn () {
    return HTTP.get('user/me').then((response) => {
      return response
    })
  }
}
