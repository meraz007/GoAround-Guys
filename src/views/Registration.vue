<template>
<div class="container">
  <div class="row">
      <div class="col s4">
        <!-- Promo Content 1 goes here -->
        <div class="signup">
          <form>
          <label>First Name:</label>
          <input type="text">
          <label>Last Name:</label>
          <input type="text">
          <label>Username:</label>
          <input type="text">
          <label>Email:</label>
          <input type="email">
          <label>Password:</label>
          <input type="password">
          <button>Sign Up</button>
        </form>
        </div>
      </div>
      <div class="col s8">
        <img :src="require('../assets/rain.jpg')" alt="">
      </div>
    </div>
</div>   
</template>

<script>

export default {
  components:{}

}
</script>

<style scoped>
  img{
    width: 820px;
    height: 630px;
  }
  .signup{
    width: 300px;
  }
</style>