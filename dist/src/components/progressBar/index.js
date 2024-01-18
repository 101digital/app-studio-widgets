"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var commonUtils_1 = require("../../utils/commonUtils");
var colors_1 = require("../../utils/colors");
var text_1 = __importDefault(require("../text"));
var ASProgressBar = function (props) {
    var _a = props.progressBarTitle, progressBarTitle = _a === void 0 ? '' : _a, progressValue = props.progressValue;
    return (react_1.default.createElement(react_native_1.View, { style: styles.progressBarContainer },
        react_1.default.createElement(text_1.default, { style: styles.progressBarText }, progressBarTitle),
        react_1.default.createElement(react_native_1.View, { style: styles.progressBar },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.progressCurrent,
                    { width: "".concat(progressValue / 100 * 100, "%") },
                ] }))));
};
var styles = react_native_1.StyleSheet.create({
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
