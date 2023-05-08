import { createWebHistory, createRouter } from "vue-router";

import Home from './pages/Home.vue';
import AddPostForm from './components/AddPostForm.vue';


const routes = [
    { name : "home", path: '/', component: Home },
    {  name : "add-post", path: '/add-post', component: AddPostForm }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router ;