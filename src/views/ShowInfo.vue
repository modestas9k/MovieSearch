<template>
  <div class="main">
    <div class="head">
      <h1>{{ data.name }}</h1>
      <span>{{ checkRating }}</span>
    </div>
    <h3>{{ data.genres.join(', ') }} | {{ data.type }}</h3>
    <div class="mid">
      <img :src="checkImage" >
      <div v-html="data.summary"/>
    </div>
  </div>
</template>

<script>
import defaultImage from './../assets/logo.png'
import axios from 'axios'
export default {
  name: 'ShowInfo',
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      data: {}
    }
  },
  computed: {
    checkRating () {
      if (this.data.rating.average !== null) {
        return this.data.rating.average + ' / 10'
      } else {
        console.log(this.data.rating.average)
      }
    },
    checkImage () {
      if (this.data.image) {
        return this.data.image.original || this.data.image.medium
      } else {
        return defaultImage
      }
    },
    checkData () {
      if (this.info) {
        return this.info
      } else {
        this.fetchShow()
      }
    }
  },
  mounted () {
    this.data = this.checkData
  },
  methods: {
    fetchShow () {
      axios.get(`http://api.tvmaze.com/shows/${this.$route.params.id}`).then((response) => { this.data = response.data })
    }
  }
}
</script>

<style scoped>
 .main {
   max-width: 800px;
   margin: 0 auto;
 }
 .head {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
 }
 h1 {
   margin-bottom: 0;
 }
 .head span {
   font-size: 2.8em;
   font-weight: 500;
 }
 h3 {
   text-align: left;
   font-weight: 500;
 }
 .mid {
   display: flex;
   line-height: 1.25em;
 }
 img {
   max-width: 300px;
   margin-right: 20px;
 }
 .main  {
   text-align: left;
 }
</style>
