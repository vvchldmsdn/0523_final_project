<template>
  <div>
    글 수정하기
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
        <button>수정하기</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UpdateArticle',
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
    ...mapActions(['updateArticle']),
    onSubmit() {
      const payload = {
        pk: this.article.pk,
        ...this.newArticle,
      }
      this.updateArticle(payload)
    }
  }
}
</script>

<style>

</style>