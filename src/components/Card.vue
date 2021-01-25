<template>
  <div class="card">
    <img
      :src="image"
      class="card__image" >
    <h5 class="card__title">{{ title }}</h5>
    <h6 class="card__author"><span>Network</span> {{ network }} </h6>

  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    network: String,
    image: String
  }

}
</script>

<style scoped >
.card {
    overflow: hidden;
    text-align: center;
    margin: 10px;
    max-width: 150px;
  }
  .card__image {
    width: 100%;

    border-radius: 10px;
  }
  .card__title {
    margin: 0.2em;
    word-wrap: normal;
  }
  .card__author {
    margin: 0.2em;
    color: rgb(100, 100, 100);
    font-style: italic;
  }
  h6 > span {
    font-size: 0.7em;
  }
</style>
