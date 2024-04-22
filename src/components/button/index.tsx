import React, {useContext} from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import ASText from "../text";
import {ThemeContext} from '../../context/theme-context'

export type  ASButtonProps = TouchableOpacityProps & {
    label?: string;
    onPress: () => void
    style?: ViewStyle;
    textStyle?: TextStyle | any
    disabled?: boolean
    children?: React.ReactNode
    simpleTextButton?: boolean
    touchableContainer?: boolean
}

const ASButton: React.FC<ASButtonProps> = (props: ASButtonProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        label = '',
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
            return colors.disabledButtonColor
        }

        if (style?.backgroundColor) {
            return style?.backgroundColor
        }

        if (simpleTextButton || !!children) {
            return 'transparent'
        }

        return colors.buttonColor
    }

    const getButtonTextColor = () => {
        if (disabled) {
            return colors.disabledTextColor
        }

        if (textStyle?.color) {
            return textStyle?.color
        }

        if (simpleTextButton) {
            return colors.buttonSimpleTextColor
        }

        return colors.white
    }

    const getButtonStyle = () => {
        if (simpleTextButton) return styles.simpleTextButton

        if (!!children) return styles.touchableContainerStyles

        return styles.buttonStyle
    }

    const getButtonTextStyle = () => {
        if (simpleTextButton) return styles.simpleTextButtonTextStyle

        return styles.textStyle
    }

    return (
        <TouchableOpacity {...restProps} disabled={disabled} onPress={onPress}
                          style={[getButtonStyle(), style, {backgroundColor: getButtonBackgroundColor()}]}>
            {!!children ?
                children
                : <ASText
                    style={[getButtonTextStyle(), textStyle, {color: getButtonTextColor()}]}>{label}</ASText>
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
    touchableContainerStyles: {},
    textStyle: {},
    simpleTextButtonTextStyle: {
        fontSize: 12
    }
});

export default ASButton;
