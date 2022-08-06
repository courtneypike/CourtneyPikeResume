<template>
  <movingPictures :imageList ="imageData.imageList"/>
</template>

<script>
import imageData from '../../data/imgList.js';
import movingPictures from '../../components/movingPictures.vue'

export default {
  name: 'App',
  components: {
    movingPictures,
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
