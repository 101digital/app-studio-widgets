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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const formik_1 = require("formik");
const icon_1 = require("../../assets/icon");
const theme_context_1 = require("../../context/theme-context");
const column_1 = __importDefault(require("../column"));
const text_1 = __importDefault(require("../text"));
const row_1 = __importDefault(require("../row"));
const ASRadioButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { options = [], name, radioButtonStyle, innerCircleStyle, color = colors.primary, labelStyle, radioType = 'default', isOverlayEnabled, onChange, inActiveColor = '#C4C4C4', style: flattenStyle, spacing } = props;
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const style = react_native_1.StyleSheet.flatten(flattenStyle);
    const RadioButtonContainer = (style === null || style === void 0 ? void 0 : style.flexDirection) === 'row' ? row_1.default : column_1.default;
    const _onPressRadioButton = (item) => () => {
        setValue === null || setValue === void 0 ? void 0 : setValue(item === null || item === void 0 ? void 0 : item.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(item === null || item === void 0 ? void 0 : item.value);
    };
    const defaultRadioButtonType = (item) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.View, { style: [styles.radioButton, radioButtonStyle, { borderColor: (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) ? color : inActiveColor }] }, (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) &&
                react_1.default.createElement(react_native_1.View, { style: [styles.innerCircle, innerCircleStyle, { backgroundColor: color }] })),
            react_1.default.createElement(text_1.default, { style: [styles.label, labelStyle] }, item === null || item === void 0 ? void 0 : item.label)));
    };
    const tickRadioButtonType = (item) => {
        return (react_1.default.createElement(row_1.default, { style: [styles.tickRadioBtn, { backgroundColor: colors.surfaceVariant }] },
            react_1.default.createElement(text_1.default, { style: [styles.ticklabel, labelStyle] }, item === null || item === void 0 ? void 0 : item.label),
            react_1.default.createElement(icon_1.TickIcon, { size: 24, color: (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) ? color : 'transparent' })));
    };
    const renderRadioButtonType = (item) => {
        switch (radioType) {
            case 'default':
                return defaultRadioButtonType(item);
            case 'tick':
                return tickRadioButtonType(item);
            default:
                return defaultRadioButtonType(item);
        }
    };
    const mapRadioButton = (item, index) => {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: `${index}${item === null || item === void 0 ? void 0 : item.label}`, onPress: _onPressRadioButton(item), style: styles.container }, renderRadioButtonType(item)));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RadioButtonContainer, { style: style, spacing: spacing }, options === null || options === void 0 ? void 0 : options.map(mapRadioButton))));
};
exports.default = ASRadioButton;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 8,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    label: {},
    ticklabel: {
        fontWeight: 'bold',
        fontSize: 16
    },
    tickRadioBtn: {
        justifyContent: 'space-between',
        flex: 1,
        padding: 18,
        borderRadius: 5,
        alignItems: 'center'
    }
});
/*
         <ASRadioButton name={'gender'}
                        options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}/>
* */
