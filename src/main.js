import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'  // zorg dat het pad klopt, meestal './router/index.js'
import 'windi.css'

const app = createApp(App)

app.use(router)   // router aan de app koppelen
app.mount('#app')
