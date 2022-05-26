<template>
<div>
  <div>    
    <router-link style=text-decoration:none; :to="{ name: 'profile', params: { username: movieComment.user.username } }">
      {{ movieComment.user.username }}
    </router-link>
    <span id="moviecont" v-if="!isEditing">{{ payload.content }}</span>
  
    <span v-if="isEditing">
    <input type="text" v-model="payload.content">
      <v-btn id="moviebtn" x-small @click="onUpdate" color="blue lighten-1" depressed>
        edit
      </v-btn>
      |
    <v-btn x-small @click="switchIsEditing" color="amber darken-1" depressed>
      cancel
    </v-btn>
  </span>

  <span v-if="currentUser.username === movieComment.user.username && !isEditing">   
      <v-btn id="moviebtn2" x-small @click="switchIsEditing" color="blue lighten-1" depressed>
        edit
      </v-btn>
      |
    <v-btn x-small @click="deleteMovieComment(payload)" color="amber darken-1" depressed>
      delete
    </v-btn>
  </span>  
 </div>
  <!-- <li>    
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
  </li> -->
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
        movieCommentPk: this.movieComment.id,
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
#moviecont {
  margin-left: 4px;
}

#moviebtn {
  margin-left: 10px;
}

#moviebtn2 {
  margin-left: 10px;
}
</style>