<template>
  <div>
    <p>평균평점 {{ rate_average.rate_average }}</p>
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
  }
}
</script>

<style>

</style>