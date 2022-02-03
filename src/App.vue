<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Header/Nav.vue'
import Footer from './components/Footer/Footer.vue'
import M from 'materialize-css'
export default {
  components:{
    Nav,
    Footer
  },
  mounted () {
    M.AutoInit()
},
}
</script>
<style>
</style>
