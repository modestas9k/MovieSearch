<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {Navigation}
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
    margin: 0;
}
h1 {
  font-size: 2.8em;
  font-weight: 900;
  letter-spacing: 0.025em;
}
p {
  font-family: 'Roboto', 'Open Sans';
  letter-spacing: 0.015em;
  font-size: 0.9em;
  font-weight: 300;
  color: rgba(245, 245, 245, 0.8);
}
b {
  font-weight: 700;
}
button.btn {
  padding: 10px 20px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 1.1em;
  letter-spacing: 0.03em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: orange;
  transition: all 0.2s ease-in-out;
}
button.btn:hover {
  transform: scale(105%);
  background-color: rgb(255, 180, 42);
}
@media (max-width: 600px) {
  h1 {
    font-size: 2em;
  }
  button.btn {
    font-size: 0.9em;
  }
}
</style>
