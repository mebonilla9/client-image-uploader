import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:8080/api/v1'

createApp(App).mount('#app')
