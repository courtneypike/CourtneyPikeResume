<template>
  <playingPiano/>
</template>

<script>
import playingPiano from '../../components/playingPiano.vue'

export default {
  name: 'App',
  components: {
    playingPiano,
  },
  data () {
    return {
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
