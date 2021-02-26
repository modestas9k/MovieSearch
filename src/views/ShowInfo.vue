<template>
  <div class="main">
    <div class="head">
      <h1>{{ data.name }}</h1>
      <span v-if="data.rating">{{ checkRating }}</span>
    </div>
    <h3>{{ checkGenres }} {{ data.type ? data.type : '' }}</h3>
    <div class="mid">
      <img :src="checkImage" >
      <div>
        <div v-html="data.summary"/>
        <div class="buttons-wrapper">
          <button
            class="btn"
            @click="alreadyWatched">Already watched</button>
          <button
            class="btn"
            @click="wantToWatch" >Want to watch</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backUpImage from './../assets/logo.png'
import axios from 'axios'
import { mapActions } from 'vuex'

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
      if (this.data.rating.average) {
        return `${this.data.rating.average} / 10`
      }
    },
    checkGenres () {
      if (this.data.genres && this.data.genres.length >= 1) {
        return `${this.data.genres.join(', ')} | `
      }
    },
    checkImage () {
      if (this.data.image) {
        return this.data.image.original || this.data.image.medium
      } else {
        return backUpImage
      }
    },
    checkImageMedium () {
      if (this.data.image) {
        return this.data.image.medium || this.data.image.original
      } else {
        return backUpImage
      }
    }
  },
  beforeMount () {
    if (this.info && this.info.summary) {
      this.data = this.info
    } else {
      axios.get(`http://api.tvmaze.com/shows/${this.$route.params.id}`)
        .then((response) => { this.data = response.data })
    }
  },
  methods: {
    ...mapActions(['setAlreadyWatched', 'setWantToWatch']),
    alreadyWatched () {
      let check = this.$store.state.alreadyWatched.filter((i) => i.id === this.data.id)
      if (check.length < 1) {
        return this.setAlreadyWatched({
          id: this.data.id,
          name: this.data.name,
          premiered: this.data.premiered,
          image: this.checkImageMedium
        })
      }
    },
    wantToWatch () {
      let check = this.$store.state.wantToWatch.filter((i) => i.id === this.data.id)
      if (check.length < 1) {
        return this.setWantToWatch({
          id: this.data.id,
          name: this.data.name,
          premiered: this.data.premiered,
          image: this.checkImageMedium
        })
      }
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
