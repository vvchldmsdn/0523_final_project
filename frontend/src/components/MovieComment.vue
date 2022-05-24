<template>
<div>
  <li>    
    <router-link :to="{ name: 'profile', params: { username: movieComment.user.username } }">
      {{ movieComment.user.username }}
    </router-link>
    
    <span v-if="!isEditing">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">수정</button>
      <button @click="switchIsEditing">취소</button>
    </span>

    <span v-if="currentUser.username === movieComment.user.username && !isEditing">
      <button @click="switchIsEditing">수정</button>
      <button @click="deleteMovieComment(payload)">삭제</button>  
    </span>
  </li>
</div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieComment',
  props: { movieComment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        moviePk: this.movieComment.movie,
        movieCommentPk: this.movieComment.pk,
        content: this.movieComment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateMovieComment', 'deleteMovieComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateMovieComment(this.payload)
      this.isEditing = false
    }
  }
}
</script>

<style>

</style>