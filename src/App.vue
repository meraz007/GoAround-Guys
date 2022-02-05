<template>
  <div id="app">
    <Nav v-if="!navigation" />
    <router-view/>
    <Footer v-if="!navigation"/>
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
  data(){
    return{
      navigation:null
    }
  },
  created(){
    this.checkRoute()
  },
  methods:{
    checkRoute(){
      if(this.$route.name==="Login" || this.$route.name==="Registration" || this.$route.name==="ResetPassword")
      {
      this.navigation=true
      return;
      }
    this.navigation=false
    }
  },
  watch:{
    $route(){
      this.checkRoute();
    }
  },
  mounted () {
    M.AutoInit()
},
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
