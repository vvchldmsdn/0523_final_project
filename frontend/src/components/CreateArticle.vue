<template>
  <div>
    글 작성하기
    <form @submit.prevent="onSubmit">
      <div>
        <label for="title">제목: </label>
        <input v-model="newArticle.title" type="text" id="title" />
      </div>
      <div>
        <label for="content">내용: </label>
        <textarea v-model="newArticle.content" type="text" id="content"></textarea>
      </div>
      <div>
        <button>작성하기</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CreateArticle',
  props: {
    article: Object,
  },
  data() {
    return {
      newArticle: {
        title: this.article.title,
        content: this.article.content,
      }
    }
  },
  methods: {
    ...mapActions(['createArticle']),
    onSubmit() {
      this.createArticle(this.newArticle)
    }
  }
}
</script>

<style>

</style>