"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("@pages/DirectMessage/styles");
var gravatar_1 = __importDefault(require("gravatar"));
var fetcher_1 = __importDefault(require("@utils/fetcher"));
var react_router_1 = require("react-router");
var swr_1 = __importDefault(require("swr"));
var ChatBox_1 = __importDefault(require("@components/ChatBox"));
var useInput_1 = __importDefault(require("@hooks/useInput"));
var axios_1 = __importDefault(require("axios"));
var DirectMessage = function () {
    var _a = (0, react_router_1.useParams)(), workspace = _a.workspace, id = _a.id;
    var userData = (0, swr_1.default)("/api/workspaces/" + workspace + "/users/" + id, fetcher_1.default).data;
    var myData = (0, swr_1.default)('/api/users', fetcher_1.default).data;
    var _b = (0, useInput_1.default)(''), chat = _b[0], onChangeChat = _b[1], setChat = _b[2];
    // 채팅을 받아오는 API
    var _c = (0, swr_1.default)("/api/workspaces/" + workspace + "/dms/" + id + "/chats?perPage=20&page=1", fetcher_1.default), chatData = _c.data, mutateChat = _c.mutate, revalidate = _c.revalidate;
    // 채팅을 등
    var onSubmitForm = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (chat === null || chat === void 0 ? void 0 : chat.trim()) {
            axios_1.default
                .post("/api/workspaces/" + workspace + "/dms/" + id + "/chats", {
                content: chat,
            })
                .then(function () {
                revalidate(); // 채팅 등록후 채팅을 받아옴
                setChat('');
            })
                .catch(console.error);
        }
    }, []);
    if (!userData || !myData) {
        return null;
    }
    return react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Header, null,
            react_1.default.createElement("img", { src: gravatar_1.default.url(userData.email, { s: '24px', d: 'retro' }), alt: userData.nickname }),
            react_1.default.createElement("span", null, userData.nickname)),
        react_1.default.createElement(ChatBox_1.default, { chat: chat, onChangeChat: onChangeChat, onSubmitForm: onSubmitForm }));
};
exports.default = DirectMessage;
//# sourceMappingURL=index.js.map