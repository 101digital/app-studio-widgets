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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowForwardIcon = void 0;
const React = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const theme_context_1 = require("../../context/theme-context");
const ArrowForwardIcon = (props) => {
    const { colors } = React.useContext(theme_context_1.ThemeContext);
    const { size = 26, color = colors.primary } = props;
    return (React.createElement(react_native_svg_1.default, Object.assign({ width: size, height: 24, fill: color, viewBox: "0 -960 960 960" }, props),
        React.createElement(react_native_svg_1.Path, { d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" })));
};
exports.ArrowForwardIcon = ArrowForwardIcon;
