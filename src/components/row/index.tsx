import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

export type ASRowProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
    spacing?: number
    testId?: string
}

const ASRow: React.FC<ASRowProps> = (props: ASRowProps) => {
    const {children, style, accessibilityLabel, spacing, testId = 'ASRow', ...restProps} = props || {}

    return (
        <View testID={testId} style={[styles.container, style]} accessibilityLabel={accessibilityLabel} {...restProps}>
            {spacing && Array.isArray(children) ? children.map((child: any, index: number) => {
                const isLastChild = children.length - 1 === index;
                const marginRightStyle = { marginRight: isLastChild ? 0 : spacing };
                // Clone the child with updated marginRight style
                return React.cloneElement(child, {
                    ...(child.props.containerStyle
                            ? { containerStyle: [StyleSheet.flatten(child?.props?.containerStyle), marginRightStyle] }
                            : { style: [StyleSheet.flatten(child?.props?.style), marginRightStyle] }
                    ),
                    key: `row-${child.name}-${index}`
                })
            }) : children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ASRow

// Note: ASRow Example
/*
                <ASRow>
                    <ASText style={{textAlign: 'center'}}>Welcome to App Studio</ASText>
                    <ASVerticalDivider/>
                    <ASText style={{color: 'red'}}>Testing component</ASText>
                </ASRow>
* */
