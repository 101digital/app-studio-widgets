import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { screenWidth } from "../../utils/commonUtils";
var ASCircleChart = function (props) {
    var _a = props.progress, progress = _a === void 0 ? 0 : _a, color = props.color, _b = props.diameter, diameter = _b === void 0 ? screenWidth / 1.5 : _b, children = props.children, secondaryColor = props.secondaryColor, _c = props.inActiveStrokeOpacity, inActiveStrokeOpacity = _c === void 0 ? 1 : _c, _d = props.circleStrokeWidth, circleStrokeWidth = _d === void 0 ? 12 : _d;
    if (progress < 0 || progress > 100) {
        console.error('progress value must be between 0 and 100');
    }
    if (inActiveStrokeOpacity < 0 || inActiveStrokeOpacity > 1) {
        console.error('inActiveStrokeOpacity value must be between 0 and 1');
    }
    var strokeLinecap = 'round';
    var radius = diameter / 2;
    var viewBox = radius + circleStrokeWidth;
    var circleCircumference = 2 * Math.PI * radius;
    var strokeColor = color || '#4F4F4F';
    var activeStrokeSizePercentage = (circleCircumference * (100 - progress)) / 100;
    return (React.createElement(View, { style: styles.container },
        React.createElement(Svg, { width: diameter, height: diameter, viewBox: "0 0 ".concat(viewBox * 2, " ").concat(viewBox * 2) },
            React.createElement(G, { rotation: '-90', origin: "".concat(viewBox, ", ").concat(viewBox) },
                React.createElement(Circle, { cx: "50%", cy: "50%", stroke: secondaryColor || strokeColor, opacity: inActiveStrokeOpacity, strokeWidth: circleStrokeWidth, r: radius, fill: "rgba(0,0,0,0)" }),
                React.createElement(Circle, { cx: "50%", cy: "50%", strokeWidth: circleStrokeWidth, stroke: strokeColor, r: radius, strokeDasharray: circleCircumference, strokeDashoffset: activeStrokeSizePercentage, strokeLinecap: strokeLinecap, fill: "rgba(0,0,0,0)" }))),
        React.createElement(View, { style: [StyleSheet.absoluteFillObject, styles.valueContainer] }, children)));
};
var styles = StyleSheet.create({
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
export default ASCircleChart;
