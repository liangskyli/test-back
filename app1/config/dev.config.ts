import { IConfig } from '@umijs/types';
import tools from './tools';

let config: IConfig = {};

if (process.env.NODE_ENV === 'development') {
  const { getLocalConfig, packageConfig } = tools;
  const mock = getLocalConfig('mock');
  // ref: https://umijs.org/config/
  config = {
    mock: mock === true ? {} : mock,
    fastRefresh: {},
    devServer: {
      port: (packageConfig as any).devPort,
      host: (packageConfig as any).devHost,
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    },
    proxy: {
      '/index.php': {
        target: getLocalConfig('serverProxy') || 'https://test-ztcwx.myscrm.cn',
        changeOrigin: true,
        secure: false,
      },
      '/sub-zxkp-h5/mf-': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
      },
      //http://localhost:6001/sub-zxkp-h5/mf-dep_vendors-node_modules_core-js_index_js.f8014813.async.js
      /*'/sub-demo1': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        secure: false,
      },*/
    },
  };
}

export default { config };
