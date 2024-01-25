import React from 'react';
import { StyleSheet, View } from 'react-native';
import ASText from "../text";
var ASBadge = function (props) {
    var children = props.children, badgeNumber = props.badgeNumber, badgeStyles = props.badgeStyles, badgeTextStyle = props.badgeTextStyle, containerStyle = props.containerStyle;
    return (React.createElement(View, { style: [styles.container, containerStyle] },
        React.createElement(View, null,
            children,
            !!badgeNumber && React.createElement(View, { style: [styles.badgeStyles, badgeStyles] },
                React.createElement(ASText, { style: [styles.badgeTextStyle, badgeTextStyle] }, badgeNumber)))));
};
var styles = StyleSheet.create({
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
export default ASBadge;
// Note: ASBadge example
/*
                <ASBadge badgeNumber={3}>
                    <ASRow>
                        <ASText>Badge</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primaryIconColor"/>
                    </ASRow>
                </ASBadge>
* */
