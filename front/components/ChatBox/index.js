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
var gravatar_1 = __importDefault(require("gravatar"));
var react_1 = __importStar(require("react"));
var react_mentions_1 = require("react-mentions");
var ChatBox = function (_a) {
    var onSubmitForm = _a.onSubmitForm, chat = _a.chat, onChangeChat = _a.onChangeChat, placeholder = _a.placeholder, data = _a.data;
    var textareaRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (textareaRef.current) {
            (0, autosize_1.default)(textareaRef.current);
        }
    }, [textareaRef.current]);
    var onKeydownChat = (0, react_1.useCallback)(function (e) {
        if (e.key === 'Enter') {
            if (!e.shiftKey) {
                e.preventDefault();
                onSubmitForm(e);
            }
        }
    }, [chat]);
    var renderUserSuggestion = (0, react_1.useCallback)(function (member, search, highlightedDisplay, index, focus) {
        if (!data) {
            return null;
        }
        return (react_1.default.createElement(styles_1.EachMention, { focus: focus },
            react_1.default.createElement("img", { src: gravatar_1.default.url(data[index].email, { s: '20px', d: 'retro' }), alt: data[index].nickname }),
            react_1.default.createElement("span", null, highlightedDisplay)));
    }, [data]);
    return (react_1.default.createElement(styles_1.ChatArea, null,
        react_1.default.createElement(styles_1.Form, { onSubmit: onSubmitForm },
            react_1.default.createElement(styles_1.MentionsTextarea, { id: "editor-chat", value: chat, onChange: onChangeChat, onKeyPress: onKeydownChat, placeholder: placeholder, inputRef: textareaRef, allowSuggestionsAboveCursor: true },
                react_1.default.createElement(react_mentions_1.Mention, { appendSpaceOnAdd: true, trigger: "@", data: (data === null || data === void 0 ? void 0 : data.map(function (v) { return ({ id: v.id, display: v.nickname }); })) || [], renderSuggestion: renderUserSuggestion })),
            react_1.default.createElement(styles_1.Toolbox, null,
                react_1.default.createElement(styles_1.SendButton, { className: 'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
                        ((chat === null || chat === void 0 ? void 0 : chat.trim()) ? '' : ' c-texty_input__button--disabled'), "data-qa": "texty_send_button", "aria-label": "Send message", "data-sk": "tooltip_parent", type: "submit", disabled: !(chat === null || chat === void 0 ? void 0 : chat.trim()) },
                    react_1.default.createElement("i", { className: "c-icon c-icon--paperplane-filled", "aria-hidden": "true" }))))));
};
exports.default = ChatBox;
//# sourceMappingURL=index.js.map