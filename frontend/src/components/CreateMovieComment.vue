<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="movieComment">comment: </label>
      <input type="text" id="movieComment" v-model="content" required/>
      <button>작성</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreateMovieComment',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['movie']),
  },
  methods: {
    ...mapActions(['createMovieComment']),
    onSubmit() {
      this.createMovieComment({ moviePk: this.movie.pk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>

</style>