import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import StartSite from "@/components/StartSite.vue";
import ToastService from "primevue/toastservice";

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/my-ase',
            redirect: '/startsite'
        },
        {
            path: '/homepage/:userName',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/startsite',
            name: 'startsite',
            component: StartSite
        }
    ]
})

createApp(App).use(router).use(ToastService).use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).mount('#app')

export default router;
