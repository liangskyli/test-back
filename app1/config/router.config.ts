export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/login', component: '@/pages/login/login', title: '登录' },
      { path: '/sub-demo2', microApp: 'sub-demo2'},
      { path: '*', exact: true, component: '@/pages/404' },
    ],
  },
];
