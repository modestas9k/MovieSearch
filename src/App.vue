<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
body {
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    text-align: center;
    color: #f5f5f5;
}
h1 {
  font-size: 2.8em;
  font-weight: 900;
  letter-spacing: 0.025em;
}
p {
  letter-spacing: 0.015em;
  font-size: 0.9em;
  font-weight: 300;
  color: rgba(245, 245, 245, 0.8);
}
b {
  font-weight: 700;
}
</style>
