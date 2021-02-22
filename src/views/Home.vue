<template>
  <div class="home">
    <div class="welcome__container">
      <div class="welcome__header">
        <h1>Find Your TV Show</h1>
        <p>Here you can search for any show on TV and add to list witch will be saved in your Local Storage</p>
      </div>
      <div class="search__wrapper">
        <input
          v-model="query"
          class="search"
          type="text"
          placeholder="Search..."
          @keyup.enter="getResult(query)"
        ><button @click="getResult(query)">Go</button>
      </div>
    </div>
    <div>
      <div class="card__wrapper" >
        <Card
          v-for="result in results"
          :key="result.show.id"
          :title="result.show.name"
          :premiered="result.show.premiered"
          :image="result.show.image"
          :data="result"
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
      results: []
    }
  },
  mounted () {
    this.query = this.$store.getters.getSearchValue
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
    margin: 3em auto;
  }
  .welcome__container p {
    max-width: 450px;
    margin: auto;
  }
  .search__wrapper {
    display: flex;
    /* justify-content: center; */
    max-width: 400px;
    margin: 2em auto;
  }
  .search__wrapper input {
    width: 100%;
    padding: 10px 20px;
    border-radius: 30px 0 0 30px;
    border: none;
    background: #f5f5f5;
    font-size: 1.2em;

  }
  .search__wrapper input:focus {
    outline: none;
  }
  .search__wrapper > button {
    color: #f5f5f5;
    letter-spacing: .02em;
    font-weight: 600;
    text-align: center;
    font-size: 1.2em;
    display: flex;
    padding: 10px 30px;
    background: #213747;
    border: none;
    border-radius: 0 30px 30px 0;

  }
  .card__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
