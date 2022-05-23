<template>
  <div>
    <h1>Fantasy Recommendation</h1>
    <ul>
      <li v-for="movie in fantasy_movies" :key="movie.id">
          {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'GenreRecommend',
  computed: {
    ...mapGetters(['fantasy_movies'])
  },
  methods: {
    ...mapActions(['fetchFantasyMovies'])
  },
  created() {
    this.fetchFantasyMovies()
  }
}
</script>

<style>

</style>