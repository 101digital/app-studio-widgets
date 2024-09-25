import React, {ReactNode, useState} from "react";
import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import ASImage from "../image";

export type ASColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    backgroundImage?: any;
    accessibilityLabel?: string;
    spacing?: number
};

const ASColumn: React.FC<ASColumnProps> = (props: ASColumnProps) => {
    const {children, style, backgroundImage, accessibilityLabel, spacing} = props || {};
    const [imageSize, setImageSize] = useState({})

    const onLayout = (event) => {
        const {x, y, width, height} = event.nativeEvent.layout;
        setImageSize({width, height})
    }

    return (
        <View style={[styles.container, style]}
              accessibilityLabel={accessibilityLabel}
              onLayout={onLayout}>
            {backgroundImage && (
                <ASImage source={backgroundImage} style={[styles.backgroundStyle, {...imageSize}]}/>
            )}
            {spacing && Array.isArray(children) ? children.map((child: any, index: number) => {
                return (
                    <View style={{marginBottom: children.length - 1 === index ? 0 : spacing}}>
                        {child}
                    </View>
                )
            }) : children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
    },
    backgroundStyle: {
        height: '100%',
        width: '100%',
        position: "absolute",
    },
});

export default ASColumn;
