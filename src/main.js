import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '../src/router/router';
import { initializeApp  } from "firebase/app";
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB0p4c5jGZDjs0RSAdtTtrb9LYolgd4iL8",
  authDomain: "yu-gi-oh-f2e29.firebaseapp.com",
  projectId: "yu-gi-oh-f2e29",
  storageBucket: "yu-gi-oh-f2e29.appspot.com",
  messagingSenderId: "342293313702",
  appId: "1:342293313702:web:e2105215137c53b7535c67",
  measurementId: "G-TRC4QKQHR6"
};

const firebaseApp = initializeApp(firebaseConfig);


const app = createApp(App, {
    
  });
app.use(store)
app.use(router)
app.mount('#app');


export const authentication = getAuth(app)
