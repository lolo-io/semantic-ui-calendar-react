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
import range from 'lodash/range';
import isNil from 'lodash/isNil';
import * as React from 'react';
import { findHTMLElement } from '../lib';
import BaseCalendarView from './BaseCalendarView';
import Calendar from './Calendar';
import Body from './CalendarBody/Body';
import Header from './CalendarHeader/Header';
import { MONTH_CALENDAR_ROW_WIDTH } from './MonthView';
var MONTH_POSITIONS = range(12);
function getActive(start, end) {
    if (isNil(start) && isNil(end)) {
        return;
    }
    if (!isNil(start) && isNil(end)) {
        return start;
    }
    if (!isNil(start) && !isNil(end)) {
        return MONTH_POSITIONS.slice(start, end + 1);
    }
}
var MonthRangeView = /** @class */ (function (_super) {
    __extends(MonthRangeView, _super);
    function MonthRangeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthRangeView.prototype.render = function () {
        var _this = this;
        var _a = this.props, values = _a.values, onNextPageBtnClick = _a.onNextPageBtnClick, onPrevPageBtnClick = _a.onPrevPageBtnClick, onValueClick = _a.onValueClick, hasPrevPage = _a.hasPrevPage, hasNextPage = _a.hasNextPage, currentHeadingValue = _a.currentHeadingValue, onHeaderClick = _a.onHeaderClick, activeRange = _a.activeRange, disabledItemIndexes = _a.disabledItemIndexes, currentRangeHeadingValue = _a.currentRangeHeadingValue, hoveredItemIndex = _a.hoveredItemIndex, onCellHover = _a.onCellHover, onMount = _a.onMount, inline = _a.inline, localization = _a.localization, rest = __rest(_a, ["values", "onNextPageBtnClick", "onPrevPageBtnClick", "onValueClick", "hasPrevPage", "hasNextPage", "currentHeadingValue", "onHeaderClick", "activeRange", "disabledItemIndexes", "currentRangeHeadingValue", "hoveredItemIndex", "onCellHover", "onMount", "inline", "localization"]);
        var start = activeRange.start, end = activeRange.end;
        return (React.createElement(Calendar, __assign({ ref: function (e) { return _this.calendarNode = findHTMLElement(e); }, outlineOnFocus: inline }, rest),
            React.createElement(Header, { width: MONTH_CALENDAR_ROW_WIDTH, className: 'suicr-month-range-view-header', displayWeeks: false, rangeRowContent: currentRangeHeadingValue, onNextPageBtnClick: onNextPageBtnClick, onPrevPageBtnClick: onPrevPageBtnClick, hasNextPage: hasNextPage, hasPrevPage: hasPrevPage, title: currentHeadingValue, onHeaderClick: onHeaderClick, localization: localization }),
            React.createElement(Body, { width: MONTH_CALENDAR_ROW_WIDTH, data: values, onCellClick: onValueClick, onCellHover: onCellHover, hovered: hoveredItemIndex, active: getActive(start, end), disabled: disabledItemIndexes })));
    };
    MonthRangeView.defaultProps = {
        active: {
            start: undefined,
            end: undefined,
        },
    };
    return MonthRangeView;
}(BaseCalendarView));
export default MonthRangeView;
