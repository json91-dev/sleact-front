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
var Modal_1 = __importDefault(require("@components/Modal"));
var react_1 = __importStar(require("react"));
var styles_1 = require("@pages/SignUp/styles");
var axios_1 = __importDefault(require("axios"));
var react_router_1 = require("react-router");
var react_toastify_1 = require("react-toastify");
var swr_1 = __importDefault(require("swr"));
var fetcher_1 = __importDefault(require("@utils/fetcher"));
var useInput_1 = __importDefault(require("@hooks/useInput"));
var CreateChannelModal = function (_a) {
    var show = _a.show, onCloseModal = _a.onCloseModal, setShowCreateChannelModal = _a.setShowCreateChannelModal;
    var _b = (0, useInput_1.default)(''), newChannel = _b[0], onChangeNewChannel = _b[1], setNewChannel = _b[2];
    var workspace = (0, react_router_1.useParams)().workspace;
    var _c = (0, swr_1.default)('/api/users', fetcher_1.default, {
        dedupingInterval: 2000 // 2초
    }), userData = _c.data, error = _c.error, revalidate = _c.revalidate, mutate = _c.mutate;
    var _d = (0, swr_1.default)(userData ? "/api/workspaces/" + workspace + "/channels" : null, fetcher_1.default), channelData = _d.data, revalidateChannel = _d.revalidate;
    var onCreateChannel = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (!newChannel || !newChannel.trim()) {
            return;
        }
        axios_1.default.post("/api/workspaces/" + workspace + "/channels", {
            name: newChannel,
        }, {
            withCredentials: true,
        }).then(function () {
            revalidateChannel(); // 생성하자마자 채널 리스트 다시 불러오기
            setShowCreateChannelModal(false);
            setNewChannel('');
        }).catch(function (error) {
            var _a;
            console.dir(error);
            react_toastify_1.toast.error((_a = error.response) === null || _a === void 0 ? void 0 : _a.data, { position: 'bottom-center' });
        });
    }, [newChannel]);
    return (react_1.default.createElement(Modal_1.default, { show: show, onCloseModal: onCloseModal },
        react_1.default.createElement("form", { onSubmit: onCreateChannel },
            react_1.default.createElement(styles_1.Label, { id: "channel-label" },
                react_1.default.createElement("span", null, "\uCC44\uB110 \uC774\uB984"),
                react_1.default.createElement(styles_1.Input, { id: "channel", value: newChannel, onChange: onChangeNewChannel })),
            react_1.default.createElement(styles_1.Button, null, "\uC0DD\uC131\uD558\uAE30"))));
};
exports.default = CreateChannelModal;
//# sourceMappingURL=index.js.map