<template>
  <div id="app">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import screenshot from './components/ScreenGrab.vue'

export default {
  name: 'App',
  components: {
    screenshot
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
