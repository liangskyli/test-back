import type { ConfigFileOptionsCLI } from '@liangskyli/mock';

const config: ConfigFileOptionsCLI = {
  rootPath: {
    grpcProtoServes: [
      { serverName: 'serverName1', serverDir: './src/proto-servers/server1' },
      { serverName: 'serverName2', serverDir: './src/proto-servers/server2' },
    ],
  },
  loaderOptions: {
    defaults: false,
    longs: String,
  },
};
export default config;
