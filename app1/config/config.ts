import { defineConfig } from 'umi';
import { IConfig } from '@umijs/types';
import pageRoutes from './router.config';
import devConfig from './dev.config';
import mfsu from './mfsu.config';
import defaultSettings from './defaultSettings';
// @ts-ignore
import px2rem from 'postcss-plugin-px2rem';
import { IConfigFromPlugins } from '@@/core/pluginConfig';

const routerBase = `/`;
//const routerBase = `/sub-demo1/`;

const publicPath = routerBase;//process.env.NODE_ENV === 'production' ? setting.getPublicPath() : routerBase;

// ref: https://umijs.org/config/
const config: IConfigFromPlugins | IConfig = {
  qiankun:{
    master:{}
  },
  /*qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        /!*{
          name: 'sub-demo2', // 唯一 id
          entry: '//localhost:7001/sub-demo2/', // html entry
        },*!/
        {
          name: 'sub-zxkp-h5', // 唯一 id
          entry: 'http://localhost:8001/sub-zxkp-h5/', // html entry
        },
      ],
      /!*routes: [
        {
          path: '/sub-demo2',
          microApp:'sub-demo2',
        },
      ],*!/
      sandbox:{
        strictStyleIsolation: true,
        //experimentalStyleIsolation:true,
      },
      getTemplate: (tpl: string) => {
        console.log('ddddddddd');
        return tpl.replace('<script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>', '');
      },
      /!*fetch: async (url:any, ...args:any)=> {
        console.log(url);
        if ((url as string).indexOf('//res.wx.qq.com/open/js/jweixin-1.6.0.js')>-1) {
          return {
            async text() {
              return '';
            },
          };
        }

        return window.fetch(url, ...args);
      },*!/
    },
  },*/
  ...devConfig.config,
  ...defaultSettings,
  ...mfsu.config,
  dva: {
    immer: true,
    hmr: true,
  },
  define: {
    'process.env.IMAGE_TAG': process.env.IMAGE_TAG,
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-source-map',
  base: routerBase,
  publicPath: publicPath,
  outputPath: './dist',
  routes: pageRoutes,
  /*dynamicImport: {
    loading: '@/components/page-loading/index',
  },*/
  webpack5: {},
  /** 将 ClassName 类名变成驼峰命名形式 */
  cssLoader: { localsConvention: 'camelCase' },
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 75,
      unitPrecision: 8,
      minPixelValue: 0,
      selectorBlackList: ['html'],
      exclude: /(node_module)/,
    }),
  ],
  history: { type: 'browser' }, // 默认是 browser
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  hash: true,
  manifest: {
    basePath: '/',
  },
  antd: false,
};

export default defineConfig(config);
