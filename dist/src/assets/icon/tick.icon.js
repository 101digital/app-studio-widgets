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
exports.TickIcon = void 0;
const React = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const colors_1 = require("../../utils/colors");
const TickIcon = ({ size = 24, color = colors_1.colors.primary }) => (
// @ts-ignore
React.createElement(react_native_svg_1.default, { width: size, height: size, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement(react_native_svg_1.Path, { d: "M3.25 10.625L8.65 15.625L16.75 4.375", stroke: color, "stroke-width": "5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
exports.TickIcon = TickIcon;
