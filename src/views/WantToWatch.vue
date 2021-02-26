<template>
  <div>
    <h1>Want to watch</h1>
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
  name: 'WantToWatch',
  components: {Card},
  data () {
    return {
      localStorageResults: []
    }
  },
  computed: {
    ...mapGetters({ results: 'getWantToWatch' })
  },
  mounted () {
    if (localStorage.getItem('wantToWatch')) {
      try {
        this.localStorageResults = JSON.parse(localStorage.getItem('wantToWatch'))
      } catch (e) {
        localStorage.removeItem('wantToWatch')
      }
    }
  },
  methods: {
    deleteItem (obj) {
      this.localStorageResults = this.localStorageResults.filter((i) => i.id !== obj.id)
      return this.$store.dispatch('removeFromWantToWatch', obj)
    }
  }
}
</script>

<style>

</style>
