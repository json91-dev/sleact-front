"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EachMention = exports.SendButton = exports.Toolbox = exports.MentionsTextarea = exports.Form = exports.ChatArea = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var react_mentions_1 = require("react-mentions");
exports.ChatArea = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n  padding-top: 0;\n"], ["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n  padding-top: 0;\n"])));
exports.Form = styled_1.default.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: rgb(29, 28, 29);\n  font-size: 15px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid rgb(29, 28, 29);\n"], ["\n  color: rgb(29, 28, 29);\n  font-size: 15px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid rgb(29, 28, 29);\n"])));
exports.MentionsTextarea = (0, styled_1.default)(react_mentions_1.MentionsInput)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: Slack-Lato, appleLogo, sans-serif;\n  font-size: 15px;\n  padding: 8px 9px;\n\n  & strong {\n    background: skyblue;\n  }\n\n  & textarea {\n    height: 44px;\n    padding: 9px 10px !important;\n    outline: none !important;\n    border-radius: 4px !important;\n    resize: none !important;\n    line-height: 22px;\n    border: none;\n  }\n\n  & ul {\n    border: 1px solid lightgray;\n    max-height: 200px;\n    overflow-y: auto;\n    padding: 9px 10px;\n    background: white;\n    border-radius: 4px;\n    width: 150px;\n  }\n"], ["\n  font-family: Slack-Lato, appleLogo, sans-serif;\n  font-size: 15px;\n  padding: 8px 9px;\n\n  & strong {\n    background: skyblue;\n  }\n\n  & textarea {\n    height: 44px;\n    padding: 9px 10px !important;\n    outline: none !important;\n    border-radius: 4px !important;\n    resize: none !important;\n    line-height: 22px;\n    border: none;\n  }\n\n  & ul {\n    border: 1px solid lightgray;\n    max-height: 200px;\n    overflow-y: auto;\n    padding: 9px 10px;\n    background: white;\n    border-radius: 4px;\n    width: 150px;\n  }\n"])));
exports.Toolbox = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background: rgb(248, 248, 248);\n  height: 41px;\n  display: flex;\n  border-top: 1px solid rgb(221, 221, 221);\n  align-items: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n"], ["\n  position: relative;\n  background: rgb(248, 248, 248);\n  height: 41px;\n  display: flex;\n  border-top: 1px solid rgb(221, 221, 221);\n  align-items: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n"])));
exports.SendButton = styled_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n"], ["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n"])));
exports.EachMention = styled_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 4px 20px;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  color: rgb(28, 29, 28);\n  width: 100%;\n\n  & img {\n    margin-right: 5px;\n  }\n\n  ", ";\n"], ["\n  padding: 4px 20px;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  color: rgb(28, 29, 28);\n  width: 100%;\n\n  & img {\n    margin-right: 5px;\n  }\n\n  ", ";\n"])), function (_a) {
    var focus = _a.focus;
    return focus &&
        "\n    background: #1264a3;\n    color: white;\n  ";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styles.js.map