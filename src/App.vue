<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <firstPage/>
  <lastPage/>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import firstPage from './components/firstPage.vue'
import lastPage from './components/lastPage.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    firstPage,
    lastPage
    

  }
}
</script>

<style src="./assets/style.css"></style>
