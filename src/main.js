import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')


import "bootstrap/dist/js/bootstrap.js"
