import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue'),
    },
    {
      // group页面
      path: '/group',
      name: 'Group',
      component: () => import('../pages/Group.vue'),
    },
    {
      // group页面
      path: '/test',
      name: 'Test',
      component: () => import('../pages/Test.vue'),
    },
  ],
});
