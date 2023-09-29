<template>
     <nav class = "navigation"> 
        <a href="index.html">Home</a>
        <a href="biography.html">biography</a>
        <a href="resume.html">resume</a>
        <a href="coverify.html">coverify</a>
        <a href="piano.html">piano</a>
     </nav> 
     <body>
    <h1>Piano</h1>
    <div class="videos">
      <div class="videos__item">
        <vue-youtube :src="videoIds[0]" :width="640" :height="360"></vue-youtube>
      </div>
      <div class="videos__item">
        <vue-youtube :src="videoIds[1]" :width="640" :height="360"></vue-youtube>
      </div>
      <div class="videos__item">
        <vue-youtube :src="videoIds[2]" :width="640" :height="360"></vue-youtube>
      </div>
  </div>
    </body>
</template>

<script>
function getVideoIdFromUrl(url) {
  // Regular expression to match YouTube video URLs
const youtubeUrlPattern = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11}))/;

  // Attempt to match and extract the video ID
  const match = url.match(youtubeUrlPattern);

  if (match) {
    return match[1]; // Return the extracted video ID
  } else {
    return null; // Return null if no match is found
  }
}
import VueYoutube from 'vue3-youtube';
import VueLazyload from 'vue-lazyload';

export default {
  name: 'App',
  components: {
    VueYoutube
  },  
  directives: {
    lazy: VueLazyload.directive, // Add the lazy directive
  },
  data() {
  return {
    videoIds: [
      getVideoIdFromUrl('https://www.youtube.com/watch?v=n3TEUUR5v4o'),
      getVideoIdFromUrl('https://www.youtube.com/watch?v=83HaJtn55b8'),
      getVideoIdFromUrl('https://www.youtube.com/watch?v=X7M4D5-EOK0'),
    ],
  };
  },
}
</script>
<style>
/* Add styles for the videos container */
.videos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Add styles for individual video items */
.videos__item {
  flex-basis: calc(33.33% - 20px); /* Adjust the width of each video item */
  margin-bottom: 20px; /* Add margin to create spacing between videos */
  max-width: 100%; /* Ensure videos don't exceed their container's width */
  box-sizing: border-box; /* Include padding and border in the width calculation */
}

/* Style the embedded videos */
.vue-youtube {
  width: 100%; /* Ensure videos take up 100% of the container width */
  height: 0; /* Maintain the aspect ratio for responsive sizing */
  padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 * 100) */
  position: relative; /* Create a relative positioning context */
}

.vue-youtube iframe {
  position: absolute; /* Position the iframe within its container */
  width: 100%; /* Ensure the iframe takes up 100% of the container width */
  height: 100%; /* Ensure the iframe takes up 100% of the container height */
  top: 0;
  left: 0;
}
</style>