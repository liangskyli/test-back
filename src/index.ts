import mockServer from '@liangskyli/mock';
import path from "path";

//mockServer();
mockServer({
    mockDir: path.join(__dirname, '../'),
    exclude: ['mock/b.ts'],
    socketConfig: {
        enable: true,
        opts: {
            path: '/socket.io/',
            cors: {
                origin: ['http://localhost:63342'],
            },
        },
        mockControllerUrl: 'mock/socket/sock.ts',
    },
});