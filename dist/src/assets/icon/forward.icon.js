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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardIcon = void 0;
const react_1 = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const theme_context_1 = require("../../context/theme-context");
const ForwardIcon = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { size = 26, color = colors.primary } = props;
    return (react_1.default.createElement(react_native_svg_1.default, { width: size, height: size, viewBox: `0 0 ${size} ${size}`, fill: "none" },
        react_1.default.createElement(react_native_svg_1.Path, { d: "M14.7827 5L21.4998 12L14.7827 19", stroke: "#231F20", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react_1.default.createElement(react_native_svg_1.Line, { x1: "20.2329", y1: "12.0317", x2: "4.49985", y2: "12.0317", stroke: "#231F20", "stroke-width": "2", "stroke-linecap": "round" })));
};
exports.ForwardIcon = ForwardIcon;
