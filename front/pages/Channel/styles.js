"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragOver = exports.Header = exports.Container = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  height: calc(100vh - 38px);\n  flex-flow: column;\n  position: relative;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  height: calc(100vh - 38px);\n  flex-flow: column;\n  position: relative;\n"])));
exports.Header = styled_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 64px;\n  display: flex;\n  width: 100%;\n  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n  box-shadow: 0 1px 0 var(--saf-0);\n  padding: 20px 16px 20px 20px;\n  font-weight: bold;\n  align-items: center;\n"], ["\n  height: 64px;\n  display: flex;\n  width: 100%;\n  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n  box-shadow: 0 1px 0 var(--saf-0);\n  padding: 20px 16px 20px 20px;\n  font-weight: bold;\n  align-items: center;\n"])));
exports.DragOver = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 64px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 64px);\n  background: white;\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n"], ["\n  position: absolute;\n  top: 64px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 64px);\n  background: white;\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map