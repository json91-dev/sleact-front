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
var useInput_1 = __importDefault(require("@hooks/useInput"));
var styles_1 = require("@pages/SignUp/styles");
var fetcher_1 = __importDefault(require("@utils/fetcher"));
var axios_1 = __importDefault(require("axios"));
var react_1 = __importStar(require("react"));
var react_router_1 = require("react-router");
var react_toastify_1 = require("react-toastify");
var swr_1 = __importDefault(require("swr"));
var InviteChannelModal = function (_a) {
    var show = _a.show, onCloseModal = _a.onCloseModal, setShowInviteChannelModal = _a.setShowInviteChannelModal;
    var _b = (0, react_router_1.useParams)(), workspace = _b.workspace, channel = _b.channel;
    var _c = (0, useInput_1.default)(''), newMember = _c[0], onChangeNewMember = _c[1], setNewMember = _c[2];
    var userData = (0, swr_1.default)('/api/users', fetcher_1.default).data;
    var revalidateMembers = (0, swr_1.default)(userData ? "/api/workspaces/" + workspace + "/channels/" + channel + "/members" : null, fetcher_1.default).revalidate;
    var onInviteMember = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (!newMember || !newMember.trim()) {
            return;
        }
        axios_1.default
            .post("/api/workspaces/" + workspace + "/channels/" + channel + "/members", {
            email: newMember,
        })
            .then(function () {
            revalidateMembers();
            setShowInviteChannelModal(false);
            setNewMember('');
        })
            .catch(function (error) {
            var _a;
            console.dir(error);
            react_toastify_1.toast.error((_a = error.response) === null || _a === void 0 ? void 0 : _a.data, { position: 'bottom-center' });
        });
    }, [newMember]);
    return (react_1.default.createElement(Modal_1.default, { show: show, onCloseModal: onCloseModal },
        react_1.default.createElement("form", { onSubmit: onInviteMember },
            react_1.default.createElement(styles_1.Label, { id: "member-label" },
                react_1.default.createElement("span", null, "\uCC44\uB110 \uBA64\uBC84 \uCD08\uB300"),
                react_1.default.createElement(styles_1.Input, { id: "member", value: newMember, onChange: onChangeNewMember })),
            react_1.default.createElement(styles_1.Button, { type: "submit" }, "\uCD08\uB300\uD558\uAE30"))));
};
exports.default = InviteChannelModal;
//# sourceMappingURL=index.js.map