export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {path: 'vr-trade-zxkp/vr-3d',component: '@/pages/empty'},
      { path: '/index', component: '@/pages/index/index', title: '活动首页' },
      { path: '/login', component: '@/pages/login/login', title: '登录' },
      /*{ path: '/sub-demo2', microApp: 'sub-demo2'},
      { path: '/sub-zxkp-h5', microApp: 'sub-zxkp-h5'},*/
      /*{ path: '/sub-demo1/index', microApp: 'sub-zxkp-h5'},*/
      /*{ path: '/vr-trade-zxkp', microApp: 'sub-zxkp-h5'},*/
      { path: '*', exact: true, component: '@/pages/404' },
    ],
  },
];
