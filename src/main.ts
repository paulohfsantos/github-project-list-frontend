// Components
import App from './App.vue'
// Axios
import axios from 'axios'

// Composables
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'

axios.defaults.baseURL = import.meta.env.API_LOCAL as string;

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
