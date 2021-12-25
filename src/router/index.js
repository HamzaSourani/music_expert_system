import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Character from "../components/Character.vue";
import Start from "../components/Start.vue";
import Quition from '../components/Quition.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
   
    component: Home,
    children:[
      {
      path:"c",
      name:"Character",
      component:Character
      },
      {
        path:"",
        name:"Start",
      component:Start 
      },
      {
        path:"q",
        name:"Quition",
        component:Quition
      },
      
    ]
  },
  
  {
    path: "/video",
    name: "About",
    
    

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Video.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
