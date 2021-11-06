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
var Menu_1 = __importDefault(require("@components/Menu"));
var react_router_dom_1 = require("react-router-dom");
var Modal_1 = __importDefault(require("@components/Modal"));
var styles_2 = require("@pages/SignUp/styles");
var useInput_1 = __importDefault(require("@hooks/useInput"));
var react_toastify_1 = require("react-toastify");
var CreateChannelModal_1 = __importDefault(require("@components/CreateChannelModal"));
var InviteWorkspaceModal_1 = __importDefault(require("@components/InviteWorkspaceModal"));
var InviteChannelModal_1 = __importDefault(require("@components/InviteChannelModal"));
var DMList_1 = __importDefault(require("@components/DMList"));
var ChannelList_1 = __importDefault(require("@components/ChannelList"));
var useSocket_1 = __importDefault(require("@hooks/useSocket"));
var Channel = (0, component_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@pages/Channel/index')); }); });
var DirectMessage = (0, component_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@pages/DirectMessage/index')); }); });
var Index = function () {
    var _a = (0, react_1.useState)(false), showUserMenu = _a[0], setShowUserMenu = _a[1];
    var _b = (0, react_1.useState)(false), showCreateWorkspaceModal = _b[0], setShowCreateWorkspaceModal = _b[1];
    var _c = (0, react_1.useState)(false), showInviteWorkspaceModal = _c[0], setShowInviteWorkspaceModal = _c[1];
    var _d = (0, react_1.useState)(false), showInviteChannelModal = _d[0], setShowInviteChannelModal = _d[1];
    var _e = (0, react_1.useState)(false), showWorkspaceModal = _e[0], setShowWorkspaceModal = _e[1];
    var _f = (0, react_1.useState)(false), showCreateChannelModal = _f[0], setShowCreateChannelModal = _f[1];
    var _g = (0, useInput_1.default)(''), newWorkspace = _g[0], onChangeNewWorkspace = _g[1], setNewWorkspace = _g[2];
    var _h = (0, useInput_1.default)(''), newUrl = _h[0], onChangeNewUrl = _h[1], setNewUrl = _h[2];
    var workspace = (0, react_router_1.useParams)().workspace;
    var _j = (0, swr_1.default)('/api/users', fetcher_1.default, {
        dedupingInterval: 2000 // 2초
    }), userData = _j.data, error = _j.error, revalidate = _j.revalidate, mutate = _j.mutate;
    var channelData = (0, swr_1.default)(userData ? "http://localhost:3095/api/workspaces/" + workspace + "/channels" : null, fetcher_1.default).data;
    var memberData = (0, swr_1.default)(userData ? "/api/workspaces/" + workspace + "/members" : null, fetcher_1.default).data;
    var _k = (0, useSocket_1.default)(workspace), socket = _k[0], disconnect = _k[1];
    (0, react_1.useEffect)(function () {
        // socket.on('message');
        // socket.emit();
        // disconnect();
    }, []);
    var onLogout = (0, react_1.useCallback)(function () {
        axios_1.default.post('/api/users/logout', null, {
            withCredentials: true,
        })
            .then(function () {
            mutate(false, false);
        });
    }, []);
    var onCloseUserProfile = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        setShowUserMenu(false);
    }, []);
    var onClickUserProfile = (0, react_1.useCallback)(function () {
        setShowUserMenu(function (prev) { return !prev; });
    }, []);
    var onClickCreateWorkspace = (0, react_1.useCallback)(function () {
        setShowCreateWorkspaceModal(true);
    }, []);
    var onCreateWorkspace = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (!newWorkspace || !newWorkspace.trim())
            return;
        if (!newUrl || !newUrl.trim())
            return;
        axios_1.default.post('/api/workspaces', {
            workspace: newWorkspace,
            url: newUrl,
        }, {
            withCredentials: true,
        })
            .then(function () {
            revalidate();
            setShowCreateWorkspaceModal(false);
            setNewWorkspace('');
            setNewUrl('');
        })
            .catch(function (error) {
            var _a;
            console.dir(error);
            react_toastify_1.toast.error((_a = error.response) === null || _a === void 0 ? void 0 : _a.data, { position: 'bottom-center' });
        });
    }, [newWorkspace, newUrl]);
    var onCloseModal = (0, react_1.useCallback)(function () {
        setShowCreateWorkspaceModal(false);
        setShowCreateChannelModal(false);
        setShowInviteWorkspaceModal(false);
        setShowInviteChannelModal(false);
    }, []);
    var toggleWorkspaceModal = (0, react_1.useCallback)(function () {
        setShowWorkspaceModal(function (prev) { return !prev; });
    }, []);
    var onClickAddChannel = (0, react_1.useCallback)(function () {
        setShowCreateChannelModal(true);
    }, []);
    var onClickInviteWorkspace = (0, react_1.useCallback)(function () {
        setShowInviteWorkspaceModal(true);
    }, []);
    if (!userData) {
        return react_1.default.createElement(react_router_1.Redirect, { to: "/login" });
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(styles_1.Header, null,
            react_1.default.createElement(styles_1.RightMenu, null,
                react_1.default.createElement("span", { onClick: onClickUserProfile },
                    react_1.default.createElement(styles_1.ProfileImg, { src: gravatar_1.default.url(userData.email, { s: '28px', d: 'retro' }), alt: userData.nickname }),
                    showUserMenu && (react_1.default.createElement(Menu_1.default, { style: { right: 0, top: 38 }, show: showUserMenu, onCloseModal: onCloseUserProfile },
                        react_1.default.createElement(styles_1.ProfileModal, null,
                            react_1.default.createElement("img", { src: gravatar_1.default.url(userData.email, { s: '28px', d: 'retro' }), alt: userData.nickname }),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("span", { id: "profile-name" }, userData.nickname),
                                react_1.default.createElement("span", { id: "profile-active" }, "Active"))),
                        react_1.default.createElement(styles_1.LogOutButton, { onClick: onLogout }, "\uB85C\uADF8\uC544\uC6C3")))))),
        react_1.default.createElement("button", { onClick: onLogout }, "\uB85C\uADF8\uC544\uC6C3"),
        react_1.default.createElement(styles_1.WorkspaceWrapper, null,
            react_1.default.createElement(styles_1.Workspaces, null, userData === null || userData === void 0 ? void 0 :
                userData.Workspaces.map(function (ws) {
                    return (react_1.default.createElement(react_router_dom_1.Link, { key: ws.id, to: "/workspace/" + ws.url + "/channel/\uC77C\uBC18" },
                        react_1.default.createElement(styles_1.WorkspaceButton, null, ws.name.slice(0, 1).toUpperCase())));
                }),
                react_1.default.createElement(styles_1.AddButton, { onClick: onClickCreateWorkspace }, "+")),
            react_1.default.createElement(styles_1.Channels, null,
                react_1.default.createElement(styles_1.WorkspaceName, { onClick: toggleWorkspaceModal }, "Sleact"),
                react_1.default.createElement(styles_1.MenuScroll, null,
                    react_1.default.createElement(Menu_1.default, { show: showWorkspaceModal, onCloseModal: toggleWorkspaceModal, style: { top: 95, left: 80 } },
                        react_1.default.createElement(styles_1.WorkspaceModal, null,
                            react_1.default.createElement("h2", null, "Sleact"),
                            react_1.default.createElement("button", { onClick: onClickInviteWorkspace }, "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4\uC5D0 \uC0AC\uC6A9\uC790 \uCD08\uB300"),
                            react_1.default.createElement("button", { onClick: onClickAddChannel }, "\uCC44\uB110 \uB9CC\uB4E4\uAE30"),
                            react_1.default.createElement("button", { onClick: onLogout }, "\uB85C\uADF8\uC544\uC6C3"))),
                    react_1.default.createElement(ChannelList_1.default, null),
                    react_1.default.createElement(DMList_1.default, null))),
            react_1.default.createElement(styles_1.Chats, null,
                react_1.default.createElement(react_router_1.Switch, null,
                    react_1.default.createElement(react_router_1.Route, { path: "/workspace/:workspace/channel/:channel", component: Channel }),
                    react_1.default.createElement(react_router_1.Route, { path: "/workspace/:workspace/dm/:id", component: DirectMessage })))),
        react_1.default.createElement(Modal_1.default, { show: showCreateWorkspaceModal, onCloseModal: onCloseModal },
            react_1.default.createElement("form", { onSubmit: onCreateWorkspace },
                react_1.default.createElement(styles_2.Label, { id: "wor kspace-label" },
                    react_1.default.createElement("span", null, "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 \uC774\uB984"),
                    react_1.default.createElement(styles_2.Input, { id: "workspace", value: newWorkspace, onChange: onChangeNewWorkspace })),
                react_1.default.createElement(styles_2.Label, { id: "workspace-url-label" },
                    react_1.default.createElement("span", null, "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 url"),
                    react_1.default.createElement(styles_2.Input, { id: "workspace", value: newUrl, onChange: onChangeNewUrl })),
                react_1.default.createElement(styles_2.Button, { type: "submit" }, "\uC0DD\uC131\uD558\uAE30"))),
        react_1.default.createElement(CreateChannelModal_1.default, { show: showCreateChannelModal, onCloseModal: onCloseModal, setShowCreateChannelModal: setShowCreateChannelModal }),
        react_1.default.createElement(InviteWorkspaceModal_1.default, { show: showInviteWorkspaceModal, onCloseModal: onCloseModal, setShowInviteWorkspaceModal: setShowInviteWorkspaceModal }),
        react_1.default.createElement(InviteChannelModal_1.default, { show: showInviteChannelModal, onCloseModal: onCloseModal, setShowInviteChannelModal: setShowInviteChannelModal })));
};
exports.default = Index;
//# sourceMappingURL=index.js.map