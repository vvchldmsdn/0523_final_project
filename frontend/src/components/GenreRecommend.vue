<template>
  <div>
    <h1>Fantasy Recommendation</h1><br>
  
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
          v-for="n in fantasy_movies.length"
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
          <v-img :src="'https://image.tmdb.org/t/p/original' + fantasy_movies[n].poster_path">
          <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
          <router-link style="text-decoration:none;" :to="{ name: 'movie', params: {moviePk: fantasy_movies[n].id} }">
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
     


      <!-- <span v-for="movie in fantasy_movies" :key="movie.id">
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

    <h1>Animation Recommendation</h1>
       <!-- <span v-for="movie in animation_movies" :key="movie.id"> -->

  
     <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="2000"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
      >
        <v-slide-item
          v-for="n in animation_movies.length"
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
          <v-img :src="'https://image.tmdb.org/t/p/original' + animation_movies[n].poster_path">
          <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
          <router-link style="text-decoration:none;" :to="{ name: 'movie', params: {moviePk: animation_movies[n].id} }">
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
   


    <h1>SF Recommendation</h1>
     
   
     <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="2000"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
      >
        <v-slide-item
          v-for="n in sf_movies.length"
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
          
          <v-img :src="'https://image.tmdb.org/t/p/original' + sf_movies[n].poster_path">
          <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
          <router-link style="text-decoration:none;" :to="{ name: 'movie', params: {moviePk: sf_movies[n].id} }">
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
    


      <!-- <span v-for="movie in sf_movies" :key="movie.id"> -->
    <!-- <v-hover>
     
    <template v-slot:default="{ hover }"> -->
   <!-- <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="2000"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      > -->
<!-- <span v-for="movie in movies" :key="movie.id"> -->
  
        <!-- <v-slide-item
          v-for="n in sf_movies.length"
          :key="n"
          v-slot="{ active, toggle }"
        >

         <v-card
            class="ma-4"
            height="250"
            width="200"
            @click="toggle"
          > -->
          
          <!-- <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="250"
            width="200"
            @click="toggle"
          > -->
          <!-- <v-img :src="'https://image.tmdb.org/t/p/original' + sf_movies[n].poster_path">
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
        </v-slide-item> -->
    <!-- </span> -->
      <!-- </v-slide-group>
    </v-sheet>
</div> -->
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
    ...mapActions(['fetchFantasyMovies', 'fetchAnimationMovies', 'fetchSfMovies']),
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