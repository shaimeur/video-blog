import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import AddPostForm from "./components/AddPostForm.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "add-post", path: "/add-post", component: AddPostForm },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "Register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
