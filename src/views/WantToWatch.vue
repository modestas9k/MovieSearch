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

    }
  },
  computed: {
    ...mapGetters({ results: 'getWantToWatch' })
  }
}
</script>

<style>

</style>
