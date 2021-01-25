<template>
  <div class="home">
    <h1>Home Page</h1>
    <div>
      <input
        v-model="query"
        type="text"
        @keyup.enter="getResult(query)"
      >
      <button @click="getResult(query)">Search</button>
    </div>
    <div>
      <h4>Result</h4>
      <div class="card__wrapper" >
        <Card
          v-for="result in results"
          :key="result.show.id"
          :title="result.show.name"
          :network="result.show.network.name"
          :image="result.show.image.medium"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import axios from 'axios'
export default {
  name: 'Home',
  components: {Card},
  data () {
    return {
      query: '',
      results: ''
    }
  },
  methods: {
    getResult (query) {
      axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => { this.results = response.data })
    }
  }
}

</script>

<style >
  .home {
    max-width: 960px;
    margin: 0 auto;
  }
  .card__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
