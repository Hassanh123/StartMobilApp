import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'  // controleer dat dit pad klopt
import 'windi.css'

// Importeer createHead uit @vueuse/head
import { createHead } from '@vueuse/head'

const app = createApp(App)

// Maak head manager aan
const head = createHead()

// Gebruik router en head in je app
app.use(router)
app.use(head)

app.mount('#app')

// Service Worker registratie
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
