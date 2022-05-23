<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
          {{ movie.title }} :
          <router-link :to="{ name: 'movie', params: {moviePk: movie.id} }">
            To Detail
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DefaultRecommend',
  computed: {
    ...mapGetters(['movies'])
  },
  methods: {
    ...mapActions(['fetchMovies'])
  },
  created() {
    this.fetchMovies()
  }
}
</script>

<style>

</style>