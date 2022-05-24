<template>
  <div>
    <h1>Fantasy Recommendation</h1><br>
      <span v-for="movie in fantasy_movies" :key="movie.id">
        <div class="col">
          <div class="card h-100">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 lass="card-title">{{ movie.title }}</h5>
            </div>
          </div>
        </div>
      </span>

    <h1>Animation Recommendation</h1>
    <ul>
      <li v-for="movie in animation_movies" :key="movie.id">
          {{ movie.title }}
      </li>
    </ul>
    <h1>SF Recommendation</h1>
    <ul>
      <li v-for="movie in sf_movies" :key="movie.id">
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
    ...mapGetters(['fantasy_movies', 'animation_movies', 'sf_movies'])
  },
  methods: {
    ...mapActions(['fetchFantasyMovies', 'fetchAnimationMovies', 'fetchSfMovies'])
  },
  created() {
    this.fetchFantasyMovies()
    this.fetchAnimationMovies()
    this.fetchSfMovies()
  }
}
</script>

<style>

</style>