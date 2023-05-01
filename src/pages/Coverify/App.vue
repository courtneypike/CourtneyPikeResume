<template>
  <myCoverify :imageList ="imageData.imageList"/>
</template>

<script>
import imageData from '../../data/imgList.js';
import myCoverify from '../../components/myCoverify.vue'

export default {
  name: 'App',
  components: {
    myCoverify,
  },
  data () {
    return {
    imageData,
    };
  },
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
