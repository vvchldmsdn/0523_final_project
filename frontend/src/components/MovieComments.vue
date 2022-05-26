<template>
  <div>
    <ul>
      <movie-comment
        v-for="movieComment in movieComments"
        :movieComment="movieComment"
        :key="movieComment.id"
      >        
      </movie-comment>
    </ul>
    <create-movie-comment></create-movie-comment>
  </div>
</template>

<script>
import MovieComment from '@/components/MovieComment.vue'
import CreateMovieComment from '@/components/CreateMovieComment.vue'

export default {
  name: 'MovieComments',
  components: { MovieComment, CreateMovieComment },
  props: { movieComments: Array },
}
</script>

<style>

</style>