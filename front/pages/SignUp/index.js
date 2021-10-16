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
var useInput_1 = __importDefault(require("@hooks/useInput"));
var react_1 = __importStar(require("react"));
var styles_1 = require("./styles");
var axios_1 = __importDefault(require("axios"));
var react_router_dom_1 = require("react-router-dom");
var swr_1 = __importDefault(require("swr"));
var fetcher_1 = __importDefault(require("@utils/fetcher"));
var SignUp = function () {
    var _a = (0, swr_1.default)('/api/users', fetcher_1.default), data = _a.data, error = _a.error, revalidate = _a.revalidate;
    var _b = (0, useInput_1.default)(''), email = _b[0], onChangeEmail = _b[1];
    var _c = (0, useInput_1.default)(''), nickname = _c[0], onChangeNickname = _c[1];
    var _d = (0, useInput_1.default)(''), password = _d[0], setPassword = _d[2];
    var _e = (0, useInput_1.default)(''), passwordCheck = _e[0], setPasswordCheck = _e[2];
    var _f = (0, react_1.useState)(false), mismatchError = _f[0], setMismatchError = _f[1];
    var _g = (0, react_1.useState)(''), signUpError = _g[0], setSignUpError = _g[1];
    var _h = (0, react_1.useState)(false), signUpSuccess = _h[0], setSignUpSuccess = _h[1];
    var onChangePassword = (0, react_1.useCallback)(function (e) {
        setPassword(e.target.value);
        setMismatchError(e.target.value !== passwordCheck);
    }, [passwordCheck]);
    var onChangePasswordCheck = (0, react_1.useCallback)(function (e) {
        setPasswordCheck(e.target.value);
        setMismatchError(e.target.value !== password);
    }, [password]);
    var onSubmit = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (!mismatchError && nickname) {
            console.log('서버로 회원가입하기');
            setSignUpError('');
            setSignUpSuccess(false);
            axios_1.default.post('/api/users', {
                email: email,
                nickname: nickname,
                password: password,
            })
                .then(function (response) {
                console.log(response);
                setSignUpSuccess(true);
            })
                .catch(function (error) {
                setSignUpError(error.response.data);
            })
                .finally(function () { });
        }
    }, [email, nickname, password, passwordCheck]);
    if (data === undefined) {
        return react_1.default.createElement("div", null, "\uB85C\uB529\uC911...");
    }
    if (data) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: "/workspace/sleact/channel/\uC77C\uBC18" });
    }
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
                    react_1.default.createElement(styles_1.Input, { type: "password", id: "password-check", name: "password-check", value: passwordCheck, onChange: onChangePasswordCheck })),
                mismatchError && react_1.default.createElement(styles_1.Error, null, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),
                !nickname && react_1.default.createElement(styles_1.Error, null, "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),
                signUpError && react_1.default.createElement(styles_1.Error, null, signUpError),
                signUpSuccess && react_1.default.createElement(styles_1.Success, null, "\uD68C\uC6D0\uAC00\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694.")),
            react_1.default.createElement(styles_1.Button, { type: "submit" }, "\uD68C\uC6D0\uAC00\uC785")),
        react_1.default.createElement(styles_1.LinkContainer, null,
            "\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694?\u00A0",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "\uB85C\uADF8\uC778 \uD558\uB7EC\uAC00\uAE30"))));
};
exports.default = SignUp;
//# sourceMappingURL=index.js.map