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
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const ASProgressBar = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { progressBarTitle = '', progressValue, progressCurrentStyle, progressTitleStyle, progressBarStyle, activeColor, inActiveColor, style } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.progressBarContainer, react_native_1.StyleSheet.flatten(style)] },
        !!progressBarTitle &&
            react_1.default.createElement(text_1.default, { style: [styles.progressBarText, progressTitleStyle] }, progressBarTitle),
        react_1.default.createElement(react_native_1.View, { style: [styles.progressBar, {
                    backgroundColor: colors.secondaryFixed,
                }, progressBarStyle, { backgroundColor: inActiveColor }] },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.progressCurrent,
                    {
                        width: `${progressValue / 100 * 100}%`,
                        backgroundColor: colors.accent2
                    },
                    progressCurrentStyle,
                    { backgroundColor: activeColor }
                ] }))));
};
const styles = react_native_1.StyleSheet.create({
    progressBarContainer: {
        justifyContent: 'center',
    },
    progressBarText: {
        fontSize: 16,
        paddingBottom: 4,
        fontWeight: '600',
        lineHeight: 20
    },
    progressBar: {
        height: 5,
        borderRadius: 16,
        width: "auto",
        minWidth: 180,
        marginTop: 5
    },
    progressCurrent: {
        height: 5,
        borderRadius: 16,
    },
    progressSection: {
        marginBottom: 16,
    },
});
exports.default = ASProgressBar;
