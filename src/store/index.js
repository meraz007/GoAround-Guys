import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCard:[
      {
        title:'This is a title',
        blogDate:"April 4,2022",
        blogCoverPhoto:"https://media.istockphoto.com/photos/enjoying-the-hilltop-views-picture-id1356164830?b=1&k=20&m=1356164830&s=170667a&w=0&h=P4Z0gyRJfjAP9KZtIw2Nh2V-nOeA42rNy7_XyEZQTHU="
      },
      {
        title:'This is a title 2',
         blogDate:"May 4,2022",
        blogCoverPhoto:"https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
      },
      {
        title:'This is a title',
         blogDate:"June 4,2022",
        blogCoverPhoto:"https://media.istockphoto.com/photos/enjoying-the-hilltop-views-picture-id1356164830?b=1&k=20&m=1356164830&s=170667a&w=0&h=P4Z0gyRJfjAP9KZtIw2Nh2V-nOeA42rNy7_XyEZQTHU="
      },
      {
        title:'This is a title 2',
        blogDate:"July 4,2022",
        blogCoverPhoto:"https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
