import { createRouter, createWebHistory } from 'vue-router';
import ProfileView from '@/views/ProfileView.vue';

const routes = [
  {
    path: '/',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
