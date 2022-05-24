<template>
  <div>
    <h1>연관된 영화 추천</h1>
    <div v-for="rel_movie in related_movies" :key="rel_movie.id">
      <div class="col">
        <div class="card h-100">
          <img :src="'https://image.tmdb.org/t/p/original' + rel_movie.poster_path" class="card-img-top" alt="img">
          <div class="card-body">
            <h5 lass="card-title">{{rel_movie.title }}</h5>
            <p class="card-text">{{rel_movie.overview }}</p>
          </div>
        </div>
      </div>

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
    </div>

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