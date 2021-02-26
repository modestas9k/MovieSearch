<template>
  <div>
    <h1>Already watched</h1>
    <div class="card__wrapper" >
      <Card
        v-for="result in localStorageResults"
        :key="result.id"
        :title="result.name"
        :premiered="result.premiered"
        :image="result.image"
        :data="result"
        :delete-button="true"
        @deleteItem="deleteItem(result)"
      />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import { mapGetters } from 'vuex'
export default {
  name: 'AlreadyWatched',
  components: {Card},
  data () {
    return {
      localStorageResults: []
    }
  },
  computed: {
    ...mapGetters({ results: 'getAlreadyWatched' })
  },
  mounted () {
    if (localStorage.getItem('alreadyWatched')) {
      try {
        this.localStorageResults = JSON.parse(localStorage.getItem('alreadyWatched'))
      } catch (e) {
        localStorage.removeItem('alreadyWatched')
      }
    }
  },
  methods: {
    deleteItem (obj) {
      this.localStorageResults = this.localStorageResults.filter((i) => i.id !== obj.id)
      return this.$store.dispatch('removeFromAlreadyWatched', obj)
    }
  }
}
</script>

<style>
  .card__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
