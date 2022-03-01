export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/sub-demo1/sub-demo2', component: '@/pages/index/index', title: '活动首页' },
      { path: '/sub-demo1/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/login', component: '@/pages/login/login', title: '登录' },
      { path: '*', exact: true, component: '@/pages/404' },
    ],
  },
];
