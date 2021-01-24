<template>
  <div class="home">
    <h1>Home Page</h1>
    <input
      v-model="query"
      type="text"
      @keyup="getResult(query)" >
    <div>
      <h4>Result</h4>
      <div
        v-for="result in results"
        :key="result.show.id" >
        <div>
          <h5>{{ result.show.name }}</h5>
          <img :src="result.show.image.medium" >
          <h6>{{ result.show.genres }} </h6>
          {{ result.show.summary }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      query: '',
      results: ''
    }
  },
  methods: {
    getResult (query) {
      axios.get('http://api.tvmaze.com/search/shows?q=' + query)
        .then(response => { this.results = response.data })
    }
  }
}

</script>

<style>

</style>
