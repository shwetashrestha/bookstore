<template>
  <div>
    <Navbar></Navbar>
    <router-view/>
    <EndFooter></EndFooter>
  </div>
</template>
<script>
import Navbar from "./components/Layout/Navbar"
import EndFooter from "./components/Layout/EndFooter"
export default {
  components: {
         Navbar,
         EndFooter     
      }
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
