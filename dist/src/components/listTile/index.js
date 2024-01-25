import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from "../../utils/colors";
var ASListTile = function (props) {
    var title = props.title, subtitle = props.subtitle, leadingIcon = props.leadingIcon, trailingIcon = props.trailingIcon, onPress = props.onPress;
    return (React.createElement(TouchableOpacity, { onPress: onPress },
        React.createElement(View, { style: styles.container },
            leadingIcon && React.createElement(View, { style: styles.leadingIcon }, leadingIcon),
            React.createElement(View, { style: styles.textContainer },
                React.createElement(Text, { style: styles.title }, title),
                subtitle && React.createElement(Text, { style: styles.subtitle }, subtitle)),
            trailingIcon && React.createElement(View, { style: styles.trailingIcon }, trailingIcon))));
};
export default ASListTile;
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray80,
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
