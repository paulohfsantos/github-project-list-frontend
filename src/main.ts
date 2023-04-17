// Components
import App from './App.vue'
// Axios
import axios from 'axios'

// Composables
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
registerPlugins(app)

console.log(import.meta.env);

app.mount('#app')
