import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'  // zorg dat het pad klopt, meestal './router/index.js'
import 'windi.css'

const app = createApp(App)

app.use(router)   // router aan de app koppelen
app.mount('#app')
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/'
      });
      console.log('SW registered:', registration);
    } catch (error) {
      console.error('SW registration failed:', error);
    }
  });
}