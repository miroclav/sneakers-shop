import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'
import UserPage from '@/pages/UserPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/favorites',
        component: FavoritesPage
    },
    {
        path: '/user',
        component: UserPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router