"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = __importDefault(require("lodash/filter"));
var range_1 = __importDefault(require("lodash/range"));
var includes_1 = __importDefault(require("lodash/includes"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var moment_1 = __importDefault(require("moment"));
var React = __importStar(require("react"));
var MonthRangeView_1 = __importDefault(require("../../views/MonthRangeView"));
var BasePicker_1 = require("../BasePicker");
var const_1 = require("./const");
var sharedFunctions_1 = require("./sharedFunctions");
var MonthRangePicker = /** @class */ (function (_super) {
    __extends(MonthRangePicker, _super);
    function MonthRangePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, _a) {
            var itemPosition = _a.itemPosition;
            // call `onChange` with value: { start: moment, end: moment }
            var _b = _this.props, start = _b.start, end = _b.end, localization = _b.localization;
            var data = __assign(__assign({}, _this.props), { value: {} });
            if (isNil_1.default(start) && isNil_1.default(end)) {
                data.value =
                    localization
                        ? { start: moment_1.default({ year: _this.state.date.year(), month: itemPosition, date: 1 }).locale(localization) }
                        : { start: moment_1.default({ year: _this.state.date.year(), month: itemPosition, date: 1 }) };
            }
            else if (!isNil_1.default(start) && isNil_1.default(end)) {
                data.value =
                    localization
                        ? {
                            start: start,
                            end: moment_1.default({ year: _this.state.date.year(), month: itemPosition, date: 1 }).locale(localization).endOf('month'),
                        }
                        : {
                            start: start,
                            end: moment_1.default({ year: _this.state.date.year(), month: itemPosition, date: 1 }).endOf('month'),
                        };
            }
            _this.props.onChange(e, data);
        };
        _this.switchToNextPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var nextDate = date.clone();
                nextDate.add(1, 'year');
                return { date: nextDate };
            }, callback);
        };
        _this.switchToPrevPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var prevDate = date.clone();
                prevDate.subtract(1, 'year');
                return { date: prevDate };
            }, callback);
        };
        _this.getInitialDatePosition = function () {
            var selectable = _this.getSelectableCellPositions();
            return sharedFunctions_1.getInitialDatePosition(selectable, _this.state.date);
        };
        _this.PAGE_WIDTH = const_1.MONTH_PAGE_WIDTH;
        return _this;
    }
    MonthRangePicker.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, dateFormat = _a.dateFormat, start = _a.start, end = _a.end, minDate = _a.minDate, maxDate = _a.maxDate, localization = _a.localization, rest = __rest(_a, ["onChange", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "dateFormat", "start", "end", "minDate", "maxDate", "localization"]);
        return (React.createElement(MonthRangeView_1.default, __assign({}, rest, { values: this.buildCalendarValues(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onCellHover: this.onHoveredCellPositionChange, hoveredItemIndex: this.state.hoveredCellPosition, onValueClick: this.handleChange, inline: this.props.inline, hasPrevPage: this.isPrevPageAvailable(), hasNextPage: this.isNextPageAvailable(), onBlur: this.handleBlur, onMount: this.props.onCalendarViewMount, currentHeadingValue: this.getCurrentDate(), currentRangeHeadingValue: this.getSelectedRange(), activeRange: this.getActiveCellsPositions(), disabledItemIndexes: this.getDisabledPositions(), localization: localization })));
    };
    MonthRangePicker.prototype.getCurrentDate = function () {
        /* Return currently selected year and month(string) to display in calendar header. */
        return this.state.date.format('YYYY');
    };
    MonthRangePicker.prototype.buildCalendarValues = function () {
        var localization = this.props.localization;
        return sharedFunctions_1.buildCalendarValues(localization);
    };
    MonthRangePicker.prototype.getSelectableCellPositions = function () {
        var _this = this;
        return filter_1.default(range_1.default(0, const_1.MONTHS_IN_YEAR), function (d) { return !includes_1.default(_this.getDisabledPositions(), d); });
    };
    MonthRangePicker.prototype.getActiveCellsPositions = function () {
        /*
          Return starting and ending positions of month range that should be displayed as active
          { start: number, end: number }
        */
        var _a = this.props, start = _a.start, end = _a.end;
        var currentYear = this.state.date.year();
        var result = {
            start: undefined,
            end: undefined,
        };
        if (start && end) {
            if (currentYear < start.year() || currentYear > end.year()) {
                return result;
            }
            result.start = currentYear === start.year() ? start.month() : 0;
            result.end = currentYear === end.year() ? end.month() : const_1.MONTHS_IN_YEAR - 1;
        }
        if (start && !end) {
            result.start = currentYear === start.year() ? start.month() : undefined;
        }
        return result;
    };
    MonthRangePicker.prototype.getDisabledPositions = function () {
        /*
          Return position numbers of dates that should be displayed as disabled
          (position in array returned by `this.buildCalendarValues`).
        */
        var _a = this.props, maxDate = _a.maxDate, minDate = _a.minDate;
        return sharedFunctions_1.getDisabledPositions(undefined, undefined, maxDate, minDate, this.state.date);
    };
    MonthRangePicker.prototype.isNextPageAvailable = function () {
        var maxDate = this.props.maxDate;
        return sharedFunctions_1.isNextPageAvailable(maxDate, undefined, this.state.date);
    };
    MonthRangePicker.prototype.isPrevPageAvailable = function () {
        var minDate = this.props.minDate;
        return sharedFunctions_1.isPrevPageAvailable(minDate, undefined, this.state.date);
    };
    MonthRangePicker.prototype.getSelectedRange = function () {
        /* Return currently selected dates range(string) to display in calendar header. */
        var _a = this.props, start = _a.start, end = _a.end, dateFormat = _a.dateFormat;
        return (start ? start.format(dateFormat) : '- - -') + " - " + (end ? end.format(dateFormat) : '- - -');
    };
    return MonthRangePicker;
}(BasePicker_1.RangeSelectionPicker));
exports.default = MonthRangePicker;
