"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const text_1 = __importDefault(require("../text"));
const ASBadge = (props) => {
    const { children, badgeNumber, badgeStyles, badgeTextStyle, containerStyle } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, containerStyle] },
        react_1.default.createElement(react_native_1.View, null,
            children,
            !!badgeNumber && react_1.default.createElement(react_native_1.View, { style: [styles.badgeStyles, badgeStyles] },
                react_1.default.createElement(text_1.default, { style: [styles.badgeTextStyle, badgeTextStyle] }, badgeNumber)))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    badgeStyles: {
        position: 'absolute',
        top: -15,
        right: -12,
        borderRadius: 30,
        backgroundColor: 'rgb(147,239,129)',
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgb(108,199,91)',
        flex: 0
    },
    badgeTextStyle: {
        fontWeight: 'bold',
        fontSize: 12
    }
});
exports.default = ASBadge;
// Note: ASBadge example
/*
                <ASBadge badgeNumber={3}>
                    <ASRow>
                        <ASText>Badge</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primaryIconColor"/>
                    </ASRow>
                </ASBadge>
* */
