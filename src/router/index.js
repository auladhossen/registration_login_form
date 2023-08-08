import { createRouter, createWebHistory } from 'vue-router'
const Login = () => import("../views/LoginView.vue");
const Registration = () => import("../views/RegistrationView.vue");
const Welcome = () => import("../views/WelcomeView.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Registration
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    }
  ]
})

export default router
