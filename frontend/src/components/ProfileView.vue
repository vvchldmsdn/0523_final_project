<template>
  <div>
    {{profile.username }}님 안녕하세요!
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 

export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile'])
  },
}
</script>

<style>

</style>