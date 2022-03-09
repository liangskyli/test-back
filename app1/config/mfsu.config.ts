import { IConfig } from '@umijs/types';
import SentryPlugin from '@sentry/webpack-plugin';

let config: IConfig = {
  mfsu: {}, // dev开发优化二次构建时间
  chainWebpack: function (config, { env }) {
    // 处理包js-base64在webpack5编译问题
    config.module
      .rule('mjs')
      .before('js')
      .test(/\.m?js$/)
      .resolve.set('fullySpecified', false);

    if (env === 'production') {
      // 生产构建，mfsu关闭，使用chunks
      config.merge({
        optimization: {
          minimize: env === 'production',
          splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 3,
            automaticNameDelimiter: '.',
            cacheGroups: {
              vendor: {
                name: 'vendors',
                test({ resource }: any) {
                  return /[\\/]node_modules[\\/]/.test(resource);
                },
                priority: 10,
              },
            },
          },
        },
      });
      //当为prod时候，才进行sourcemap的上传，如果不判断，在项目运行的打包也会上传
      const release = `zxkp-h5-${process.env.IMAGE_TAG}`;
      config.plugin('sentry').use(SentryPlugin, [
        {
          url: 'https://sentry-prod.myscrm.cn/',
          authToken: 'b74cae7afeda417587ea7505ce8a1076579749e220f94790ab25afd755077472',
          org: 'sentry',
          project: 'zxkp-h5',

          ignore: ['node_modules'],
          include: './dist', //上传dist文件的js
          release: release, //版本号，自己定义的变量，整个版本号在项目里面一定要对应
          urlPrefix: `~/dist/${release}/sentry`, //cdn js的代码路径前缀
        },
      ]);
    }
  },
};

if (process.env.NODE_ENV === 'production') {
  // 生产构建，mfsu关闭，使用chunks
  config.chunks = ['vendors', 'umi'];
}

export default { config };
