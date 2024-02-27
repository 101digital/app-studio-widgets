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
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { addDays, format, isBefore, parseISO } from "date-fns";
import { colors } from "../../utils/colors";
const ASCalendar = (props) => {
    const { style, markedDates, markingType, minDate, onChange } = props, restProps = __rest(props, ["style", "markedDates", "markingType", "minDate", "onChange"]);
    const [selected, setSelected] = useState('');
    const [markedDatesState, setMarkedDatesState] = useState();
    const [periodMarking, setPeriodMarking] = useState([]);
    const isMarkingTypePeriod = markingType === 'period';
    const generateDateList = (startDateStr, endDateStr) => {
        const startDate = parseISO(startDateStr);
        const endDate = parseISO(endDateStr);
        const dates = [];
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
        return minDate;
    };
    useEffect(() => {
        if (isMarkingTypePeriod) {
            if (!periodMarking || (periodMarking === null || periodMarking === void 0 ? void 0 : periodMarking.length) === 0) {
                setMarkedDatesState([]);
            }
            if (periodMarking === null || periodMarking === void 0 ? void 0 : periodMarking[0]) {
                setMarkedDatesState({
                    [periodMarking[0]]: {
                        color: colors.primaryColor,
                        startingDay: true,
                        textColor: colors.offWhite,
                    }
                });
            }
            if (periodMarking.length === 2) {
                const periodDateList = generateDateList(periodMarking[0], periodMarking[1]);
                const res = {};
                for (let date of periodDateList) {
                    res[date] = {
                        color: colors.primaryColor,
                        startingDay: periodDateList.indexOf(date) === 0,
                        endingDay: periodDateList.indexOf(date) === periodDateList.length - 1,
                        textColor: colors.offWhite,
                    };
                }
                setMarkedDatesState(res);
            }
        }
    }, [periodMarking, isMarkingTypePeriod]);
    const _onDayPress = (day) => {
        if (isMarkingTypePeriod) {
            const responsePeriodDates = {};
            if (!periodMarking[0]) {
                setPeriodMarking([day.dateString]);
                responsePeriodDates.startingDay = day.dateString;
            }
            else {
                setPeriodMarking([periodMarking === null || periodMarking === void 0 ? void 0 : periodMarking[0], day.dateString]);
                responsePeriodDates.startingDay = periodMarking === null || periodMarking === void 0 ? void 0 : periodMarking[0];
                responsePeriodDates.endingDay = day.dateString;
            }
            if ((periodMarking === null || periodMarking === void 0 ? void 0 : periodMarking[0]) === day.dateString) {
                setPeriodMarking([]);
            }
            onChange === null || onChange === void 0 ? void 0 : onChange(responsePeriodDates);
        }
        else {
            setSelected(day.dateString);
            onChange === null || onChange === void 0 ? void 0 : onChange(day.dateString);
        }
    };
    return (React.createElement(Calendar, Object.assign({ onDayPress: _onDayPress, initialDate: new Date().toDateString(), allowSelectionOutOfRange: false, hideExtraDays: true }, restProps, { minDate: _getMinDate(), markedDates: Object.assign(Object.assign({ [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: colors.primaryColor
            } }, markedDatesState), markedDates), markingType: markingType, style: [styles.calendarStyles, style] })));
};
const styles = StyleSheet.create({
    calendarStyles: {}
});
export default ASCalendar;
