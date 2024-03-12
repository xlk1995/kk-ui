import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.scss'

import button from './button'

createApp(App).use(button).mount('#app')
