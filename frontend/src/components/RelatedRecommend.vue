<template>
  <div>
    <h1>Related Movie Recommendation</h1><br>
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
          v-for="n in related_movies.length"
          :key="n"
          v-slot="{ active, toggle }"
        >
         <v-hover> 
        <template v-slot:default="{ hover }">
         <v-card
            class="ma-4"
            height="250"
            width="200"
            @click="toggle"
          >
          <v-img :src="'https://image.tmdb.org/t/p/original' + related_movies[n].poster_path">
          <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
          <router-link style="text-decoration:none;" :to="{ name: 'movie', params: {moviePk: related_movies[n].id} }">
              <v-btn>See more info</v-btn>
            </router-link>
          </v-overlay>
        </v-fade-transition> </v-img>                          
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
        </template>
      </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
     

 <!-- <div v-for="rel_movie in related_movies" :key="rel_movie.id">
      <div class="col">
        <div class="card h-100">
          <img :src="'https://image.tmdb.org/t/p/original' + rel_movie.poster_path" class="card-img-top" alt="img">
          <div class="card-body">
            <h5 lass="card-title">{{ rel_movie.title }}</h5>
            <p class="card-text">{{ rel_movie.overview }}</p>
          </div>
        </div>
      </div> -->
   
    </div>
      <!-- <div v-for="m in movie" :key="m.id"> -->
        <!-- <div class="d-flex row row-cols row-cols-4 g-4"> -->
          <!-- <div class="col">
            <div class="card h-100">
              <img :src="'https://image.tmdb.org/t/p/original' + m.poster_path" class="card-img-top" alt="poster">
              <div class="card-body">
                <h5 class="card-title">{{ m.title }}</h5>
                <p class="card-text">{{ m.overview }}</p>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <strong>{{ m.title }}</strong><br>
        <img :src="'https://image.tmdb.org/t/p/original' + m.poster_path" alt="poster"><br>
        줄거리 => {{ m.overview }} <hr> -->

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'RelatedRecommend',
  // components: { VueperSlides, VueperSlide },
  // props: {
  //   movie: Object,
  // },
  computed: {
    // ...mapGetters(['movie'])
    ...mapGetters(['related_movies'])
  },
  methods: {
    // ...mapActions(['fetchMovie'])
    ...mapActions(['fetchRelatedRecom'])
  },
  created() {
    const moviePk = this.$route.params.moviePk
    this.fetchRelatedRecom(moviePk)
    // this.fetchMovie(moviePk)
  },
}
</script>

<style>

</style>