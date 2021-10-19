"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyHeader = exports.Section = exports.ChatZone = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.ChatZone = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"], ["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"])));
exports.Section = styled_1.default.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n"], ["\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n"])));
exports.StickyHeader = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  width: 100%;\n  position: sticky;\n  top: 14px;\n\n  & button {\n    font-weight: bold;\n    font-size: 13px;\n    height: 28px;\n    line-height: 27px;\n    padding: 0 16px;\n    z-index: 2;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n    border-radius: 24px;\n    position: relative;\n    top: -13px;\n    background: white;\n    border: none;\n    outline: none;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  width: 100%;\n  position: sticky;\n  top: 14px;\n\n  & button {\n    font-weight: bold;\n    font-size: 13px;\n    height: 28px;\n    line-height: 27px;\n    padding: 0 16px;\n    z-index: 2;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n    border-radius: 24px;\n    position: relative;\n    top: -13px;\n    background: white;\n    border: none;\n    outline: none;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map