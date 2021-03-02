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
          @keyup.enter="fetchData(query)"
        ><button @click="fetchData(query)">Go</button>
      </div>
    </div>
    <div class="card__wrapper" >
      <Card
        v-for="result in results"
        :key="result.id"
        :title="result.name"
        :premiered="result.premiered"
        :image="result.image"
        :data="result"
      />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {Card},
  data () {
    return {
      query: '',
      results: []
    }
  },
  computed: {
    ...mapGetters(['getSearch', 'getResult'])
  },
  mounted () {
    this.query = this.getSearch
    this.results = this.getResult
  },
  methods: {
    ...mapActions(['setSearchResult', 'setSearchValue']),
    fetchData (query) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => { this.results = response.data.map((item) => item.show) }).then(
          () => {
            this.setSearchResult(this.results)
            this.setSearchValue(query)
          }
        )
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
    justify-content: center;
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
  @media (max-width: 450px) {
    .welcome__container {
      margin: 3em 1em;
    }
    .search__wrapper {
      margin: 2em 0;
      font-size: 0.8em;
    }
  }
</style>
