"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseModalButton = exports.CreateMenu = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.CreateMenu = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 1000;\n\n  & > div {\n    position: absolute;\n    display: inline-block;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);\n    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);\n    border-radius: 6px;\n    user-select: none;\n    min-width: 360px;\n    z-index: 512;\n    max-height: calc(100vh - 20px);\n    color: rgb(29, 28, 29);\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 1000;\n\n  & > div {\n    position: absolute;\n    display: inline-block;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);\n    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);\n    border-radius: 6px;\n    user-select: none;\n    min-width: 360px;\n    z-index: 512;\n    max-height: calc(100vh - 20px);\n    color: rgb(29, 28, 29);\n  }\n"])));
exports.CloseModalButton = styled_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map