import React from 'react';
import { CalendarProps } from 'react-native-calendars';
export type ASCalendarProps = CalendarProps & {
    onChange?: (dates: any) => any;
};
declare const ASCalendar: React.FC<ASCalendarProps>;
export default ASCalendar;
