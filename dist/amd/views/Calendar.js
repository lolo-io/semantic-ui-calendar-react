var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define(["require", "exports", "react", "semantic-ui-react"], function (require, exports, React, semantic_ui_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var Calendar = /** @class */ (function (_super) {
        __extends(Calendar, _super);
        function Calendar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Calendar.prototype.render = function () {
            var _a = this.props, children = _a.children, outlineOnFocus = _a.outlineOnFocus, pickerWidth = _a.pickerWidth, pickerStyle = _a.pickerStyle, rest = __rest(_a, ["children", "outlineOnFocus", "pickerWidth", "pickerStyle"]);
            var style = __assign({ width: pickerWidth, minWidth: '22em', 
                // Prevent poped up picker from beeing outlined on focus.
                // Inline picker should be outlined when in focus.
                outline: outlineOnFocus ? undefined : 'none' }, pickerStyle);
            return (React.createElement(semantic_ui_react_1.Table, __assign({ style: style, unstackable: true, celled: true }, rest, { textAlign: 'center' }), children));
        };
        Calendar.defaultProps = {
            pickerWidth: '100%',
        };
        return Calendar;
    }(React.Component));
    exports.default = Calendar;
});
