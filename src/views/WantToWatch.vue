<template>
  <div>
    <h1>Want to watch</h1>
    <div class="card__wrapper" >
      <Card
        v-for="result in results"
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
export default {
  name: 'WantToWatch',
  components: {Card},
  data () {
    return {
      results: []
    }
  },
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      this.results = this.$store.state.wantToWatch
    },
    deleteItem (obj) {
      this.results = this.results.filter((i) => i.id !== obj.id)
      return this.$store.dispatch('removeFromWantToWatch', obj)
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
    max-width: 960px;
    margin: 0 auto;
  }
</style>
