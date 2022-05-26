<template>
  <div id="moviecomment">
    <form @submit.prevent="onSubmit" class="row g-3">
      <div class="col-auto">
        <!-- <label for="content" class="visually-hidden">Comment</label> -->
        <input type="text" class="form-control" id="content" style="width:500px;" v-model="content" placeholder="Comment">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</form>
  <!-- <div>
    <form @submit.prevent="onSubmit">
      <label for="movieComment">comment: </label>
      <input type="text" id="movieComment" v-model="content" required/>
      <button>작성</button>
    </form> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreateMovieComment',
  data() {
    return {
      content: null,
    }
  },
  computed: {
    ...mapGetters(['movie']),
  },
  methods: {
    ...mapActions(['createMovieComment']),
    onSubmit() {
      // console.log(this.content)
      this.createMovieComment({ moviePk: this.movie.id, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>
#moviecomment {
  display: inline-block;
  text-align: center;
}
</style>