/*export const qiankun = Promise.resolve({
  apps: [
    {
      name: 'sub-zxkp-h5', // 唯一 id
      entry: 'http://localhost:5001/sub-zxkp-h5/', // html entry
    },
  ],
}).then(({ apps }) => {
  return Promise.resolve({
    // 注册子应用信息
    apps,
    // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    routes: [{ path: '/', microApp: 'sub-zxkp-h5' }],
    sandbox: {
      strictStyleIsolation: true,
    },
    fetch: async (url: any, ...args: any) => {
      if ((url as string).indexOf('//res.wx.qq.com/open/js/jweixin-1.6.0.js') > -1) {
        return {
          // @ts-ignore
          async text() {
            return '';
          },
        };
      }

      return window.fetch(url, ...args);
    },
  });
});*/

/*import { start, registerMicroApps } from '@ice/stark';

registerMicroApps([{
  name: 'sub-zxkp-h5',
  activePath:'/',
  //url:[],
  entry: 'http://localhost:5001/sub-zxkp-h5/', // html entry
  sandbox: false,
  props: {
    getState: () => {
      return {
        safeArea: {
          // 渲染安全区域
          top: 70,
          bottom: 50,
          left: 0,
          right: 0,
        },
        level: 'building',
        buildingId: 'buildingId211',
      };
    },
    observer: {
      addEventListener: (handle: string, e: any) => {
        console.log('addEventListener:', handle, e);
      },
      dispatchEvent: (handle: string, payload?: any) => {
        console.log('dispatchEvent:', handle, payload);
      },
    },
  },
  loadScriptMode:'fetch',
}]);

start({
  // @ts-ignore
  fetch: async (url: any, ...args: any) => {
     if ((url as string).indexOf('//res.wx.qq.com/open/js/jweixin-1.6.0.js') > -1) {
       return {
         // @ts-ignore
         async text() {
           return '';
         },
       };
     }

     return window.fetch(url, ...args);
   },
});*/

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      console.error(err);
    },
  },
};
