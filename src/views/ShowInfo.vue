<template>
  <div class="main">
    <div class="head">
      <h1>{{ info.show.name }}</h1>
      <span>{{ info.show.rating.average }} / 10</span>
    </div>
    <h3>{{ info.show.genres.join(', ') }} | {{ info.show.type }}</h3>
    <div class="mid">
      <img :src="info.show.image.original" >
      <div v-html="info.show.summary"/>
    </div>
  </div>
</template>

<script>
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
