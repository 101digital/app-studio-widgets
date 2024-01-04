import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';

type  ButtonProps = {
    label: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps | TouchableOpacityProps> = ({
                                                                   label,
                                                                   ...props
                                                               }: ButtonProps | TouchableOpacityProps) => {
    return (
        <TouchableOpacity {...props} style={[styles.buttonStyle, props.style]}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
});

export default Button;
