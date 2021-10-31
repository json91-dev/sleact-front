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
var styles_1 = require("@components/ChatBox/styles");
var autosize_1 = __importDefault(require("autosize"));
var react_1 = __importStar(require("react"));
var ChatBox = function (_a) {
    var onSubmitForm = _a.onSubmitForm, chat = _a.chat, onChangeChat = _a.onChangeChat, placeholder = _a.placeholder;
    var textareaRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (textareaRef.current) {
            (0, autosize_1.default)(textareaRef.current);
        }
    }, [textareaRef.current]);
    var onKeydownChat = (0, react_1.useCallback)(function (e) {
        if (e.key === 'Enter') {
            console.log(e);
            if (!e.shiftKey) { // shift 키가 눌리지 않고 enter를 쳤을때
                e.preventDefault();
                onSubmitForm(e);
            }
        }
    }, [chat]);
    return (react_1.default.createElement(styles_1.ChatArea, null,
        react_1.default.createElement(styles_1.Form, { onSubmit: onSubmitForm },
            react_1.default.createElement(styles_1.MentionsTextarea, { value: chat, onChange: onChangeChat, onKeyDown: onKeydownChat, placeholder: placeholder, ref: textareaRef }),
            react_1.default.createElement(styles_1.Toolbox, null,
                react_1.default.createElement(styles_1.SendButton, { className: 'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
                        ((chat === null || chat === void 0 ? void 0 : chat.trim()) ? '' : ' c-texty_input__button--disabled'), "data-qa": "texty_send_button", "aria-label": "Send message", "data-sk": "tooltip_parent", type: "submit", disabled: !(chat === null || chat === void 0 ? void 0 : chat.trim()) },
                    react_1.default.createElement("i", { className: "c-icon c-icon--paperplane-filled", "aria-hidden": "true" }))))));
};
exports.default = ChatBox;
//# sourceMappingURL=index.js.map