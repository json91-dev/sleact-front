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
var styles_1 = require("@layouts/Workspace/styles");
var fetcher_1 = __importDefault(require("../../utils/fetcher"));
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var react_router_1 = require("react-router");
var swr_1 = __importDefault(require("swr"));
var gravatar_1 = __importDefault(require("gravatar"));
var component_1 = __importDefault(require("@loadable/component"));
var Channel = (0, component_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@pages/Channel/index')); }); });
var DirectMessage = (0, component_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@pages/DirectMessage/index')); }); });
var Index = function (_a) {
    var children = _a.children;
    var _b = (0, swr_1.default)('/api/users', fetcher_1.default, {
        dedupingInterval: 2000 // 2초
    }), data = _b.data, error = _b.error, revalidate = _b.revalidate, mutate = _b.mutate;
    var onLogout = (0, react_1.useCallback)(function () {
        axios_1.default.post('http://localhost:3095/api/users/logout', null, {
            withCredentials: true,
        })
            .then(function () {
            mutate(false, false);
        });
    }, []);
    if (!data) {
        return react_1.default.createElement(react_router_1.Redirect, { to: "/login" });
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(styles_1.Header, null,
            react_1.default.createElement(styles_1.RightMenu, null,
                react_1.default.createElement("span", null,
                    react_1.default.createElement(styles_1.ProfileImg, { src: gravatar_1.default.url(data.email, { s: '28px', d: 'retro' }), alt: data.nickname })))),
        react_1.default.createElement("button", { onClick: onLogout }, "\uB85C\uADF8\uC544\uC6C3"),
        react_1.default.createElement(styles_1.WorkspaceWrapper, null,
            react_1.default.createElement(styles_1.Workspaces, null, "test"),
            react_1.default.createElement(styles_1.Channels, null,
                react_1.default.createElement(styles_1.WorkspaceName, null, "Sleact"),
                react_1.default.createElement(styles_1.MenuScroll, null, "menu scroll")),
            react_1.default.createElement(styles_1.Chats, null,
                react_1.default.createElement(react_router_1.Switch, null,
                    react_1.default.createElement(react_router_1.Route, { path: "/workspace/channel", component: Channel }),
                    react_1.default.createElement(react_router_1.Route, { path: "/workspace/dm", component: DirectMessage }))))));
};
exports.default = Index;
//# sourceMappingURL=index.js.map