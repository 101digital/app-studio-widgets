import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {colors} from "../../utils/colors";
import ASText from "../asText";

type  ButtonProps = TouchableOpacityProps & {
    label: string;
    onPress: () => void
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           style,
                                           textStyle,
                                           onPress,
                                           disabled,
                                           ...props
                                       }: ButtonProps) => {
    return (
        <TouchableOpacity {...props} disabled={disabled} onPress={onPress}
                          style={[styles.buttonStyle, style, {backgroundColor: disabled ? colors.gray80 : colors.primaryHifiColor}]}>
            {/*<Text*/}
            {/*    style={[styles.textStyle, textStyle, {color: disabled ? colors.black500 : colors.white}]}>{label}</Text>*/}

            <ASText style={[styles.textStyle, textStyle, {color: disabled ? colors.black500 : colors.white}]}>{label}</ASText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8
    },
    textStyle: {}
});

export default Button;
