import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
