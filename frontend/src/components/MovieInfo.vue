<template>
  <div>
    <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt=""><br>
   
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
    </span><br>


  </div>
</template>

<script>
export default {
  name: 'MovieInfo',
  props: {
    movie: Object,
  }
}
</script>

<style>

</style>