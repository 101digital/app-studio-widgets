import React, {ReactNode, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import ASImage from '../image';
import {normalizeStyle} from "../../utils/commonUtils";

export type ASColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    backgroundImage?: any;
    accessibilityLabel?: string;
    spacing?: number;
};

const ASColumn: React.FC<ASColumnProps> = (props: ASColumnProps) => {
    const {children, style, backgroundImage, accessibilityLabel, spacing = 0} = props;
    const [containerHeight, setContainerHeight] = useState(0); // State to hold container height
    const flexValue = Array.isArray(children) && children.length > 0 ?
        children.reduce((acc: number | undefined, child: any) => {
            if (!child || !child.props || !child.props.style) return acc; // Ensure child and its props exist
            const {flex} = normalizeStyle(child.props.style);
            if (flex !== undefined && flex !== 0) return flex; // Return the first non-zero flex value found
            return acc; // Keep the previous value if none found
        }, undefined) : undefined;

    return (
        <View
            style={[styles.container, {...(flexValue && {flex: flexValue})}, style]}
            accessibilityLabel={accessibilityLabel}
            onLayout={(event) => {
                const {height} = event.nativeEvent.layout; // Get height after layout
                setContainerHeight(height); // Update state with the container height
            }}
        >
            {backgroundImage && (
                <ASImage
                    source={backgroundImage}
                    style={[styles.backgroundStyle, {height: containerHeight}]}
                    resizeMode="stretch" // Ensure image covers the entire area
                />
            )}
            {spacing && Array.isArray(children) ? children.map((child: any, index: number) => {
                const {flex, height} = normalizeStyle(child.props?.style)
                return (
                    <View style={{
                        marginBottom: children.length - 1 === index ? 0 : spacing,
                        ...(flex !== undefined && flex !== 0 && {flex: flex}),
                        // ...(height && { height: height } ),
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
