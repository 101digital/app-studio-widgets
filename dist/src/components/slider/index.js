"use strict";
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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const slider_1 = __importDefault(require("@react-native-community/slider"));
const formik_1 = require("formik");
const colors_1 = require("../../utils/colors");
const text_1 = __importDefault(require("../text"));
const ASSlider = (props) => {
    const { minimumValue, maximumValue, step = 1, name, onChange } = props, restProps = __rest(props, ["minimumValue", "maximumValue", "step", "name", "onChange"]);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const sliderValue = parseFloat(field === null || field === void 0 ? void 0 : field.value);
    const _onValueChange = (value) => {
        setValue === null || setValue === void 0 ? void 0 : setValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(slider_1.default, Object.assign({ style: styles.slider, value: sliderValue, minimumValue: minimumValue, maximumValue: maximumValue, step: step, thumbTintColor: colors_1.colors.primaryColor, minimumTrackTintColor: colors_1.colors.primaryColor, maximumTrackTintColor: colors_1.colors.gray400 }, restProps, { onValueChange: _onValueChange })),
        !!sliderValue && react_1.default.createElement(text_1.default, { style: styles.valueText }, sliderValue)));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    slider: {
        width: '100%',
    },
    valueText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    },
});
exports.default = ASSlider;
/*
    <ASSlider  name={'age'} minimumValue={1} maximumValue={99} />
* */
