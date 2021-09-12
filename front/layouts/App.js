"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var LogIn_1 = __importDefault(require("@pages/LogIn"));
var SignUp_1 = __importDefault(require("@pages/SignUp"));
var App = function () {
    // @ts-ignore
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, path: '/', to: "/login" }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/login', component: LogIn_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/signup', component: SignUp_1.default })));
};
exports.default = App;
//# sourceMappingURL=App.js.map