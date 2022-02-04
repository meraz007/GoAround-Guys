<template>
<div class="col s3">
      <div class="card">
        <div class="card-image">
          <img :src="post.blogCoverPhoto">
          <span class="card-title">{{post.title}}</span>
        </div>
        <div class="card-content">
          <p>{{post.blogDate}}</p>
        </div>
      </div>
      </div>
</template>

<script>
export default {
    name:'BlogCard',
    props:['post']

}
</script>

<style>

</style>