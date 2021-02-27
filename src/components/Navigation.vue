<template>
  <div class="nav-wrapper">
    <nav>
      <span>TV Show</span>
      <div class="link-wrapper">
        <router-link
          :class="$route.path == '/' ? 'active' : ''"
          to="/">Search</router-link>
        <router-link
          :class="$route.path == '/alreadyWatched' ? 'active' : ''"
          to="/alreadyWatched">Already watched</router-link>
        <router-link
          :class="$route.path == '/wantToWatch' ? 'active' : ''"
          to="/wantToWatch">Want to watch</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
  .nav-wrapper {
    background-color: #213747;
    padding: 0 20px;
  }
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
    margin-top: 7px;
    padding: 10px 20px;
    border-radius: 10px 10px 0px 0px;
    transition: all 0.3s ease-in-out;
  }
  .active {
    background-color: #4c708b;
  }
</style>
