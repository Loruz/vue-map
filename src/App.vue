<template>
  <div id="app">
    <Map/>
  </div>
</template>

<script>
import Map from "./components/Map"
export default {
  name: 'app',
  components: {
    Map
  }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: sans-serif;
  }

</style>
