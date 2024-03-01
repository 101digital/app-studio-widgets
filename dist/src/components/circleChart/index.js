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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_svg_1 = __importStar(require("react-native-svg"));
const commonUtils_1 = require("../../utils/commonUtils");
const ASCircleChart = (props) => {
    const { progress = 0, color, diameter = commonUtils_1.screenWidth / 1.5, children, secondaryColor, inActiveStrokeOpacity = 1, circleStrokeWidth = 12 } = props;
    if (progress < 0 || progress > 100) {
        console.error('progress value must be between 0 and 100');
    }
    if (inActiveStrokeOpacity < 0 || inActiveStrokeOpacity > 1) {
        console.error('inActiveStrokeOpacity value must be between 0 and 1');
    }
    const strokeLinecap = 'round';
    const radius = diameter / 2;
    const viewBox = radius + circleStrokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    const strokeColor = color || '#4F4F4F';
    const activeStrokeSizePercentage = (circleCircumference * (100 - progress)) / 100;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_svg_1.default, { width: diameter, height: diameter, viewBox: `0 0 ${viewBox * 2} ${viewBox * 2}` },
            react_1.default.createElement(react_native_svg_1.G, { rotation: '-90', origin: `${viewBox}, ${viewBox}` },
                react_1.default.createElement(react_native_svg_1.Circle, { cx: "50%", cy: "50%", stroke: secondaryColor || strokeColor, opacity: inActiveStrokeOpacity, strokeWidth: circleStrokeWidth, r: radius, fill: "rgba(0,0,0,0)" }),
                react_1.default.createElement(react_native_svg_1.Circle, { cx: "50%", cy: "50%", strokeWidth: circleStrokeWidth, stroke: strokeColor, r: radius, strokeDasharray: circleCircumference, strokeDashoffset: activeStrokeSizePercentage, strokeLinecap: strokeLinecap, fill: "rgba(0,0,0,0)" }))),
        react_1.default.createElement(react_native_1.View, { style: [react_native_1.StyleSheet.absoluteFillObject, styles.valueContainer] }, children)));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    valueContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
exports.default = ASCircleChart;
