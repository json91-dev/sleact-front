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
// import EachDM from '@components/EachDM';
// import useSocket from '@hooks/useSocket';
var styles_1 = require("@components/DMList/styles");
var fetcher_1 = __importDefault(require("@utils/fetcher"));
var react_1 = __importStar(require("react"));
var react_router_1 = require("react-router");
var swr_1 = __importDefault(require("swr"));
var DMList = function () {
    var workspace = (0, react_router_1.useParams)().workspace;
    var userData = (0, swr_1.default)('/api/users', fetcher_1.default, {
        dedupingInterval: 2000, // 2초
    }).data;
    var memberData = (0, swr_1.default)(userData ? "/api/workspaces/" + workspace + "/members" : null, fetcher_1.default).data;
    // const [socket] = useSocket(workspace);
    var _a = (0, react_1.useState)(false), channelCollapse = _a[0], setChannelCollapse = _a[1];
    var _b = (0, react_1.useState)([]), onlineList = _b[0], setOnlineList = _b[1];
    var toggleChannelCollapse = (0, react_1.useCallback)(function () {
        setChannelCollapse(function (prev) { return !prev; });
    }, []);
    (0, react_1.useEffect)(function () {
        console.log('DMList: workspace 바꼈다', workspace);
        setOnlineList([]);
    }, [workspace]);
    // useEffect(() => {
    //   socket?.on('onlineList', (data: number[]) => {
    //     setOnlineList(data);
    //   });
    //   console.log('socket on dm', socket?.hasListeners('dm'), socket);
    //   return () => {
    //     console.log('socket off dm', socket?.hasListeners('dm'));
    //     socket?.off('onlineList');
    //   };
    // }, [socket]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null,
            react_1.default.createElement(styles_1.CollapseButton, { collapse: channelCollapse, onClick: toggleChannelCollapse },
                react_1.default.createElement("i", { className: "c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline", "data-qa": "channel-section-collapse", "aria-hidden": "true" })),
            react_1.default.createElement("span", null, "Direct Messages"))));
};
exports.default = DMList;
//# sourceMappingURL=index.js.map