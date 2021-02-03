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
var range_1 = __importDefault(require("lodash/range"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var concat_1 = __importDefault(require("lodash/concat"));
var uniq_1 = __importDefault(require("lodash/uniq"));
var sortBy_1 = __importDefault(require("lodash/sortBy"));
var React = __importStar(require("react"));
var MinuteView_1 = __importDefault(require("../../views/MinuteView"));
var BasePicker_1 = require("../BasePicker");
var sharedFunctions_1 = require("./sharedFunctions");
var DEFAULT_MINUTES_STEP = 5;
var DEFAULT_MINUTES_PER_ROW = 3;
var PAGE_WIDTH = 3;
var MinutePicker = /** @class */ (function (_super) {
    __extends(MinutePicker, _super);
    function MinutePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, _a) {
            var value = _a.value;
            var data = __assign(__assign({}, _this.props), { value: {
                    year: _this.state.date.year(),
                    month: _this.state.date.month(),
                    date: _this.state.date.date(),
                    hour: _this.state.date.hour(),
                    minute: _this.buildCalendarValues().indexOf(value) * _this.minutesStep,
                } });
            _this.props.onChange(e, data);
        };
        _this.switchToNextPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var nextDate = date.clone();
                nextDate.add(1, 'day');
                return { date: nextDate };
            }, callback);
        };
        _this.switchToPrevPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var prevDate = date.clone();
                prevDate.subtract(1, 'day');
                return { date: prevDate };
            }, callback);
        };
        var minutesStepProp = props.minutesStep, minutesPerRowProp = props.minutesPerRow;
        _this.PAGE_WIDTH = PAGE_WIDTH;
        _this.minutesStep = minutesStepProp ? minutesStepProp : DEFAULT_MINUTES_STEP;
        _this.minutesOnPage = Math.floor(60 / _this.minutesStep);
        _this.minutesPerRow = minutesPerRowProp ? minutesPerRowProp : DEFAULT_MINUTES_PER_ROW;
        return _this;
    }
    MinutePicker.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, minDate = _a.minDate, maxDate = _a.maxDate, disable = _a.disable, timeFormat = _a.timeFormat, localization = _a.localization, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "minDate", "maxDate", "disable", "timeFormat", "localization"]);
        return (React.createElement(MinuteView_1.default, __assign({}, rest, { values: this.buildCalendarValues(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onValueClick: this.handleChange, hoveredItemIndex: this.state.hoveredCellPosition, onCellHover: this.onHoveredCellPositionChange, onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, hasNextPage: this.isNextPageAvailable(), hasPrevPage: this.isPrevPageAvailable(), disabledItemIndexes: this.getDisabledPositions(), currentHeadingValue: this.getCurrentDate(), activeItemIndex: this.getActiveCellPosition(), localization: localization, rowWidth: this.minutesPerRow })));
    };
    MinutePicker.prototype.getCurrentDate = function () {
        /* Return currently selected month, date and year(string) to display in calendar header. */
        return sharedFunctions_1.getCurrentDate(this.state.date);
    };
    MinutePicker.prototype.buildCalendarValues = function () {
        var _this = this;
        /*
          Return array of minutes (strings) like ['16:15', '16:20', ...]
          that used to populate calendar's page.
        */
        var hour = this.state.date.hour() < 10
            ? '0' + this.state.date.hour().toString()
            : this.state.date.hour().toString();
        return range_1.default(0, 60, this.minutesStep)
            .map(function (minute) { return "" + (minute < 10 ? '0' : '') + minute; })
            .map(function (minute) { return sharedFunctions_1.buildTimeStringWithSuffix(hour, minute, _this.props.timeFormat); });
    };
    MinutePicker.prototype.getSelectableCellPositions = function () {
        var disabled = this.getDisabledPositions();
        var all = range_1.default(0, this.minutesOnPage);
        if (disabled) {
            return all.filter(function (pos) {
                return disabled.indexOf(pos) < 0;
            });
        }
        return all;
    };
    MinutePicker.prototype.getInitialDatePosition = function () {
        var selectable = this.getSelectableCellPositions();
        if (selectable.indexOf(this.getMinuteCellPosition(this.state.date.minute())) < 0) {
            return selectable[0];
        }
        return this.getMinuteCellPosition(this.state.date.minute());
    };
    MinutePicker.prototype.getDisabledPositions = function () {
        var _this = this;
        var _a = this.props, disable = _a.disable, minDate = _a.minDate, maxDate = _a.maxDate;
        var disabledByDisable = [];
        var disabledByMaxDate = [];
        var disabledByMinDate = [];
        if (isArray_1.default(disable)) {
            disabledByDisable = concat_1.default(disabledByDisable, disable.filter(function (date) { return date.isSame(_this.state.date, 'day'); })
                .map(function (date) { return _this.getMinuteCellPosition(date.minute()); }));
        }
        if (minDate) {
            if (minDate.isSame(this.state.date, 'hour')) {
                disabledByMinDate = concat_1.default(disabledByMinDate, range_1.default(0, minDate.minute()).map(function (m) { return _this.getMinuteCellPosition(m); }));
            }
        }
        if (maxDate) {
            if (maxDate.isSame(this.state.date, 'hour')) {
                disabledByMaxDate = concat_1.default(disabledByMaxDate, range_1.default(maxDate.minute() + this.minutesStep, 60).map(function (m) { return _this.getMinuteCellPosition(m); }));
            }
        }
        var result = sortBy_1.default(uniq_1.default(concat_1.default(disabledByDisable, disabledByMaxDate, disabledByMinDate)));
        if (result.length > 0) {
            return result;
        }
    };
    MinutePicker.prototype.getActiveCellPosition = function () {
        /*
          Return position of a minute that should be displayed as active
          (position in array returned by `this.buildCalendarValues`).
        */
        var value = this.props.value;
        if (value && value.isSame(this.state.date, 'date')) {
            return Math.floor(this.props.value.minutes() / this.minutesStep);
        }
    };
    MinutePicker.prototype.isNextPageAvailable = function () {
        return sharedFunctions_1.isNextPageAvailable(this.state.date, this.props.maxDate);
    };
    MinutePicker.prototype.isPrevPageAvailable = function () {
        return sharedFunctions_1.isPrevPageAvailable(this.state.date, this.props.minDate);
    };
    MinutePicker.prototype.getMinuteCellPosition = function (minute) {
        return Math.floor(minute / this.minutesStep);
    };
    MinutePicker.defaultProps = {
        timeFormat: '24',
    };
    return MinutePicker;
}(BasePicker_1.SingleSelectionPicker));
exports.default = MinutePicker;
