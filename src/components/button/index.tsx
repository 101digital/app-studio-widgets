import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {colors} from "app-studio-widgets/src/utils/colors";
import ASText from "../text";

type StyleProps = {}

type  ASButtonProps = TouchableOpacityProps & {
    label: string;
    onPress: () => void
    style?: ViewStyle;
    textStyle?: TextStyle
    disabled?: boolean
    children?: React.ReactNode
    simpleTextButton?: boolean
}

const ASButton: React.FC<ASButtonProps> = (props: ASButtonProps) => {

    const {
        label,
        style,
        textStyle,
        onPress,
        disabled,
        children,
        simpleTextButton,
        ...restProps
    } = props

    const getButtonBackgroundColor = () => {
        if (disabled) {
            return colors.gray80
        }

        if (style?.backgroundColor) {
            return style?.backgroundColor
        }

        if (simpleTextButton) {
            return 'transparent'
        }

        return colors.primaryHifiColor
    }

    const getButtonTextBackgroundColor = () => {
        if (disabled) {
            return colors.black500
        }

        if (textStyle?.color) {
            return textStyle?.color
        }

        if (simpleTextButton) {
            return colors.black700
        }

        return colors.white
    }

    return (
        <TouchableOpacity {...restProps} disabled={disabled} onPress={onPress}
                          style={[simpleTextButton ? styles.simpleTextButton : styles.buttonStyle, style, {backgroundColor: getButtonBackgroundColor()}]}>
            {children ?
                <>children</>
                : <ASText
                    style={[simpleTextButton ? styles.simpleTextButtonTextStyle : styles.textStyle, textStyle, {color: getButtonTextBackgroundColor()}]}>{label}</ASText>
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
    simpleTextButton: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    textStyle: {},
    simpleTextButtonTextStyle: {
        fontSize: 12
    }
});

export default ASButton;
