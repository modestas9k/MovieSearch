<template>
  <div
    v-if="data !== {}"
    class="main">
    <div
      :class="$mq"
      class="head">
      <h1>{{ data.name }}</h1>
      <div
        v-if="data.rating && data.rating.average !== null"
      >
        <span
          :class="$mq"
          class="rating">{{ checkRating }}</span>
      </div>
    </div>
    <h3>{{ checkGenres }} {{ data.type ? data.type : '' }}</h3>
    <div class="mid">
      <img :src="$mq === 'mobile' ? checkImageMedium : checkImage" >
      <div>
        <div
          class="summary"
          v-html="data.summary"/>
        <span
          v-show="message"
          :class="messageSuccess ? 'success' : 'fail'"
          class="message">{{ message }}</span>
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
import backUpImage from './../assets/default-image.jpg'
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
      data: {},
      message: '',
      messageSuccess: true
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
      axios.get(`https://api.tvmaze.com/shows/${this.$route.params.id}`)
        .then((response) => { this.data = response.data })
    }
  },
  methods: {
    ...mapActions(['setAlreadyWatched', 'setWantToWatch']),
    alreadyWatched () {
      let check = this.$store.state.alreadyWatched.filter((i) => i.id === this.data.id)
      if (check.length < 1) {
        this.message = 'Successfully added to "Already watched" list'
        this.messageSuccess = true
        return this.setAlreadyWatched({
          id: this.data.id,
          name: this.data.name,
          premiered: this.data.premiered,
          image: this.checkImageMedium
        })
      } else {
        this.message = 'You already added to list'
        this.messageSuccess = false
      }
    },
    wantToWatch () {
      let check = this.$store.state.wantToWatch.filter((i) => i.id === this.data.id)
      if (check.length < 1) {
        this.message = 'Successfully added to "Want to watch" list'
        this.messageSuccess = true
        return this.setWantToWatch({
          id: this.data.id,
          name: this.data.name,
          premiered: this.data.premiered,
          image: this.checkImageMedium
        })
      } else {
        this.message = 'You already added to list'
        this.messageSuccess = false
      }
    }
  }
}
</script>

<style scoped>
 .main {
   max-width: 800px;
   margin: 0 auto;
   padding: 2em;
   text-align: left;
 }
 .head {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
 }
 .head.mobile {
   flex-direction: column;
   align-items: flex-start;
 }
 h1 {
   margin: 0;
 }
 .rating {
   font-size: 2.8em;
   font-weight: 500;
 }
 .rating::before {
   display: inline-block;
   content: ' ';
   background-image: url('../assets/star.svg');
   background-size: 30px;
   width: 30px;
   height: 30px;
   margin-right: 5px;

 }
 .rating.mobile {
   font-size: 1.2em;
 }
 .rating.mobile::before {
   background-size: 20px;
   width: 20px;
   height: 20px;
 }
 h3 {
   text-align: left;
   font-weight: 500;
   margin-bottom: 2em;
 }
 .mid {
   display: flex;
   align-items: flex-start;
   line-height: 1.25em;
 }
 img {
   max-width: 300px;
   margin-right: 2em;
   border-radius: 20px;
   object-fit: cover;
 }
 .summary {
   margin-bottom: 3em;
 }
 .message {
   padding: 5px;
   font-size: 0.7em;
   letter-spacing: 0.03em;
   border-radius: 5px;
 }
 .success {
   background: #02940e;
 }
 .fail {
   background: #d2691e;
 }
 .buttons-wrapper {
   margin-top: 2em;
 }
 .buttons-wrapper button:first-child {
   margin-right: 1em;
 }
 @media (max-width: 650px) {
   .mid {
     flex-direction: column;
   }
   .mid img {
     margin: 0;
   }
   h1 {
     font-size: 2.3em;
   }
   .head span {
     font-size: 2em;
   }
   span > image {
     width: 2em;
   }
   h3 {
     font-size: 1.2em;
   }
 }
 @media (max-width: 420px) {
   h1 {
     font-size: 1.8em;
     font-weight: 600;
   }
   h3 {
     font-size: 1em;
   }
 }
</style>
