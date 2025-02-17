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
exports.DeleteIcon = void 0;
const react_1 = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const theme_context_1 = require("../../context/theme-context");
const DeleteIcon = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { size = 26, color = colors.primary } = props;
    return (react_1.default.createElement(react_native_svg_1.default, { width: size, height: size, viewBox: `0 0 ${size} ${size}`, fill: "none" },
        react_1.default.createElement(react_native_svg_1.Path, { d: "M12.5001 9.75L14.7501 12M14.7501 12L17.0001 14.25M14.7501 12L17.0001 9.75M14.7501 12L12.5001 14.25M9.92005 19.17L3.54605 12.795C3.33538 12.5841 3.21704 12.2981 3.21704 12C3.21704 11.7019 3.33538 11.4159 3.54605 11.205L9.92005 4.83C10.1301 4.619 10.4171 4.5 10.7151 4.5H20.0001C20.5968 4.5 21.1691 4.73705 21.591 5.15901C22.013 5.58097 22.2501 6.15326 22.2501 6.75V17.25C22.2501 17.8467 22.013 18.419 21.591 18.841C21.1691 19.2629 20.5968 19.5 20.0001 19.5H10.7161C10.4181 19.5 10.1301 19.381 9.92005 19.17Z", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
exports.DeleteIcon = DeleteIcon;
