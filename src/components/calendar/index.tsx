import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar, CalendarProps, DateData} from 'react-native-calendars';
import {addDays, format, isBefore, parseISO} from "date-fns";

export type  ASCalendarProps = CalendarProps & {}

const ASCalendar: React.FC<ASCalendarProps> = (props: ASCalendarProps) => {
    const {
        style,
        markedDates,
        markingType,
        minDate,
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
            if (periodMarking.length === 2) {
                const periodDateList = generateDateList(periodMarking[0], periodMarking[1])


                const res: any = {}


                for (let date of periodDateList) {
                    res[date] = {
                        // selected: true,
                        // disableTouchEvent: true,
                        // selectedDotColor: 'orange',
                        selectedColor: 'blue',
                        color: 'blue',
                        startingDay: periodDateList.indexOf(date) === 0,
                        endingDay: periodDateList.indexOf(date) === periodDateList.length - 1
                    }
                }

                setMarkedDatesState(res)
                console.log('iausdhfdsf-generateDateList', res)

            }
        }

    }, [periodMarking, isMarkingTypePeriod])

    const _onDayPress = (day: DateData) => {
        if (isMarkingTypePeriod) {
            let _periodMarkingTemp = periodMarking

            if (!periodMarking[0]) {
                setPeriodMarking([day.dateString]);
            } else {

                setPeriodMarking([periodMarking[0], day.dateString]);
            }

            if (periodMarking[0] === day.dateString) {
                setPeriodMarking([]);
            }
        } else {
            setSelected(day.dateString);
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
                    selectedDotColor: 'orange',
                    selectedColor: 'green'
                },
                ...markedDatesState,
                ...markedDates
            }}
            style={[styles.calendarStyles, style]}
        />
    );
};

const styles = StyleSheet.create({
    calendarStyles: {}
});

export default ASCalendar;
