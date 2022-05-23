<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="comment">comment: </label>
      <input type="text" id="comment" v-model="content" required/>
      <button>작성</button>
    </form>
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
      this.createComment({ articlePk: this.article.pk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>

</style>