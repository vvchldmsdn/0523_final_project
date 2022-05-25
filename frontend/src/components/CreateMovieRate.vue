<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="rate">rate(1부터 10점까지): </label>
      <input type="number" id="rate" v-model="rate">
      <button>평점등록</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CreateMovieRate',
  data() {
    return {
      rate: 0,
    }
  },
  computed: {
    ...mapGetters(['movie']),
  },
  methods: {
    ...mapActions(['createMovieRate']),
    onSubmit() {
      this.createMovieRate({moviePk: this.movie.id, rates: this.rate})
      this.rate = 0
    }
  }
}
</script>

<style>

</style>