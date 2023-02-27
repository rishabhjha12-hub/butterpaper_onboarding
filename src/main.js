// import { createApp } from 'vue'
import App from './App.vue'
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import firstpage from './components/firstPage.vue'
// import HelloWorld from './components/HelloWorld.vue'
import lastpage from './components/lastPage.vue'
import OnboardingScreens from './pages/OnboardingScreens'

const routes = [
  // TODO
  {
    path: "/",
    name: "home",
    component: firstpage,
  
},
{
    path: "/onboard",
    name: "onboard",
    component: OnboardingScreens,
  

},
{
    path: "/lastpage",
    name: "lastpage",
    component: lastpage,
  

},

];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

Vue.createApp(App).use(router).mount('#app');





  