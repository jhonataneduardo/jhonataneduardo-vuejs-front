<template>
  <div id="login">
    <form @submit.prevent="submitLogin">
        <input type="text" v-model="email">
        <input type="password" v-model="password">
        <p>{{ msg }}</p>
        <button>Login</button>
    </form>
  </div>
</template>

<script>

import user from '@/services/user'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      msg: ''
    }
  },
  methods: {
    async submitLogin () {
      try {
        const response = await user.login(this.email, this.password)
        const token = response.data.token
        localStorage.setItem('token-access', token)
      } catch (error) {
        this.msg = 'Não foi possível logar :('
      }
    }
  }
}

</script>

<style>
</style>
