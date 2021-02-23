<template>
  <!-- <router-link :to="{path:`/showInfo/${data.show.id}`, props: { info: this.data}}"> -->
  <div
    class="card"
    @click="goInfo()">
    <img
      :src="checkImage"
      class="card__image" >
    <h5 class="card__title">{{ title }}</h5>
    <h6 class="card__premiered">{{ premiered }} </h6>

  </div>
  <!-- </router-link> -->
</template>

<script>
import defaultImage from './../assets/logo.png'
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    premiered: {
      type: String,
      required: false,
      default: () => ' '
    },
    image: {
      type: Object,
      default: () => ''
    }
  },
  data () {
    return {
      newData: ''
    }
  },
  computed: {
    checkImage () {
      if (this.image) {
        return this.image.medium || this.image.original
      } else {
        return defaultImage
      }
      // return this.image !== null ? this.image.medium : this.image.original
    }
  },
  methods: {
    goInfo () {
      this.$router.push({
        name: 'showInfo',
        params: {
          id: this.data.show.id,
          info: this.data.show
        }
      })
    }
  }

}
</script>

<style scoped >
.card {
    overflow: hidden;
    text-align: center;
    margin: 10px;
    max-width: 150px;
    transition: all 0.2s ease-in-out;
  }
  .card:hover {
    transform: scale(110%);
  }
  .card__image {
    width: 100%;

    border-radius: 10px;
  }
  .card__title {
    margin: 0.2em;
    word-wrap: normal;
    color: #f5f5f5;
  }
  .card__premiered {
    margin: 0.2em;
    color: rgb(150, 150, 150);
    font-weight: 500;
  }
  h6 > span {
    font-size: 0.7em;
  }
</style>
