<template>
  <div>
     <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="">
              <b-card-text align="left">
                <!-- <div class="text-center"> -->
                  <v-chip
                    class="ma-2"
                    color="primary">
                    개요
                  </v-chip><br> 
                  <!-- </div> -->
                  <div id="m-overview">{{ movie.overview }}</div> <hr>
              
                  <!-- <div class="text-center"> -->
                     <v-chip
                    class="ma-2"
                    color="primary"
                  >
                    감독
                  </v-chip>
                   <v-chip
                    class="ma-2"
                    color="rgb(210, 232, 250)"
                  >
                    {{ movie.director_ids[0]['name']}}
                  </v-chip>
                <hr>
                <v-chip
                    class="ma-2"
                    color="primary"
                  >
                    출연
                  </v-chip>
                <span v-for="actor in movie.actor_ids" :key="actor.name">
                   <v-chip
                    class="ma-2"
                    color="rgb(210, 232, 250)"
                  >
                    {{ actor.name }}
                  </v-chip>
                  
                </span><hr>
                <v-chip
                    class="ma-2"
                    color="primary"
                  >
                    장르
                  </v-chip>
                <span v-for="genre in movie.genre_ids" :key="genre.name">
                   <v-chip
                    class="ma-2"
                    color="rgb(210, 232, 250)"
                  >
                    {{ genre.name }} 
                  </v-chip>
                </span><hr>
                <movie-comments id="mov-comments" :movieComments="movie.movie_comments"></movie-comments>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <!-- <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt=""><br> -->
   
    
    <!-- <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt=""><br>
   
    개요 : {{ movie.overview }} <br>
    감독 : 
    {{ movie.director_ids[0]['name']}}<br>
    출연 : 
    <span v-for="actor in movie.actor_ids" :key="actor.name">
      {{ actor.name }} 
    </span><br>
    장르 : 
    <span v-for="genre in movie.genre_ids" :key="genre.name">
      {{ genre.name }} 
    </span><br> -->


  </div>
</template>

<script>
import MovieComments from '@/components/MovieComments.vue'

export default {
  name: 'MovieInfo',
  components: { MovieComments },
  props: {
    movie: Object,
  },
}
</script>

<style>
#m-overview {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 20px;
}

#mov-comments {
  margin-top: 20px;
}
</style>