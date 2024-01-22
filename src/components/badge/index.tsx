import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import ASText from "../text";

export type ASBadgeProps = {
    children: React.ReactNode
    badgeNumber: number | string | null | undefined
    badgeStyles?: StyleProp<ViewStyle>
    badgeTextStyle?: StyleProp<TextStyle>
    containerStyle?: StyleProp<ViewStyle>
}

const ASBadge: React.FC<ASBadgeProps> = (props: ASBadgeProps) => {
    const {
        children,
        badgeNumber,
        badgeStyles,
        badgeTextStyle,
        containerStyle
    } = props

    return (
        <View style={[styles.container,containerStyle]}>
            <View>
                {children}
                {!!badgeNumber && <View style={[styles.badgeStyles, badgeStyles]}>
                    <ASText style={[styles.badgeTextStyle, badgeTextStyle]}>{badgeNumber}</ASText>
                </View>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
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
})

export default ASBadge

// Note: ASBadge example
/*
                <ASBadge badgeNumber={3}>
                    <ASRow>
                        <ASText>Badge</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primaryIconColor"/>
                    </ASRow>
                </ASBadge>
* */
