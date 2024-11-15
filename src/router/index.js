import DesignPage from "@/components/DesignPage.vue";
import ProductPage from "@/components/ProductPage.vue";
import UserPage from "@/components/UserPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {path: '/', component: UserPage, name: 'UserPage' },
    {path: '/product', component:ProductPage, name: 'ProductPage'},
    {path: '/about', component:DesignPage, name: 'DesignPage'},

];

const router = createRouter({

    history : createWebHashHistory(),
    routes
})

export default router;

