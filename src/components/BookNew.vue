<template>
  <div id="book">
    <form @submit.prevent="submitPost">
        <input type="text" v-model="title">
        <input type="text" v-model="subtitle">
        <p>{{ msg }}</p>
        <button>Adicionar</button>
    </form>
  </div>
</template>

<script>

import book from '@/services/book'

export default {
  name: 'Book',
  data () {
    return {
      title: '',
      subtitle: '',
      msg: ''
    }
  },
  methods: {
    async submitPost () {
      try {
        const response = await book.post({
          title: this.title,
          subtitle: this.subtitle
        })
        console.log(response)
      } catch (error) {
        this.msg = 'Não foi possível adicionar um novo livro :('
        console.log(error)
      }
    }
  }
}

</script>

<style>
</style>
