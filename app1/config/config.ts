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
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        /*{
          name: 'sub-demo2', // 唯一 id
          entry: '//localhost:7001/sub-demo2/', // html entry
        },*/
        {
          name: 'sub-zxkp-h5', // 唯一 id
          entry: 'http://localhost:8001/sub-zxkp-h5/', // html entry
        },
      ],
      /*routes: [
        {
          path: '/sub-demo2',
          microApp:'sub-demo2',
        },
      ],*/
      sandbox:{
        strictStyleIsolation: true,
        //experimentalStyleIsolation:true,
      }
    },
  },
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
