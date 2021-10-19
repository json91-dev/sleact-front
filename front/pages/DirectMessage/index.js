"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@pages/DirectMessage/styles");
var gravatar_1 = __importDefault(require("gravatar"));
var fetcher_1 = __importDefault(require("../../../sleact/front/utils/fetcher"));
var react_router_1 = require("react-router");
var swr_1 = __importDefault(require("swr"));
var DirectMessage = function () {
    var _a = (0, react_router_1.useParams)(), workspace = _a.workspace, id = _a.id;
    var userData = (0, swr_1.default)("/api/workspaces/" + workspace + "/users/" + id, fetcher_1.default).data;
    var myData = (0, swr_1.default)('/api/users', fetcher_1.default).data;
    if (!userData || !myData) {
        return null;
    }
    return react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Header, null,
            react_1.default.createElement("img", { src: gravatar_1.default.url(userData.email, { s: '24px', d: 'retro' }), alt: userData.nickname }),
            react_1.default.createElement("span", null, userData.nickname)));
};
exports.default = DirectMessage;
//# sourceMappingURL=index.js.map