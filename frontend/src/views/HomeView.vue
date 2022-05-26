<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <h1>Home</h1>
    <profile-view></profile-view>
    <default-recommend></default-recommend>
    <genre-recommend></genre-recommend>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
import ProfileView from '@/components/ProfileView.vue'
import DefaultRecommend from '@/components/DefaultRecommend.vue'
import GenreRecommend from '@/components/GenreRecommend.vue'
// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: { ProfileView, DefaultRecommend, GenreRecommend },
  // computed: {
  //   ...mapGetters(['movie',])
  // },
  // methods: {
  //   ...mapActions(['fetchMovie',])
  // }
}
</script>
<style scoped>
h1 {
  margin-top: 20px;
}
</style>
