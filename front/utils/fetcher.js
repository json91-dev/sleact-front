"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var fetcher = function (url) { return axios_1.default.get(url, { withCredentials: true }).then(function (response) {
    console.log(response);
    return response.data;
}); };
exports.default = fetcher;
//# sourceMappingURL=fetcher.js.map