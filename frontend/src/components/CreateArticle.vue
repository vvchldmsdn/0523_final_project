<template>
  <div id="writes">
      <h1>글 작성하기</h1>

      <form @submit.prevent="onSubmit">
        <div>
          <label for="title" class="form-label"></label>
          <input v-model="newArticle.title" type="text" class="form-control" id="title" placeholder="제목" required>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label"></label>
          <textarea v-model="newArticle.content" class="form-control" id="content" rows="3" placeholder="내용" required></textarea>
        </div>
        <div>
          <button class="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
  <!-- <div>
    글 작성하기
    <form @submit.prevent="onSubmit">
      <div>
        <label for="title">title: </label>
        <input v-model="newArticle.title" type="text" id="title" />
      </div>
      <div>
        <label for="content">content: </label>
        <textarea v-model="newArticle.content" type="text" id="content"></textarea>
      </div>
      <div>
        <button>작성하기</button>
      </div>
    </form> -->
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
#writes {
  margin-top: 30px;
}

#title {
  width: 1000px; 
  margin: auto;
}

#content {
  width: 1000px; 
  margin: auto;
}
</style>