"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const commonUtils_1 = require("../../utils/commonUtils");
const colors_1 = require("../../utils/colors");
const text_1 = __importDefault(require("../text"));
const ASProgressBar = (props) => {
    const { progressBarTitle = '', progressValue, progressCurrentStyle, progressTitleStyle, progressBarStyle, activeColor, inActiveColor } = props;
    return (react_1.default.createElement(react_native_1.View, { style: styles.progressBarContainer },
        !!progressBarTitle &&
            react_1.default.createElement(text_1.default, { style: [styles.progressBarText, progressTitleStyle] }, progressBarTitle),
        react_1.default.createElement(react_native_1.View, { style: [styles.progressBar, progressBarStyle, { backgroundColor: inActiveColor }] },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.progressCurrent,
                    { width: `${progressValue / 100 * 100}%` },
                    progressCurrentStyle,
                    { backgroundColor: activeColor }
                ] }))));
};
const styles = react_native_1.StyleSheet.create({
    progressBarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBarText: {
        fontSize: 16,
        paddingBottom: 4,
        fontWeight: '600',
        lineHeight: 20
    },
    progressBar: {
        backgroundColor: colors_1.colors.offWhite,
        height: 5,
        borderRadius: 16,
        width: commonUtils_1.screenWidth / 1.8,
        minWidth: 180,
        marginTop: 5
    },
    progressCurrent: {
        backgroundColor: '#00BA88',
        height: 5,
        borderRadius: 16,
    },
    progressSection: {
        marginBottom: 16,
    },
});
exports.default = ASProgressBar;
