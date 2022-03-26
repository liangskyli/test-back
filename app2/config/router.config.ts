export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/sub-demo1/sub-demo2/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/sub-demo1/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/sub-demo2/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/login', component: '@/pages/login/login', title: '登录' },
      /*{ path: '/sub-demo1/login', component: '@/pages/login/login', title: '登录' },*/
      /*{ path: '/sub-demo2/login', component: '@/pages/login/login', title: '登录' },*/
      // qiankun子应用 vr-3d
      { path: '/vr-trade-zxkp/vr-3d', component: '@/pages/index/index', title: '' },
      { path: '*', exact: true, component: '@/pages/404' },
    ],
  },
];
