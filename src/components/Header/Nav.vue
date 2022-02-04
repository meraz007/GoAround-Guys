<template>
<div>
  <nav class="grey darken-4">
    <div class="container">
      <div class="nav-wrapper">
      <router-link :to="{name:'Home'}" class="brand-logo">GoAround Guys</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link tag="a" class="grey-text text-lighten-3" :to="{name:'Home'}">HOME</router-link></li>
        <li><router-link tag="a" class="grey-text text-lighten-3" :to="{name:'Blogs'}">BLOGS</router-link></li>
        <li><router-link tag="a" class="grey-text text-lighten-3" to="/">CREATE POST</router-link></li>
        <li><router-link tag="a" class="grey-text text-lighten-3" to="/">LOGIN/REGISTER</router-link></li>
      </ul>
    </div>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><router-link tag="a" class="grey-text text-lighten-3" :to="{name:'Home'}">HOME</router-link></li>
    <li><router-link tag="a" class="grey-text text-lighten-3" :to="{name:'Blogs'}">BLOGS</router-link></li>
    <li><router-link tag="a" class="grey-text text-lighten-3" to="/">CREATE POST</router-link></li>
    <li><router-link tag="a" class="grey-text text-lighten-3" to="/">LOGIN/REGISTER</router-link></li>
  </ul>
</div>
  
</template>

<script>
export default {

}
</script>
