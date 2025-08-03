import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify setup
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify()

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
