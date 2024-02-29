import * as React from 'react';
import Svg, { Path, Line } from 'react-native-svg';
import { colors } from "../../utils/colors";
const ForwardIcon = ({ size = 26, color = colors.primaryColor }) => (React.createElement(Svg, { width: size, height: size, viewBox: "0 0 25 24", fill: "none" },
    React.createElement(Path, { d: "M14.7827 5L21.4998 12L14.7827 19", stroke: "#231F20", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    React.createElement(Line, { x1: "20.2329", y1: "12.0317", x2: "4.49985", y2: "12.0317", stroke: "#231F20", "stroke-width": "2", "stroke-linecap": "round" })));
export { ForwardIcon };
