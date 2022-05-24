<template>
  <div>
    <h1>{{ movie.title }}</h1>

    <movie-info :movie="movie"></movie-info>
    <related-recommend class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></related-recommend>
    <movie-comments :movieComments="movie.movieComments"></movie-comments>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieInfo from '@/components/MovieInfo.vue'
import RelatedRecommend from '@/components/RelatedRecommend.vue'
import MovieComments from '@/components/MovieComments.vue'

export default {
  name: 'MovieDetail',
  components: { MovieInfo, RelatedRecommend, MovieComments },
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
    this.fetchMovie(this.moviePk)
  }
}
</script>

<style>

</style>