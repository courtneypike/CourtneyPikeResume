<template>
<container>
    <nav class = "navigation"> 
        <a href="index.html">Home</a>
        <a href="resume.html">resume</a>
        <a href="coverify.html">coverify</a>
        <a href="piano.html">piano</a>
     </nav> 
    <br><br>
</container>
      <p style ="padding-right: 100px;padding-left: 100px;">
         Hello! <br> My name is Courtney Pike. <br> I am a Master of Science graduate in Computer Information Systems, with a professional background in full-stack development, specializing in JavaScript, Node.js, and SQL. With over 5 years of work experience spanning Technologies Engineering, Web Architecture, Data Analysis, and IT Operations, I am committed to advancing the achievements of projects and teams through my expertise in full-stack development.<br>
 <br><br>
        </p>
<body>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
</body>
</template>

<script>
export default {
  name: "pictureSlider",
  data() {
    return {
      images: [
        "./images_videos/statue.jpeg",
        "./images_videos/italy.jpeg",
        "./images_videos/courtyard.jpeg",
        "./images_videos/palace.jpeg",
        "./images_videos/biographypic2.jpeg",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped> 
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:50%;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.8s ease;
  border-radius: 0 10px 10px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>