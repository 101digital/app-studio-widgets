"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_calendars_1 = require("react-native-calendars");
const date_fns_1 = require("date-fns");
const theme_context_1 = require("../../context/theme-context");
const ASCalendar = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { style, markedDates, markingType, minDate, onChange } = props, restProps = __rest(props, ["style", "markedDates", "markingType", "minDate", "onChange"]);
    const [selected, setSelected] = (0, react_1.useState)('');
    const [markedDatesState, setMarkedDatesState] = (0, react_1.useState)();
    const [periodMarking, setPeriodMarking] = (0, react_1.useState)([]);
    const isMarkingTypePeriod = markingType === 'period';
    const generateDateList = (startDateStr, endDateStr) => {
        const startDate = (0, date_fns_1.parseISO)(startDateStr);
        const endDate = (0, date_fns_1.parseISO)(endDateStr);
        const dates = [];
        let currentDate = startDate;
        while ((0, date_fns_1.isBefore)(currentDate, endDate)) {
            dates.push((0, date_fns_1.format)(currentDate, 'yyyy-MM-dd'));
            currentDate = (0, date_fns_1.addDays)(currentDate, 1);
        }
        dates.push((0, date_fns_1.format)(endDate, 'yyyy-MM-dd'));
        return dates;
    };
    const _getMinDate = () => {
        if (isMarkingTypePeriod && !!periodMarking[0]) {
            return periodMarking[0];
        }
        return minDate;
    };
    (0, react_1.useEffect)(() => {
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
    return (react_1.default.createElement(react_native_calendars_1.Calendar, Object.assign({ onDayPress: _onDayPress, initialDate: new Date().toDateString(), allowSelectionOutOfRange: false, hideExtraDays: true }, restProps, { minDate: _getMinDate(), markedDates: Object.assign(Object.assign({ [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: colors.primaryColor
            } }, markedDatesState), markedDates), markingType: markingType, style: [styles.calendarStyles, style] })));
};
const styles = react_native_1.StyleSheet.create({
    calendarStyles: {}
});
exports.default = ASCalendar;
