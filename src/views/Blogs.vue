<template>
  <div class="blogs">
    <div class="row">
      <BlogCard :post="post" v-for="(post,index) in sampleBlogCard" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/Home/BlogCard.vue'
export default {
  components: {
    BlogCard
  },
  computed:{
    sampleBlogCard(){
      return this.$store.state.sampleBlogCard
    }
  }
}
</script>
