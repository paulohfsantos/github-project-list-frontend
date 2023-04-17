import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import 'vuetify/lib/util/colors'

export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('dark') === 'true' ? 'dark' : 'light',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },

      dark: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      }
    },
  },
})
