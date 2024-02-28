"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const formik_1 = require("formik");
const text_1 = __importDefault(require("../text"));
const colors_1 = require("../../utils/colors");
const icon_1 = require("../../assets/icon");
const row_1 = __importDefault(require("../row"));
const ASRadioButton = (props) => {
    const { options = [], name, radioButtonStyle, innerCircleStyle, color = colors_1.colors.primaryColor, labelStyle, type = 'default' } = props;
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const _onPressRadioButton = (item) => () => {
        setValue === null || setValue === void 0 ? void 0 : setValue(item === null || item === void 0 ? void 0 : item.value);
    };
    const defaultRadioButtonType = (item) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.View, { style: [styles.radioButton, radioButtonStyle, { borderColor: color }] }, (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) &&
                react_1.default.createElement(react_native_1.View, { style: [styles.innerCircle, innerCircleStyle, { backgroundColor: color }] })),
            react_1.default.createElement(text_1.default, { style: [styles.label, labelStyle] }, item === null || item === void 0 ? void 0 : item.label)));
    };
    const tickRadioButtonType = (item) => {
        return (react_1.default.createElement(row_1.default, { style: styles.tickRadioBtn },
            react_1.default.createElement(text_1.default, { style: [styles.ticklabel, labelStyle] }, item === null || item === void 0 ? void 0 : item.label),
            react_1.default.createElement(icon_1.TickIcon, { size: 24, color: (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) ? color : 'transparent' })));
    };
    const renderRadioButtonType = (item) => {
        switch (type) {
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
    return (react_1.default.createElement(react_1.default.Fragment, null, options === null || options === void 0 ? void 0 : options.map(mapRadioButton)));
};
exports.default = ASRadioButton;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
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
        backgroundColor: colors_1.colors.offWhite2,
        padding: 18,
        borderRadius: 5,
        alignItems: 'center'
    }
});
/*
         <ASRadioButton name={'gender'}
                        options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}/>
* */
