import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    name: 'main-layout',
    component: () => import(/* webpackChunkName: "auth-layout" */ '@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/ProfileView.vue'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth-layout',
    component: () => import(/* webpackChunkName: "auth-layout" */ '@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
