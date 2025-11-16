import mockServer from '@liangskyli/mock';
import path from "path";
import { fileURLToPath } from "node:url";

const curDirName = path.dirname(fileURLToPath(import.meta.url));

//mockServer();
mockServer({
    mockDir: path.join(curDirName, '../'),
    port: 8002,
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
