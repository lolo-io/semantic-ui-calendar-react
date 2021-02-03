/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithOptionalHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
declare type MinuteViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithOptionalHeaderViewProps;
declare class MinuteView extends BaseCalendarView<MinuteViewProps, any> {
    protected MINUTE_CALENDAR_ROW_WIDTH: number;
    constructor(props: any);
    render(): JSX.Element;
}
export default MinuteView;
