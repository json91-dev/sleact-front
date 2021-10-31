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
var styles_1 = require("@pages/Channel/styles");
var ChatBox_1 = __importDefault(require("@components/ChatBox"));
var useInput_1 = __importDefault(require("@hooks/useInput"));
var Channel = function () {
    var _a = (0, useInput_1.default)(''), chat = _a[0], onChangeChat = _a[1], setChat = _a[2];
    var onSubmitForm = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        console.log('submit');
        setChat('');
    }, []);
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Header, null, "\uCC44\uB110"),
        react_1.default.createElement(ChatBox_1.default, { chat: chat, onChangeChat: onChangeChat, onSubmitForm: onSubmitForm })));
};
exports.default = Channel;
//# sourceMappingURL=index.js.map