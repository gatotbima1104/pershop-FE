import { createRouter, createWebHistory } from "vue-router";
import { authStore } from './../store/auth';
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
// import DashboardProduct from "../views/DashboardProduct.vue";
import Home from "../views/Home.vue";
import DashboardUser from "../views/DashboardUser.vue";
import DashboardAdmin from "../views/DashboardAdmin.vue";
import ProductsPage from "../views/ProductsPage.vue"
import UserManagementPage from "../views/UserManagementPage.vue"
import Menu from "../views/Menu.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/admin", component: DashboardAdmin, meta: { requiresAuth: true } },
    { path: "/product", component: ProductsPage, meta: { requiresAuth: true } },
    { path: "/user", component: DashboardUser, meta: { requiresAuth: true }},
    { path: "/user-management", component: UserManagementPage, meta: { requiresAuth: true }},
    { path: "/user-management", component: UserManagementPage, meta: { requiresAuth: true }},
    { path: "/menu", component: Menu, meta: { requiresAuth: true }},

  ],
});

router.beforeEach((to, from, next) => {
  const store = authStore(); // Create an instance of authStore
  if (to.meta.requiresAuth && !store.userInfo.token) {
    // If the route requires authentication and the user is not authenticated
    // Redirect the user to the login page
    
    // console.log(store.userInfo.token)
    alert('Please Login first');
    next('/login');
  } else {
    next();
  }
});

export default router;
