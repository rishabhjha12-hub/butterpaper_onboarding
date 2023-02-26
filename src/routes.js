import { createWebHistory,createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue"
import firstpage from "./components/firstPage.vue"


const routes=[
    {
        name:'HelloWorld',
        path:'/hellow',
        component:HelloWorld
    },
    {
        name:'firstpage',
        path:'/firstpage',
        component:firstpage
    }
];
const router= createRouter({
    history:createWebHistory(),
    routes
})
export default router