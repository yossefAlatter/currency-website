<template>
  <div id="app">

    <!-- navigation bar -->
    <!-- start -->
    <app-nav />
    <!-- end -->

    <!-- pagination app -->
    <!-- start -->
    <pagination-app />
    <!-- end -->
    
    <router-view />
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import PaginationApp from './components/PaginationApp.vue'

export default {
  components: { PaginationApp, AppNav },
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
