<template>
  <v-app id="app">
    <navBar/>
    <headerCarousel/>
    <h2>Projects</h2>
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import HeaderCarousel from './components/HeaderCarousel'

export default {
  components: {
    'navBar': NavBar,
    'headerCarousel': HeaderCarousel
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
