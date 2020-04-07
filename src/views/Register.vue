<template>
  <div id="register">
    <div class="container">
      <div class="row">
        <form @submit.prevent="submitRegister">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="name" type="text" class="form-control" id="name" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button class="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import user from '@/services/user'

export default {
  name: 'Register',
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    async submitRegister () {
      try {
        const response = await user.register({
          name: this.name,
          email: this.email,
          password: this.password
        })
        console.log(response.data)
        this.$router.push('login')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
