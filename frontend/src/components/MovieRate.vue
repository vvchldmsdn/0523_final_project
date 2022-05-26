<template>
  <div>
    <v-chip class="ma-2" color="primary">평균평점</v-chip>
    {{ rate_average.rate_average }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MovieRate',
  data() {
    return {
      moviePk: this.$route.params.moviePk,
    }
  },
  computed: {
    ...mapGetters(['rate_average']) // {'rate_average': 8.0}
  },
  methods: {
    ...mapActions(['fetchRate'])
  },
  created() {
    this.fetchRate(this.moviePk)
  },
  mounted() {
    this.fetchRate(this.moviePk)
  },
  watch: {
    rate_average () {console.log('shit')}
  },
  updated() {
    this.fetchRate(this.moviePk)
  }
}
</script>

<style>

</style>