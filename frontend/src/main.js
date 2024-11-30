// Import Vue
import { createApp } from 'vue';

// Import the root component
import App from './App.vue';

// Import the router for navigation
import router from './router';

// Import the Vuex store for state management
import store from './store';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

// Create and mount the Vue application
createApp(App)
  .use(router)  // Use the router
  .use(store)   // Use the store
  .mount('#app'); // Mount the app to the div with id "app"
