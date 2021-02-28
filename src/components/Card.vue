<template>
  <div
    class="card"
  >
    <img
      :src="checkImage"
      class="card__image"
      @click="goInfo()" >
    <div class="card__text-wrapper">
      <h5 class="card__title">{{ title }}</h5>
      <h6 class="card__premiered">{{ premiered }} </h6>
      <img
        v-if="deleteButton"
        class="card__trash"
        src="../assets/trash.svg"
        alt="trash"
        @click="$emit('deleteItem')" >
    </div>
  </div>
</template>

<script>
import defaultImage from './../assets/default-image.jpg'
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
      type: [Object, String],
      default: () => ''
    },
    deleteButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      newData: ''
    }
  },
  computed: {
    checkImage () {
      if (typeof this.image === 'object' && this.image !== null) {
        return this.image.medium || this.image.original
      } else if (typeof this.image === 'string') {
        return this.image
      } else {
        return defaultImage
      }
    }
  },
  methods: {
    goInfo () {
      this.$router.push({
        name: 'showInfo',
        params: {
          id: this.data.id,
          info: this.data
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
  .card__image {
    width: 100%;
    min-height: 210px;
    border-radius: 10px;
    object-fit: cover;
  }
  .card__image:hover {
    /* transform: scale(110%); */
    cursor: pointer;
  }
  .card__text-wrapper {
    position: relative;
  }
  .card__title {
    margin: 5px 23px 3px 20px;
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
  .card__trash {
    width: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .card__trash:hover {
    cursor: pointer;
  }
</style>
