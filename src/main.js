import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import Cookies from 'js-cookie';

// Set a cookie with the SameSite attribute
Cookies.set('my_cookie', 'my_value', { sameSite: 'strict' });
document.cookie = 'name=PayUDemo; SameSite=None; Secure';

const app = createApp(App, {
    devtools: true
  });
app.use(store)
app.mount('#app');
