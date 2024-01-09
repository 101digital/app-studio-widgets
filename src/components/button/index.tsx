import React from 'react';
import {StyleProp, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {colors} from "../../utils/colors";
import ASText from "../text";

type  ASButtonProps = TouchableOpacityProps & {
    label: string;
    onPress: () => void
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean
    children?: React.ReactNode
}

const ASButton: React.FC<ASButtonProps> = ({
                                               label,
                                               style,
                                               textStyle,
                                               onPress,
                                               disabled,
                                               children,
                                               ...restProps
                                           }: ASButtonProps) => {
    return (
        <TouchableOpacity {...restProps} disabled={disabled} onPress={onPress}
                          style={[styles.buttonStyle, style, {backgroundColor: disabled ? colors.gray80 : colors.primaryHifiColor}]}>
            {children ?
                <>children</>
                : <ASText
                    style={[styles.textStyle, textStyle, {color: disabled ? colors.black500 : colors.white}]}>{label}</ASText>
            }
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

export default ASButton;
