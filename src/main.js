import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入 Bootstrap 和 Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')