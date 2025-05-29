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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const theme_context_1 = require("../../context/theme-context");
const ASText = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const _g = props || {}, { children, labelType, label, testId = 'ASText' } = _g, restProps = __rest(_g, ["children", "labelType", "label", "testId"]);
    let labelValue = labelType === 'number' ? (children !== null && children !== void 0 ? children : label) : (children || label);
    const style = react_native_1.StyleSheet.flatten(props === null || props === void 0 ? void 0 : props.style);
    //TODO: Remove this temeraly code and defnine this in DB
    if (labelType === 'number' && (typeof labelValue === "string" || typeof labelValue === "number")) {
        //Format number 1234 -> 1,234.00
        labelValue = parseFloat((_a = labelValue === null || labelValue === void 0 ? void 0 : labelValue.toString()) === null || _a === void 0 ? void 0 : _a.replace(',', '')).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    else if (labelType === 'datetime' && typeof labelValue === "number") {
        // Format date from timestamp
        const date = new Date(labelValue);
        // Define options for formatting
        const options = {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        };
        const dateFormatter = new Intl.DateTimeFormat('en-US', options);
        const parts = dateFormatter.formatToParts(date);
        // Construct the desired format from parts
        labelValue = `${(_b = parts === null || parts === void 0 ? void 0 : parts.find((part) => part.type === 'weekday')) === null || _b === void 0 ? void 0 : _b.value}, `
            + `${(_c = parts === null || parts === void 0 ? void 0 : parts.find((part) => part.type === 'day')) === null || _c === void 0 ? void 0 : _c.value} `
            + `${(_d = parts === null || parts === void 0 ? void 0 : parts.find((part) => part.type === 'month')) === null || _d === void 0 ? void 0 : _d.value} `
            + `${(_e = parts === null || parts === void 0 ? void 0 : parts.find((part) => part.type === 'year')) === null || _e === void 0 ? void 0 : _e.value}`;
    }
    else if (labelType === 'e6ExpiryDate' && labelValue) {
        // TODO: Remove this logic only for E6
        labelValue = `${labelValue === null || labelValue === void 0 ? void 0 : labelValue.toString().slice(4)}/${labelValue === null || labelValue === void 0 ? void 0 : labelValue.toString().slice(0, 4)}`;
    }
    else if (labelType === 'card-number' && labelValue && (typeof labelValue === 'string' || typeof labelValue === 'number')) {
        let cardNumberString = labelValue === null || labelValue === void 0 ? void 0 : labelValue.toString();
        cardNumberString = (_f = cardNumberString === null || cardNumberString === void 0 ? void 0 : cardNumberString.toString()) === null || _f === void 0 ? void 0 : _f.replace(/\D/g, '');
        labelValue = cardNumberString === null || cardNumberString === void 0 ? void 0 : cardNumberString.replace(/(.{4})/g, '$1 ').trim();
    }
    else {
        labelValue = `${labelValue === null || labelValue === void 0 ? void 0 : labelValue.toString()}`;
    }
    const getTextColor = () => {
        let color = colors.primaryFixed;
        // TODO: REMOVE THIS LOGIC LATER
        if (labelType === "number") {
            if (typeof children === 'number') {
                if (children >= 0) {
                    color = '#29ce0e';
                }
                else {
                    color = '#D22424';
                }
            }
        }
        if (style === null || style === void 0 ? void 0 : style.color) {
            color = style === null || style === void 0 ? void 0 : style.color;
        }
        return { color };
    };
    if (labelValue == null || labelValue === "undefined" || labelValue === "null" || labelValue === undefined) {
        return null;
    }
    return (react_1.default.createElement(react_native_1.Text, Object.assign({ testID: testId }, restProps, { style: [styles.textStyle, style, getTextColor()] }), labelValue));
};
const styles = react_native_1.StyleSheet.create({
    textStyle: {
        fontSize: 14,
    },
});
exports.default = ASText;
