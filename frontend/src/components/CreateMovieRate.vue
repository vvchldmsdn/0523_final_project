<template>
  <div>
    <div v-if="rate_check.check">
      평점 수정
    </div>
    <div v-else>
      평점 등록
    </div>
    <div>
      <form @submit.prevent="onSubmit">
        <label for="rate">rate(1부터 10점까지): </label>
        <input type="number" id="rate" v-model="rate">
        <div v-if="rate_check.check">
          <button>평점 수정</button> ||
          <button @click="onSubmit">평점 삭제</button>
        </div>
        <div v-else>
          <button>평점 등록</button>
        </div>
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
  updated() {
    this.setRateCheck(this.movie.id)
  }
}
</script>

<style>
#rate-form {
  margin: auto;
}
</style>