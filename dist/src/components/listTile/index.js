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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const theme_context_1 = require("../../context/theme-context");
const ASListTile = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { title, subtitle, leadingIcon, trailingIcon, onPress, } = props;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress },
        react_1.default.createElement(react_native_1.View, { style: [styles.container, { borderBottomColor: colors.onSecondary }] },
            leadingIcon && react_1.default.createElement(react_native_1.View, { style: styles.leadingIcon }, leadingIcon),
            react_1.default.createElement(react_native_1.View, { style: styles.textContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.title }, title),
                subtitle && react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, subtitle)),
            trailingIcon && react_1.default.createElement(react_native_1.View, { style: styles.trailingIcon }, trailingIcon))));
};
exports.default = ASListTile;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
    },
    leadingIcon: {
        marginRight: 16,
    },
    trailingIcon: {
        marginLeft: 16,
    },
});
/*

                        <ASListTile title={item?.label} subtitle={item?.id}
                            leadingIcon={
                                <Icon name="user-circle-o"
                                      size={30}
                                      color="theme.colors.primaryIconColor"/>
                            }
                            trailingIcon={<Icon name="gear" size={30} color="theme.colors.primaryIconColor"/>}


                          <ASListView data={[{id: '1', label: 'Item 1'},
                        {id: '2', label: 'Item 2'},
                        {id: '3', label: 'Item 3'},]} renderItem={({item}) => (
                        <ASListTile title={item?.label} subtitle={item?.id}
                                    leadingIcon={
                                        <Icon name="user-circle-o"
                                              size={30}
                                              color="theme.colors.primaryIconColor"/>
                                    }
                                    trailingIcon={<Icon name="gear" size={30} color="theme.colors.primaryIconColor"/>}
                            />
                        )}/>
* */
