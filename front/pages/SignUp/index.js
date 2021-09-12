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
var SignUp = function () {
    var email = (0, react_1.useState)('')[0];
    var nickname = (0, react_1.useState)('')[0];
    var password = (0, react_1.useState)('')[0];
    var passwordCheck = (0, react_1.useState)('')[0];
    var onChangeEmail = (0, react_1.useCallback)(function () { }, []);
    var onChangeNickname = (0, react_1.useCallback)(function () { }, []);
    var onChangePassword = (0, react_1.useCallback)(function () { }, []);
    var onChangePasswordCheck = (0, react_1.useCallback)(function () { }, []);
    var onSubmit = (0, react_1.useCallback)(function () { }, []);
    return (react_1.default.createElement("div", { id: "container" },
        react_1.default.createElement(styles_1.Header, null, "Sleact"),
        react_1.default.createElement(styles_1.Form, { onSubmit: onSubmit },
            react_1.default.createElement(styles_1.Label, { id: "email-label" },
                react_1.default.createElement("span", null, "\uC774\uBA54\uC77C \uC8FC\uC18C"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.Input, { type: "email", id: "email", name: "email", value: email, onChange: onChangeEmail }))),
            react_1.default.createElement(styles_1.Label, { id: "nickname-label" },
                react_1.default.createElement("span", null, "\uB2C9\uB124\uC784"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.Input, { type: "text", id: "nickname", name: "nickname", value: nickname, onChange: onChangeNickname }))),
            react_1.default.createElement(styles_1.Label, { id: "password-label" },
                react_1.default.createElement("span", null, "\uBE44\uBC00\uBC88\uD638"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.Input, { type: "password", id: "password", name: "password", value: password, onChange: onChangePassword }))),
            react_1.default.createElement(styles_1.Label, { id: "password-check-label" },
                react_1.default.createElement("span", null, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.Input, { type: "password", id: "password-check", name: "password-check", value: passwordCheck, onChange: onChangePasswordCheck }))),
            react_1.default.createElement(styles_1.Button, { type: "submit" }, "\uD68C\uC6D0\uAC00\uC785")),
        react_1.default.createElement(styles_1.LinkContainer, null,
            "\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694?\u00A0",
            react_1.default.createElement("a", { href: "/login" }, "\uB85C\uADF8\uC778 \uD558\uB7EC\uAC00\uAE30"))));
};
exports.default = SignUp;
//# sourceMappingURL=index.js.map