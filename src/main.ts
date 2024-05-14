import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    { 
        path: '/',
        redirect: '/color'  
    },
    {
        path: '/color',
        component: () => import('@/views/color/index.vue')
    },
    {
        path: '/number',
        component: () => import('@/views/number/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

createApp(App).use(router).use(Antd).mount('#app')
