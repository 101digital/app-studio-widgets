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
const image_1 = __importDefault(require("../image"));
const button_1 = __importDefault(require("../button"));
const VERTICAL_POSITION = 40;
const HORIZONTAL_POSITION = 20;
const ASFloatingActionButton = (props) => {
    const { colors, } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { style, label, textStyle, icon, onPress, position = 'bottom-right' } = props;
    const [floatingButtonPosition, setFloatingButtonPosition] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        calculatePosition();
        return () => {
        };
    }, [position]);
    const calculatePosition = () => {
        const [verticalPosition, horizontalPosition] = position === null || position === void 0 ? void 0 : position.split('-');
        let vPosition = {};
        let hPosition = {};
        switch (verticalPosition) {
            case 'top':
            case 'bottom':
                vPosition = { [verticalPosition]: VERTICAL_POSITION };
                break;
            case 'center':
                vPosition = { top: '50%', transform: [{ translateY: -50 }] };
                break;
        }
        switch (horizontalPosition) {
            case 'left':
            case 'right':
                hPosition = { [horizontalPosition]: HORIZONTAL_POSITION };
                break;
            case 'center':
                hPosition = { alignSelf: 'center' };
                break;
        }
        setFloatingButtonPosition(Object.assign(Object.assign({}, vPosition), hPosition));
    };
    if (!floatingButtonPosition || (!icon && !label))
        return null;
    return (react_1.default.createElement(button_1.default, { style: [styles.container, Object.assign({}, floatingButtonPosition), Object.assign({ backgroundColor: (colors === null || colors === void 0 ? void 0 : colors.primary) || '#fff' }, (label && { flexDirection: 'row', aspectRatio: undefined })), style], onPress: onPress },
        icon && typeof icon === 'string' ?
            react_1.default.createElement(image_1.default, { style: { width: 18, height: 18, marginRight: !!label ? 8 : 0 }, source: icon })
            : icon,
        !!label && react_1.default.createElement(text_1.default, { style: [styles.textStyle, textStyle] }, label)));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        aspectRatio: 1,
        alignSelf: 'flex-start',
        position: 'absolute',
    },
    textStyle: {
        fontWeight: '600'
    }
});
exports.default = (0, react_1.memo)(ASFloatingActionButton);
