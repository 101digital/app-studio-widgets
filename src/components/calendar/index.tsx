import React, {useEffect, useState,useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar, CalendarProps, DateData} from 'react-native-calendars';
import {addDays, format, isBefore, parseISO} from "date-fns";
import {ThemeContext} from "../../context/theme-context";

export type  ASCalendarProps = CalendarProps & {
    onChange?: (dates:any)=> any
}

const ASCalendar: React.FC<ASCalendarProps> = (props: ASCalendarProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        style,
        markedDates,
        markingType,
        minDate,
        onChange,
        ...restProps
    } = props
    const [selected, setSelected] = useState<string>('');
    const [markedDatesState, setMarkedDatesState] = useState<any>();
    const [periodMarking, setPeriodMarking] = useState<any[]>([]);
    const isMarkingTypePeriod = markingType === 'period'

    const generateDateList = (startDateStr: string, endDateStr: string) => {
        const startDate = parseISO(startDateStr);
        const endDate = parseISO(endDateStr);
        const dates: any[] = [];
        let currentDate = startDate;

        while (isBefore(currentDate, endDate)) {
            dates.push(format(currentDate, 'yyyy-MM-dd'));
            currentDate = addDays(currentDate, 1);
        }

        dates.push(format(endDate, 'yyyy-MM-dd'));
        return dates;
    };

    const _getMinDate = () => {
        if (isMarkingTypePeriod && !!periodMarking[0]) {
            return periodMarking[0];
        }
        return minDate
    }

    useEffect(() => {
        if (isMarkingTypePeriod) {

            if(!periodMarking || periodMarking?.length === 0){
                setMarkedDatesState([])
            }

            if(periodMarking?.[0]){
                setMarkedDatesState({
                    [periodMarking[0]]:{
                        color: colors.primaryColor,
                        startingDay: true,
                        textColor: colors.offWhite,
                    }
                })
            }

            if (periodMarking.length === 2) {
                const periodDateList = generateDateList(periodMarking[0], periodMarking[1])
                const res: any = {}

                for (let date of periodDateList) {
                    res[date] = {
                        color: colors.primaryColor,
                        startingDay: periodDateList.indexOf(date) === 0,
                        endingDay: periodDateList.indexOf(date) === periodDateList.length - 1,
                        textColor: colors.offWhite,
                    }
                }
                setMarkedDatesState(res)
            }

        }

    }, [periodMarking, isMarkingTypePeriod])


    const _onDayPress = (day: DateData) => {
        if (isMarkingTypePeriod) {
            const responsePeriodDates:any = {}

            if (!periodMarking[0]) {
                setPeriodMarking([day.dateString]);
                responsePeriodDates.startingDay = day.dateString
            } else {
                setPeriodMarking([periodMarking?.[0], day.dateString]);
                responsePeriodDates.startingDay = periodMarking?.[0]
                responsePeriodDates.endingDay = day.dateString
            }

            if (periodMarking?.[0] === day.dateString) {
                setPeriodMarking([]);
            }
            onChange?.(responsePeriodDates)

        } else {
            setSelected(day.dateString);
            onChange?.(day.dateString)
        }
    }

    return (
        <Calendar
            onDayPress={_onDayPress}
            initialDate={new Date().toDateString()}
            allowSelectionOutOfRange={false}
            hideExtraDays

            {...restProps}
            minDate={_getMinDate()}
            markedDates={{
                [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedColor: colors.primaryColor
                },
                ...markedDatesState,
                ...markedDates
            }}
            markingType={markingType}
            style={[styles.calendarStyles, style]}
        />
    );
};

const styles = StyleSheet.create({
    calendarStyles: {}
});

export default ASCalendar;
