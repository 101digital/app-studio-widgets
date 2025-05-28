"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ASAppHeader = ({ styles: customStyles = {}, backButton, headerTitle, actions = [], }) => {
    const renderIcon = (icon, size = 24, color = '#000') => {
        if (typeof icon === 'string') {
            return (react_1.default.createElement(react_native_1.Image, { source: { uri: icon }, style: { width: size, height: size, tintColor: color } }));
        }
        return icon;
    };
    const renderActions = (alignment) => actions
        .filter((action) => action.alignment === alignment)
        .map((action, idx) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: `${alignment}-${idx}`, onPress: action.onPress, style: stylesObj.actionButton }, renderIcon(action.icon, action.iconSize))));
    const renderBackButton = () => {
        if (!(backButton === null || backButton === void 0 ? void 0 : backButton.isEnabled))
            return null;
        const btn = (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: backButton.onPress, style: stylesObj.backButton }, renderIcon(backButton.icon, backButton.size, backButton.color)));
        if (backButton.isLargerBackButton) {
            return react_1.default.createElement(react_native_1.View, { style: stylesObj.fullRowBack }, btn);
        }
        return btn;
    };
    const getTitleContainerStyle = () => {
        const alignment = headerTitle.alignment || 'center';
        if (alignment === 'center') {
            return {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: -1,
                pointerEvents: 'none',
                paddingHorizontal: 8,
            };
        }
        return {
            flex: 1,
            justifyContent: 'center',
            alignItems: alignment === 'left' ? 'flex-start' : 'flex-end',
            paddingHorizontal: 8,
        };
    };
    const getTitleTextAlign = () => {
        switch (headerTitle.alignment) {
            case 'left':
                return 'left';
            case 'right':
                return 'right';
            case 'center':
            default:
                return 'center';
        }
    };
    return (react_1.default.createElement(react_native_1.View, { style: customStyles },
        (backButton === null || backButton === void 0 ? void 0 : backButton.isEnabled) && backButton.isLargerBackButton && renderBackButton(),
        react_1.default.createElement(react_native_1.View, { style: stylesObj.headerContainer },
            react_1.default.createElement(react_native_1.View, { style: stylesObj.leftContainer },
                !(backButton === null || backButton === void 0 ? void 0 : backButton.isLargerBackButton) && renderBackButton(),
                renderActions('left')),
            react_1.default.createElement(react_native_1.View, { style: getTitleContainerStyle() },
                react_1.default.createElement(react_native_1.Text, { style: [
                        stylesObj.titleText,
                        headerTitle.textStyles,
                        { textAlign: getTitleTextAlign() },
                    ], numberOfLines: 1 }, headerTitle.title)),
            react_1.default.createElement(react_native_1.View, { style: stylesObj.rightContainer }, renderActions('right')))));
};
const stylesObj = react_native_1.StyleSheet.create({
    headerContainer: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    backButton: {
        marginRight: 8,
    },
    fullRowBack: {
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    actionButton: {
        marginHorizontal: 6,
    },
});
exports.default = ASAppHeader;
