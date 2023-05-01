<template>
     <nav class = "navigation"> 
        <a href="index.html">Home</a>
        <a href="biography.html">biography</a>
        <a href="resume.html">resume</a>
        <a href="coverify.html">coverify</a>
        <a href="piano.html">piano</a>
     </nav> 
     <body>
   <h1><a href="https://coverify-stream.com">Coverify</a></h1>

   <div class ="float-container">
      <div class = "float-child coverify" style ="float:left; width: 40%">
         <h2>Hover to See Examples of Coverify</h2>
         <section class="movingPictures">
          <img :src="selectedImg.src" @mouseleave="pictureHoverFunction()" @mouseover="pictureHoverFunction()" >
         </section>
      </div>
   <div class = "float-child coverify" style ="float:left; width: 60%">
   <ul>
      <li class = "coverify-bullet">Sole developer for Spotify-approved application that pulls relevant user streaming and profile data to make a user’s Spotify history into a magazine cover.</li>
      <li class = "coverify-bullet">1000+ visitors since launch of site in late April 2023.</li>
      <li class = "coverify-bullet">Application uses express.js, serverless HTTP, and Netlify lambda through a middleware router to handle OAuth 2.0 framework with Spotify.</li>
      <li class = "coverify-bullet">Front-end development and design are written in JavaScript, CSS, and HTML.</li>
      <li class = "coverify-bullet">Monetized through Ezoic and Google Ads. Was responsible for integrating Ezoic’s CDN into my site.</li>
      <li class = "coverify-bullet">Application repository link is <a href="https://github.com/courtneypike/Coverify">https://github.com/courtneypike/Coverify</a></li>
   </ul>
   </div>
   </div>
  </body>
</template>

<script>
export default {
  name: 'myCoverify',
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

