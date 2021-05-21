<template>
  <div id="app">
    <Screenshot />
  </div>
</template>

<script>
import Screenshot from './components/ScreenGrab.vue'

export default {
  name: 'App',
  components: {
    Screenshot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
