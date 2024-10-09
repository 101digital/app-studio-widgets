import React, { ReactNode, useRef, useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, ImageSourcePropType } from 'react-native';
import ASImage from '../image';

export type ASColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    backgroundImage?: any;
    accessibilityLabel?: string;
    spacing?: number;
};

const ASColumn: React.FC<ASColumnProps> = (props: ASColumnProps) => {
    const { children, style, backgroundImage, accessibilityLabel, spacing = 0 } = props;

    const childrenArray = React.Children.toArray(children);
    const [containerHeight, setContainerHeight] = useState(0); // State to hold container height

    return (
        <View
            style={[styles.container, style]}
            accessibilityLabel={accessibilityLabel}
            onLayout={(event) => {
                const { height } = event.nativeEvent.layout; // Get height after layout
                setContainerHeight(height); // Update state with the container height
            }}
        >
            {backgroundImage && (
                <ASImage
                    source={backgroundImage}
                    style={[styles.backgroundStyle, { height: containerHeight }]}
                    resizeMode="stretch" // Ensure image covers the entire area
                />
            )}
            {spacing && Array.isArray(children) ? children.map((child: any, index: number) => {
                return (
                    <View style={{
                        marginBottom: children.length - 1 === index ? 0 : spacing,
                        ...(child.props?.style?.flex !== undefined && child.props?.style?.flex !== 0 && { flex: child.props.style.flex } ),
                    }}>
                        {child}
                    </View>
                )
            }) : children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    backgroundStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%', // Fill the entire width of the parent
        zIndex: -1, // Ensure the background image is behind other elements
    },
});

export default ASColumn;
