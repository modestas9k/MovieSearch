<template>
  <div class="nav-wrapper">
    <nav>
      <router-link to="/"><span>TV Show</span></router-link>
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
    padding: 0 10px;
  }
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;

  }
  nav a {
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 600;
    line-height: 1em;
  }
  .link-wrapper {
    display: flex;
  }
  .link-wrapper a {
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 600;
    margin-top: 3px;
    padding: 10px 30px;
    border-radius: 10px 10px 0px 0px;
    border: 1px solid #537895;
    border-bottom: none;
    transition: all 0.3s ease-in-out;
  }
  .active {
    background-color: #4c708b;
    border-bottom: none;
  }
  @media (max-width: 600px) {
    .link-wrapper a {
      padding: 10px 10px;
      font-size: 0.9em;
      font-weight: 300;
    }
  }
</style>
