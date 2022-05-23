<template>
  <div>
    <h1>Movie Detail page</h1>

    <movie-info></movie-info>
    <related-recommend class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></related-recommend>
    <movie-comment></movie-comment>
    <create-movie-comment></create-movie-comment>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieInfo from '@/components/MovieInfo.vue'
import RelatedRecommend from '@/components/RelatedRecommend.vue'
import MovieComment from '@/components/MovieComment.vue'
import CreateMovieComment from '@/components/CreateMovieComment.vue'

export default {
  name: 'MovieDetail',
  components: { MovieInfo, RelatedRecommend, MovieComment, CreateMovieComment },
  data() {
    return {
      moviePk: this.$route.params.moviePk,
    }
  },
  computed: {
    ...mapGetters(['movie'])
  },
  methods: {
    ...mapActions(['fetchMovie'])
  },
  created() {
    const moviePk = this.$route.params.moviePk
    this.fetchMovie(moviePk)
  }
}
</script>

<style>

</style>