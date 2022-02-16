import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { store } from './store'

const app = createApp(App);

//Vue.config.productionTip = false;

// Install the store instance as a plugin
app.use(store)

// Use ElementPlus in application
app.use(ElementPlus)

// Use router in application
app.use(router)

app.mount('#app');
