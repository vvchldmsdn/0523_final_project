<template>
  <li>
    <router-link style=text-decoration:none; :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>
    
    <span id="cont" v-if="!isEditing">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
        <v-btn id="btn" x-small @click="onUpdate" color="blue lighten-1" depressed>
          edit
        </v-btn>
        |
      <v-btn x-small @click="switchIsEditing" color="amber darken-1" depressed>
        cancel
      </v-btn>
      <!-- <input type="text" v-model="payload.content">
      <button @click="onUpdate">수정</button>
      <button @click="switchIsEditing">취소</button> -->
    </span>
     <span v-if="currentUser.username === comment.user.username && !isEditing">   
        <v-btn id="btn2" x-small @click="switchIsEditing" color="blue lighten-1" depressed>
          edit
        </v-btn>
        |
      <v-btn x-small @click="deleteComment(payload)" color="amber darken-1" depressed>
        delete
      </v-btn>
    </span>  
    <!-- <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing">수정</button>
      <button @click="deleteComment(payload)">삭제</button>  
    </span>   -->
  </li>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.id,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  }
}
</script>

<style>
#cont {
  margin-left: 4px;
}

#btn {
  margin-left: 10px;
}

#btn2 {
  margin-left: 10px;
}
</style>