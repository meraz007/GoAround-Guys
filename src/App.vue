<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import M from 'materialize-css'
export default {
  components:{
    Nav,
  },
  mounted () {
    M.AutoInit()
},
}
</script>
<style>
</style>
