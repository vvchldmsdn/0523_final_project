<template>
  <div>
    <h1>Movies</h1>
    {{ movies }}
    <v-hover>
     
    <template v-slot:default="{ hover }">
     <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="2000"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in movies.length"
          :key="n"
          v-slot="{ active, toggle }"
        >
         <v-card
            class="ma-4"
            height="250"
            width="200"
            @click="toggle"
          >
          <v-img :src="'https://image.tmdb.org/t/p/original' + movies[n].poster_path">
          <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
          <router-link style="text-decoration:none;" :to="{ name: 'movie', params: {moviePk: movies[n].id} }">
              <v-btn>See more info</v-btn>
          </router-link>
          </v-overlay>
        </v-fade-transition>     
         </v-img>                       
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >     
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition> 
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
        </template>
  </v-hover>

    <!-- <span v-for="movie in movies" :key="movie.id">
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
      </span> -->
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
  data: () => ({
  model: [],
}),
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