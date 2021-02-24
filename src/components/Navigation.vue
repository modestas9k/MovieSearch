<template>
  <nav>
    <span>TV Show</span>
    <div class="link-wrapper">
      <router-link to="/">Search</router-link>
      <router-link to="/alreadyWatched">Already watched</router-link>
      <router-link to="/wantToWatch">Want to watch</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
  }
  .link-wrapper {
    display: flex;
  }
  .link-wrapper a {
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 0px 0px 10px 10px;
    transition: all 0.3s ease-in-out;
  }
  .link-wrapper a:hover {
    background-color: #213747;
  }
</style>
