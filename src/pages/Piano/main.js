import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue'; // Import your main Vue component
import VueYoutube from 'vue3-youtube'; // Import vue3-youtube

const app = createApp(App); // Create a Vue 3 app instance

app.use(VueYoutube); // Use the Vue Youtube plugin

app.mount('#app'); // Mount the app to a DOM element with the id "app"