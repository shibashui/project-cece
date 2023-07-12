import './assets/main.css'
import { setStorage, getStorage } from '@/utils/setStore'
import { createApp } from 'vue'
import App from './App.vue'
import { Dialog } from 'vant'
const app = createApp(App)
app.config.globalProperties.$setStorage = setStorage
app.mount('#app')
app.use(Dialog)
