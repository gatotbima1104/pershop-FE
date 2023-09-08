import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DashboardProduct from '../views/DashboardProduct.vue'
import DashboardUser from '../views/DashboardUser.vue'
import Home from '../views/Home.vue'
import HomeDashboard from '../views/HomeDashboard.vue'
import Movie from '../views/Movie.vue'


// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/product', component: DashboardProduct },
    { path: '/user', component: DashboardUser },
    { path: '/dashboard', component: HomeDashboard },
    { path: '/movie', component: Movie },
    

  ],
});


export default router;
