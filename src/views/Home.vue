<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
    <div class="row">
    <BlogCard :post="post" v-for="(post,index) in sampleBlogCard" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/Home/BlogPost.vue'
import BlogCard from '../components/Home/BlogCard.vue'
export default {
  name: 'Home',
  components: {
    BlogPost,
    BlogCard
  },
  data(){
    return{
      welcomeScreen:{
        title:"Welcome!",
        blogPost:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        welcomeScreen:true,
        photo:"https://media.istockphoto.com/photos/mature-couple-hike-through-forest-in-the-morning-picture-id1311136999?b=1&k=20&m=1311136999&s=170667a&w=0&h=b1khiPDHmLZq30QU8o0kQR2yMmwpNlJ8h-9-AuRQyzo="
      },
      sampleBlogPost:[
        {
          title:'This is a title',
          blogHtml:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          blogCoverPhoto:"https://media.istockphoto.com/photos/enjoying-the-hilltop-views-picture-id1356164830?b=1&k=20&m=1356164830&s=170667a&w=0&h=P4Z0gyRJfjAP9KZtIw2Nh2V-nOeA42rNy7_XyEZQTHU="
        },
        {
          title:'This is a title 2',
          blogHtml:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          blogCoverPhoto:"https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
        }
      ],
    }
  },
  computed:{
    sampleBlogCard(){
      return this.$store.state.sampleBlogCard
    }
  }
}
</script>
<style scoped>

</style>
