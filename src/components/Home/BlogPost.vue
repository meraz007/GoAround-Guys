<template>
  <div class="row blog-wrapper">
      <div class="col s7 push-s5 blog-photo">
          <img v-if="post.welcomeScreen" :src="post.photo" alt="">
          <img v-else :src="post.blogCoverPhoto" alt="">
      </div>
      <div class="col s5 pull-s7 blog-content">
          <div class="center-align">
              <div class="custom-style">
                <h4 v-if="post.welcomeScreen">{{post.title}}</h4>
                <h2 v-else>{{post.title}}</h2>
                <p v-if="post.welcomeScreen">{{post.blogPost}}</p>
                <p v-else>{{post.blogHtml}}</p>
                <router-link class="btn waves-effect waves-light" v-if="post.welcomeScreen" to="/"><i class="material-icons right">send</i>Login/Register</router-link>
                <router-link class="btn waves-effect waves-light" v-else to="/"><i class="material-icons right">send</i>View The Post</router-link>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'BlogPost',
    props:['post']

}
</script>

<style>
img{
    width: 100%;
}
.custom-style{
    margin-top: 120px;
}
</style>