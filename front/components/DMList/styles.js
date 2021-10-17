"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseButton = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.CollapseButton = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  border: none;\n  width: 26px;\n  height: 26px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  margin-left: 10px;\n  cursor: pointer;\n\n  ", ";\n"], ["\n  background: transparent;\n  border: none;\n  width: 26px;\n  height: 26px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  margin-left: 10px;\n  cursor: pointer;\n\n  ", ";\n"])), function (_a) {
    var collapse = _a.collapse;
    return collapse &&
        "\n    & i {\n      transform: none;\n    }\n  ";
});
var templateObject_1;
//# sourceMappingURL=styles.js.map