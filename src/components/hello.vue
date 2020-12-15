<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
