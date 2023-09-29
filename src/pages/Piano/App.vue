<template>
  <div>
    <playingPiano />
    <VueYoutube />
  </div>
</template>

<script>
import playingPiano from '../../components/playingPiano.vue';
import VueYoutube from 'vue3-youtube';

export default {
  name: 'App',
  components: {
    playingPiano,
    VueYoutube,
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