import { createWebHistory, createRouter } from "vue-router";;
import Home from "../views/Home.vue";
import FSMp4 from "../views/FSMp4.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fsmp4",
    name: "FSMp4",
    component: FSMp4,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },

];

const router = createRouter({
    history: createWebHistory(),  
    routes,
});

export default router;