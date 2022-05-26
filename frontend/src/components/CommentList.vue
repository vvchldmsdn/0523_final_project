<template>
  <div>
    <ul>
      <comment-list-item
      v-for="comment in comments"
      :comment="comment"
      :key="comment.id"
      >     
      </comment-list-item>
    </ul>
    <create-comment></create-comment>
  </div>
</template>

<script>
import CreateComment from '@/components/CreateComment.vue' // comment form
import CommentListItem from '@/components/CommentListItem.vue'

export default {
  name: 'CommentList',
  components: { CreateComment, CommentListItem },
  props: { comments: Array },
}
</script>

<style>

</style>