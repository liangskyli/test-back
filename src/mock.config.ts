import path from 'path';

export default {
  mockDir: path.join(__dirname, '../genHttpMock/'),
  port: 8002,
  socketConfig: {
    enable: true,
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
