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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const slider_1 = __importDefault(require("@react-native-community/slider"));
const formik_1 = require("formik");
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const ASSlider = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { minimumValue, maximumValue, step = 1, name, onChange } = props, restProps = __rest(props, ["minimumValue", "maximumValue", "step", "name", "onChange"]);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const sliderValue = parseFloat(field === null || field === void 0 ? void 0 : field.value);
    const _onValueChange = (value) => {
        setValue === null || setValue === void 0 ? void 0 : setValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(slider_1.default, Object.assign({ style: styles.slider, value: sliderValue, minimumValue: minimumValue, maximumValue: maximumValue, step: step, thumbTintColor: colors.primary, minimumTrackTintColor: colors.primary, maximumTrackTintColor: colors.onTertiary }, restProps, { onValueChange: _onValueChange })),
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
