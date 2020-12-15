<template>
  <div id='app'>
    <navbar/>
    <router-view></router-view>
    <footerbar/>
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'
import footerbar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    navbar,
    footerbar
  }
}
</script>

<style>

</style>
