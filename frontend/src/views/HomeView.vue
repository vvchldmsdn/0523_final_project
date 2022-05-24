<template>
  <div>
    <nav-bar></nav-bar>
    <h1>Home</h1>
    <profile-view></profile-view>
    <default-recommend class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></default-recommend>
    <genre-recommend class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></genre-recommend>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ProfileView from '@/components/ProfileView.vue'
import DefaultRecommend from '@/components/DefaultRecommend.vue'
import GenreRecommend from '@/components/GenreRecommend.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: { ProfileView, DefaultRecommend, GenreRecommend, NavBar },
  computed: {
    ...mapGetters(['movie',])
  },
  methods: {
    ...mapActions(['fetchMovie',])
  }
}
</script>
