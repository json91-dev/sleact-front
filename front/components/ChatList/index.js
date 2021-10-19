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
Object.defineProperty(exports, "__esModule", { value: true });
// import Chat from '@components/Chat';
var styles_1 = require("@components/ChatList/styles");
var react_1 = __importStar(require("react"));
var react_custom_scrollbars_2_1 = require("react-custom-scrollbars-2");
var ChatList = function (_a) {
    var scrollbarRef = _a.scrollbarRef, isReachingEnd = _a.isReachingEnd, isEmpty = _a.isEmpty, chatSections = _a.chatSections, setSize = _a.setSize;
    var onScroll = (0, react_1.useCallback)(function (values) {
        if (values.scrollTop === 0 && !isReachingEnd && !isEmpty) {
            setSize(function (size) { return size + 1; }).then(function () {
                var _a, _b;
                (_a = scrollbarRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop(((_b = scrollbarRef.current) === null || _b === void 0 ? void 0 : _b.getScrollHeight()) - values.scrollHeight);
            });
        }
    }, [setSize, scrollbarRef, isReachingEnd, isEmpty]);
    return (react_1.default.createElement(styles_1.ChatZone, null,
        react_1.default.createElement(react_custom_scrollbars_2_1.Scrollbars, { autoHide: true, ref: scrollbarRef, onScrollFrame: onScroll }, Object.entries(chatSections).map(function (_a) {
            var date = _a[0], chats = _a[1];
            return (react_1.default.createElement(styles_1.Section, { className: "section-" + date, key: date },
                react_1.default.createElement(styles_1.StickyHeader, null,
                    react_1.default.createElement("button", null, date))));
        }))));
};
exports.default = ChatList;
//# sourceMappingURL=index.js.map