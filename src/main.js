import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from "primevue/toastservice";
import './registerServiceWorker'



createApp(App).use(ToastService).use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).mount('#app')

