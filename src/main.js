import './assets/main.css'

import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import router from './router'
import App from './App.vue'
import { firebaseApp } from './firebaseApp'



createApp(App)
    .use(VueFire, { firebaseApp })
    .use(router)
    .mount('#app')
