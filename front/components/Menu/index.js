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
var react_1 = __importStar(require("react"));
var styles_1 = require("./styles");
var Menu = function (_a) {
    var children = _a.children, style = _a.style, show = _a.show, onCloseModal = _a.onCloseModal, closeButton = _a.closeButton;
    var stopPropagation = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
    }, []);
    return (react_1.default.createElement(styles_1.CreateMenu, { onClick: onCloseModal },
        react_1.default.createElement("div", { style: style, onClick: stopPropagation },
            closeButton && react_1.default.createElement(styles_1.CloseModalButton, { onClick: onCloseModal }, "\u00D7"),
            children)));
};
Menu.defaultProps = {
    closeButton: true,
};
exports.default = Menu;
//# sourceMappingURL=index.js.map