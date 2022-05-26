<template>

  <!-- <form @submit.prevent="onSubmit">
    <div>
      <label for="title">title: </label>
      <input v-model="newArticle.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">content: </label>
      <textarea v-model="newArticle.content" type="text" id="content"></textarea>
    </div>
    <div>
      <button>수정하기</button>
    </div>
  </form> -->
   <form @submit.prevent="onSubmit">
      <div>
        <label for="title" class="form-label"></label>
        <input v-model="newArticle.title" type="text" class="form-control" id="title" required>
      </div>
      <div class="mb-3">
        <label for="content" class="form-label"></label>
        <textarea v-model="newArticle.content" class="form-control" id="content" rows="3" required></textarea>
      </div>
      <div>
        <button class="btn btn-primary mb-3">수정하기</button>
      </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ArticleForm',
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
          articlePk: this.article.id,
          ...this.newArticle,
        }
        this.updateArticle(payload)
        }
      },
    }
</script>

<style></style>
