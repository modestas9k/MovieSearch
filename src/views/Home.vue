<template>
  <div class="home">
    <div class="welcome__container">
      <div class="welcome__header">
        <h1>Welcome to 'Find Your Show'</h1>
        <p>Here you can search for any show on TV and add to list witch will be saved in your Local Storage</p>
      </div>
      <div class="search__wrapper">
        <input
          v-model="query"
          class="search"
          type="text"
          placeholder="Search..."
          @keyup.enter="getResult(query)"
        ><button @click="getResult(query)">Enter</button>
      </div>
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
  * {
    box-sizing: border-box;
  }
  .home {
    max-width: 960px;
    margin: 0 auto;
  }
  .welcome__container {
    display: flex;
    flex-direction: column;
    max-width: 650px;
    width: 100%;
    /* align-content: center; */
    justify-content: center;
    margin: 2em;
  }
  .welcome__header {
    /* text-align: left; */
    /* margin: 0 auto ; */
  }
  .welcome__header h1 {
    color: whitesmoke;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 5px 5px 10px rgb(24, 43, 85);
    letter-spacing: 0.01em;
    font-size: 2.8em;
  }
  .welcome__header p {
    color: #ddd;
    /* max-width: 500px; */
    line-height: 1.3em;
    font-size: 1.2em;
    max-width: 600px;
    letter-spacing: 0.015em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 5px 5px 10px rgb(24, 43, 85);
    /* margin: 0 auto; */
  }

  .search__wrapper {
    display: flex;
    /* justify-content: center;
    align-content: stretch; */
    margin-top: 2em;
    width: 100%;
    max-width: 500px;
    /* margin: 0 auto; */
  }
  .search__wrapper input {

    width: 100%;
    padding: 0.5em 0.8em;
    border-radius: 30px 0 0 30px;
    border: none;
    background: whitesmoke;
    font-size: 1.3em;

  }
  .search__wrapper input:focus {
    outline: none;

  }
  .search__wrapper > button {
    background: black;
    color: whitesmoke;
    font-size: 1.2em;
    border: none;
    border-radius: 0 30px 30px 0;
    display: flex;
    padding: 10px 20px;
    text-align: center;

  }
  .card__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
