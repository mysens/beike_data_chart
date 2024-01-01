import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            redirect: "/second-house-deal"
        },
        {
            name: "deal",
            path: "/second-house-deal",
            component: () => import('@/pages/Deal.vue'),
            meta: {}
        },
        {
            name: "hot",
            path: "/second-house-hot",
            component: () => import('@/pages/Hot.vue')
        }
    ]
})

export default router