"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useInput = function (initialData) {
    var _a = (0, react_1.useState)(initialData), value = _a[0], setValue = _a[1];
    var handler = (0, react_1.useCallback)(function (e) {
        setValue(e.target.value);
    }, []);
    return [value, handler, setValue];
};
exports.default = useInput;
//# sourceMappingURL=useInput.js.map