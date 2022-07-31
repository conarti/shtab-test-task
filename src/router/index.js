import { createRouter, createWebHistory } from 'vue-router';
import checkAuth from '@/router/middlewares/checkAuth';

const routes = [
  {
    path: '',
    name: 'main-layout',
    component: () => import(/* webpackChunkName: "auth-layout" */ '@/layouts/MainLayout.vue'),
    meta: {
      auth: true,
    },
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/ProfileView.vue'),
        meta: {
          title: 'profile',
        },
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth-layout',
    component: () => import(/* webpackChunkName: "auth-layout" */ '@/layouts/AuthLayout.vue'),
    meta: {
      auth: false,
    },
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

router.beforeEach(checkAuth);

export default router;
