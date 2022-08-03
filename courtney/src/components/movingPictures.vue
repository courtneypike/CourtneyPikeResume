<template>
      <menu> <li><a href="biography.html">biography</a></li> 
        <li><a href="choices.php">choices</a></li> 
        <li><a href="resume.html">resume</a></li> 
        <li><a href="piano.html">piano</a></li> 
        <li><a href="index.html">my cat</a></li>
     </menu> 
  <h2>Hover over "my cat" to see more pictures of my cat</h2>
  <section class="movingPictures">
  <img :src="selectedImg.src" @mouseleave="pictureHoverFunction()" @mouseover="pictureHoverFunction()" >
  </section>
  <h2>My cat</h2>
  <section class="movingPictures">
  <img :src="require ('../data/images_videos/mochi.jpg')" @mouseleave="pictureHoverFunction()" @mouseover="pictureHoverFunction()" >
  </section>
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
  height: 300px;
}
</style>