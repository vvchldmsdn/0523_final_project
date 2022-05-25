<template>
  <div>
    <div v-if="rate_check.check">
      평점 이미 줌
    </div>
    <div v-else>
      <form @submit.prevent="onSubmit">
        <label for="rate">rate(1부터 10점까지): </label>
        <input type="number" id="rate" v-model="rate">
        <button>평점등록</button>
      </form>
    </div>
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
  watch: {
    rate_check () {
      this.setRateCheck
    }
  },
  computed: {
    ...mapGetters(['movie', 'rate_check']),
  },
  methods: {
    ...mapActions(['createMovieRate', 'setRateCheck']),
    onSubmit() {
      this.createMovieRate({moviePk: this.movie.id, rates: this.rate})
      this.rate = 0
    }
  },
  created() {
    this.setRateCheck(this.movie.id)
  },
}
</script>

<style>

</style>