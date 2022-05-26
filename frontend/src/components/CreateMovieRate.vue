<template>
  <div>
    <div v-if="rate_check.check">
      <v-chip class="ma-2" color="primary">
      평점 수정
      </v-chip><br> 
      
    </div>
    <div v-else>
      <v-chip class="ma-2" color="primary">
      평점 등록
      </v-chip><br> 
    </div>
    <div id="mov-rating">
      <form @submit.prevent="onSubmit">
        <label id="rate-label" for="rate"> Your rate (1 ~ 10) </label>
        <input type="number" id="rate" class="form-control" v-model="rate">
        <div v-if="rate_check.check">
          <button id="edit-btn" class="btn btn-primary mb-3">edit</button>
        </div>
        <div v-else>
          <button id="submit-btn" class="btn btn-primary mb-3">submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CreateMovieRate',
  data() {
    return {
      rate: 0,
    }
  },
  watch: {
    rate_check () {
      this.setRateCheck
    }
  },
  computed: {
    ...mapGetters(['movie', 'rate_check']),
  },
  methods: {
    ...mapActions(['createMovieRate', 'setRateCheck']),
    onSubmit() {
      this.createMovieRate({moviePk: this.movie.id, rates: this.rate})
      this.rate = 0
    }
  },
  created() {
    this.setRateCheck(this.movie.id)
  },
}
</script>

<style type="text/css">
form{
  display: flex;
  margin-bottom: 15px;
}
#rate-form {
  margin: auto;
}

#mov-rating {
  display: inline-block;
  text-align: center;
}

#rate-label {
  float: left;
  margin-right: 10px;
}

#edit-btn {
  margin-left: 10px;
}

#submit-btn {
  margin-left: 10px;
}
</style>