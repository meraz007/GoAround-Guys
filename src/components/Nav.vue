<template>
<div>
  <nav class="grey darken-4">
    <div class="container">
      <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">GoAround Guys</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">HOME</a></li>
        <li><a href="badges.html">BLOGS</a></li>
        <li><a href="collapsible.html">CREATE POST</a></li>
        <li><a href="mobile.html">LOGIN/REGISTER</a></li>
      </ul>
    </div>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
</div>
  
</template>

<script>
export default {

}
</script>
