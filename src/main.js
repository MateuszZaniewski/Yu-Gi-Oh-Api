import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '../src/router/router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0p4c5jGZDjs0RSAdtTtrb9LYolgd4iL8",
  authDomain: "yu-gi-oh-f2e29.firebaseapp.com",
  projectId: "yu-gi-oh-f2e29",
  storageBucket: "yu-gi-oh-f2e29.appspot.com",
  messagingSenderId: "342293313702",
  appId: "1:342293313702:web:e2105215137c53b7535c67",
  measurementId: "G-TRC4QKQHR6"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App, {
    
  });
app.use(store)
app.use(router)
app.mount('#app');

const analytics = getAnalytics(app);
