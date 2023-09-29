<template>
     <nav class = "navigation"> 
        <a href="index.html">Home</a>
        <a href="resume.html">resume</a>
        <a href="coverify.html">coverify</a>
        <a href="piano.html">piano</a>
     </nav> 
     <body>
    <h1>Piano</h1>
     <div class="videos">
        <div class="videos__item">
          <vue-youtube :src="videoIds[0]" :width="640" :height="360" :key="videoIds[0]"></vue-youtube>
        </div>
        <div class="videos__item">
          <vue-youtube :src="videoIds[1]" :width="640" :height="360" :key="videoIds[1]"></vue-youtube>
        </div>
        <div class="videos__item">
          <vue-youtube :src="videoIds[2]" :width="640" :height="360" :key="videoIds[2]"></vue-youtube>
        </div>
      </div>
    </body>
</template>

<script>
/* global YT */

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
      isPlayerReady: false,
      playerStates: [null, null, null],
    };
  },
  methods: {
    onPlayerReady(playerIndex) {
      this.isPlayerReady = true;
      this.loadVideos(playerIndex);
    },
    loadVideos(playerIndex) {
      if (this.isPlayerReady && this.playerStates[playerIndex] === null) {
        const videoId = this.videoIds[playerIndex];
        this.playerStates[playerIndex] = new YT.Player(
          `youtube-player-${playerIndex}`,
          {
            videoId,
            width: 640,
            height: 360,
            events: {
              onReady: () => {
                // Video is ready, you can perform any additional actions here
              },
            },
          }
        );
      }
    },
  },
};
</script>



<style>
/* Add styles for the videos container */
.videos {
  display: flex;
  flex-wrap: wrap;
}
</style>