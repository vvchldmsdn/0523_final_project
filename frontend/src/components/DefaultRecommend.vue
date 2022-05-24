<template>
  <div>
    <h1>Movies</h1>
    <span v-for="movie in movies" :key="movie.id">
        <div class="col">
          <div class="card h-100">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 lass="card-title">{{ movie.title }}</h5>
               <router-link :to="{ name: 'movie', params: {moviePk: movie.id} }">
                 To Detail
               </router-link>
            </div>
          </div>
        </div>
      </span>
    <!-- <ul>
      <li v-for="movie in movies" :key="movie.id">
          {{ movie.title }} :
          <router-link :to="{ name: 'movie', params: {moviePk: movie.id} }">
            To Detail
          </router-link>
      </li>
    </ul> -->
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