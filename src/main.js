import { createApp } from 'vue'
import App from './App.vue'
import Router from './assets/index.js'
/* element-puls */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/* cookie */
import VueCookies from 'vue-cookies'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(Router).use(ElementPlus).use(VueCookies).mount('#app')
