import './assets/main.css'

import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import router from './router'
import App from './App.vue'
import { firebaseApp } from './firebaseApp'
import PrimeVue from 'primevue/config'

createApp(App)
    .use(VueFire, { firebaseApp })
    .use(router)
    // .use(PrimeVue, {
    //     theme: 'none'
    // })
    .mount('#app')
