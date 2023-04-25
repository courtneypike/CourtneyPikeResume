<template>
     <nav class = "navigation"> 
        <a href="index.html">Home</a>
        <a href="biography.html">biography</a>
        <a href="resume.html">resume</a>
        <a href="piano.html">piano</a>
        <a href="pictures.html">my cat</a>
     </nav> 
     <body>
  <h2>Hover over this picture to see more pictures</h2>
  <section class="movingPictures">
  <img :src="selectedImg.src" @mouseleave="pictureHoverFunction()" @mouseover="pictureHoverFunction()" >
  </section>

  </body>
  </template>

<script>
export default {
  name: 'movingPictures',
  props: {
    imageList: {
      type: Array,
      required: true,
      },
  },

  data () {
    return {
      pictureIndex: 0,
      };
  },

  methods: {
    pictureHoverFunction() {
      this.pictureIndex = decreaseIndex(this.pictureIndex, this.imageList.length);
    },
  },

  computed: {
    selectedImg() {
      return this.imageList[this.pictureIndex];
    },
  },
};

function decreaseIndex(index, length){
  let decreasedIndex = index -1;
  return decreasedIndex < 0 ? length -1 : decreasedIndex
}
</script>

<style scoped> 
img {
  height: 500px;
}
</style>