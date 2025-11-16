import path from 'node:path';
import { fileURLToPath } from "node:url";

const curDirName = path.dirname(fileURLToPath(import.meta.url));


export default {
  mockDir: path.join(curDirName, '../genHttpMock/'),
  port: 8002,
  socketConfig: {
    enable: false,
    opts: {
      path: '/socket.io/',
      cors: {
        origin: ['http://localhost:63342'],
      },
    },
    mockControllerUrl: 'mock/socket/sock.ts',
    //mockControllerUrl: 'mock/socket/sock2.js',
  },
};
