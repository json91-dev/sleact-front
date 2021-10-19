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
var fetcher_1 = __importDefault(require("@utils/fetcher"));
var react_1 = __importStar(require("react"));
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
var swr_1 = __importDefault(require("swr"));
var EachChannel = function (_a) {
    var channel = _a.channel;
    var workspace = (0, react_router_1.useParams)().workspace;
    var location = (0, react_router_dom_1.useLocation)();
    var userData = (0, swr_1.default)('/api/users', fetcher_1.default, {
        dedupingInterval: 2000, // 2초
    }).data;
    var date = localStorage.getItem(workspace + "-" + channel.name) || 0;
    var _b = (0, swr_1.default)(userData ? "/api/workspaces/" + workspace + "/channels/" + channel.name + "/unreads?after=" + date : null, fetcher_1.default), count = _b.data, mutate = _b.mutate;
    (0, react_1.useEffect)(function () {
        if (location.pathname === "/workspace/" + workspace + "/channel/" + channel.name) {
            mutate(0);
        }
    }, [mutate, location.pathname, workspace, channel]);
    return (react_1.default.createElement(react_router_dom_1.NavLink, { key: channel.name, activeClassName: "selected", to: "/workspace/" + workspace + "/channel/" + channel.name },
        react_1.default.createElement("span", { className: count !== undefined && count > 0 ? 'bold' : undefined },
            "# ",
            channel.name),
        count !== undefined && count > 0 && react_1.default.createElement("span", { className: "count" }, count)));
};
exports.default = EachChannel;
//# sourceMappingURL=index.js.map