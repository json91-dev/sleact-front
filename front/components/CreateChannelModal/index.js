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
var Modal_1 = __importDefault(require("@components/Modal"));
var react_1 = __importStar(require("react"));
var styles_1 = require("../../../sleact/front/pages/SignUp/styles");
var useInput_1 = __importDefault(require("@hooks/useInput"));
var CreateChannelModal = function (_a) {
    var show = _a.show, onCloseModal = _a.onCloseModal;
    var _b = (0, useInput_1.default)(''), newChannel = _b[0], onChangeNewChannel = _b[1];
    var onCreateChannel = (0, react_1.useCallback)(function () { }, []);
    return (react_1.default.createElement(Modal_1.default, { show: show, onCloseModal: onCloseModal },
        react_1.default.createElement("form", { onSubmit: onCreateChannel },
            react_1.default.createElement(styles_1.Label, { id: "channel-label" },
                react_1.default.createElement("span", null, "\uCC44\uB110 \uC774\uB984"),
                react_1.default.createElement(styles_1.Input, { id: "channel", value: newChannel, onChange: onChangeNewChannel })),
            react_1.default.createElement(styles_1.Button, null, "\uC0DD\uC131\uD558\uAE30"))));
};
exports.default = CreateChannelModal;
//# sourceMappingURL=index.js.map