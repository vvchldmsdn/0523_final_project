<template>
  <div id="commentform">
  <form  @submit.prevent="onSubmit" class="row g-3">
    <div class="col-auto">
      <label for="content" class="visually-hidden">Comment</label>
      <input type="text" class="form-control" id="content" v-model="content" placeholder="Comment" style="width:500px;" required />
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Submit</button>
    </div>
  </form>
  <!-- <div>
    <form @submit.prevent="onSubmit">
      <label for="comment">comment: </label>
      <input type="text" id="comment" v-model="content" required/>
      <button>작성</button>
    </form> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreateComment',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['article']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ articlePk: this.article.id, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>
#commentform {
  display: inline-block;
  text-align: center;
}

</style>