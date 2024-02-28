"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const ASListTile = (props) => {
    const { title, subtitle, leadingIcon, trailingIcon, onPress, } = props;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress },
        react_1.default.createElement(react_native_1.View, { style: styles.container },
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
        borderBottomColor: colors_1.colors.gray80,
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
