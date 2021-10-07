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
var styles_1 = require("@pages/SignUp/styles");
var fetcher_1 = __importDefault(require("@utils/fetcher"));
var axios_1 = __importDefault(require("axios"));
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var swr_1 = __importDefault(require("swr"));
var LogIn = function () {
    var _a = (0, swr_1.default)('/api/users', fetcher_1.default), data = _a.data, error = _a.error, revalidate = _a.revalidate;
    var _b = (0, react_1.useState)(false), logInError = _b[0], setLogInError = _b[1];
    var _c = (0, useInput_1.default)(''), email = _c[0], onChangeEmail = _c[1];
    var _d = (0, useInput_1.default)(''), password = _d[0], onChangePassword = _d[1];
    var onSubmit = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        setLogInError(false);
        axios_1.default
            .post('/api/users/login', { email: email, password: password }, {
            withCredentials: true,
        })
            .then(function () {
            revalidate(); // data를 get요청으로 가져옴.
        })
            .catch(function (error) {
            var _a, _b;
            setLogInError(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.statusCode) === 401);
        });
    }, [email, password]);
    if (data === undefined) {
        return react_1.default.createElement("div", null, "\uB85C\uB529\uC911...");
    }
    // 로그인했을때 내 정보가 있으면 channel로 이동
    if (data) {
        console.log(data);
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: "/workspace/channel" });
    }
    // console.log(error, userData);
    // if (!error && userData) {
    //   console.log('로그인됨', userData);
    //   return <Redirect to="/workspace/sleact/channel/일반" />;
    // }
    return (react_1.default.createElement("div", { id: "container" },
        react_1.default.createElement(styles_1.Header, null, "Sleact"),
        react_1.default.createElement(styles_1.Form, { onSubmit: onSubmit },
            react_1.default.createElement(styles_1.Label, { id: "email-label" },
                react_1.default.createElement("span", null, "\uC774\uBA54\uC77C \uC8FC\uC18C"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.Input, { type: "email", id: "email", name: "email", value: email, onChange: onChangeEmail }))),
            react_1.default.createElement(styles_1.Label, { id: "password-label" },
                react_1.default.createElement("span", null, "\uBE44\uBC00\uBC88\uD638"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.Input, { type: "password", id: "password", name: "password", value: password, onChange: onChangePassword })),
                logInError && react_1.default.createElement(styles_1.Error, null, "\uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638 \uC870\uD569\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")),
            react_1.default.createElement(styles_1.Button, { type: "submit" }, "\uB85C\uADF8\uC778")),
        react_1.default.createElement(styles_1.LinkContainer, null,
            "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?\u00A0",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/signup" }, "\uD68C\uC6D0\uAC00\uC785 \uD558\uB7EC\uAC00\uAE30"))));
};
exports.default = LogIn;
//# sourceMappingURL=index.js.map