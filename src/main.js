import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import storage from './storage'

var token = localStorage.getItem('token');
if(token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

const app = createApp(App)

app.use(router)

app.use(storage)
app.use(VueAxios, axios)
app.mount('#app')
