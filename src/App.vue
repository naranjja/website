<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: { 
    'Navbar': Navbar 
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:400,500');
#app {
  font-family: 'Dosis', sans-serif;
  font-size: 1.1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
