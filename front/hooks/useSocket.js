"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var react_1 = require("react");
var backUrl = 'http://localhost:3095';
var sockets = {};
var useSocket = function (workspace) {
    var disconnect = (0, react_1.useCallback)(function () {
        if (workspace) {
            sockets[workspace].disconnect();
            delete sockets[workspace]; // 연결 끊은 후 해당 key값의 value 삭제
        }
    }, []);
    if (!workspace) {
        return [undefined, disconnect];
    }
    sockets[workspace] = socket_io_client_1.default.connect(backUrl + "/ws-" + workspace);
    return [sockets[workspace], disconnect];
};
exports.default = useSocket;
//# sourceMappingURL=useSocket.js.map