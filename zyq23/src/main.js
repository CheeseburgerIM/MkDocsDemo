import { createApp } from 'vue'
import App from './App.vue'

import "animate.css";

var app = createApp(App)

import store from './store';
app.use(store)

app.mount('#app')
