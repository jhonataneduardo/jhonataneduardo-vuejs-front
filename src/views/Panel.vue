<template>
  <div id="panel">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          lateral
        </div>
        <div class="col-md-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PanelBook from '@/views/Book'
import PanelProfile from '@/views/Profile'

export default {
  name: 'Register',
  components: { PanelProfile, PanelBook },
  data () {
    return {
      email: null,
      password: null
    }
  }
}
</script>

<style>
</style>
