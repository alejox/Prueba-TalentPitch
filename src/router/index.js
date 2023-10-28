import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',

      component: () => import('@/layouts/App.vue'),
      children: [
        { path: '', name: 'profile', component: () => import('@/views/profile/IndexView.vue') }
      ]
    }
  ]
});

export default router;
