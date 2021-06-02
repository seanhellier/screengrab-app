import { createRouter, createWebHistory } from "vue-router";
import Screenshot from "../views/Screenshot.vue";

const routes = [
  {
    path: "/",
    name: "Screenshot",
    component: Screenshot,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
