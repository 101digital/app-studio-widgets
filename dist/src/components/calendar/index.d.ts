import React from "react";
import { CalendarProps } from "react-native-calendars";
export type ASCalendarProps = CalendarProps & {
    onChange?: (dates: any) => any;
    selectedDayBackgroundColor: string;
    selectedDayTextColor: string;
    todayTextColor: string;
    arrowColor: string;
    dayTextColor: string;
    calendarBackground: string;
    textSectionTitleColor: string;
};
declare const ASCalendar: React.FC<ASCalendarProps>;
export default ASCalendar;
