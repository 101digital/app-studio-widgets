import React, {ReactNode, useContext, useState} from 'react';
import {
    NativeSyntheticEvent,
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';
import {TextInputMask, TextInputMaskProps, TextInputMaskTypeProp} from 'react-native-masked-text';
import {useField} from 'formik';
import ASText from "../text";
import {isAndroid} from '../../utils/commonUtils'
import {ThemeContext} from "../../context/theme-context";

export type ASTextFieldStyles = {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    errorTextStyle?: StyleProp<TextStyle>;
};

export type ASTextFieldProps = Omit<TextInputMaskProps, "type"> &
    TextInputProps & {
    name: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    errorBorderColor?: string;
    activeBorderColor?: string;
    inactiveBorderColor?: string;
    placeholderTextColor?: string;
    style?: ASTextFieldStyles;
    formatError?: (error: string) => string;
    label?: string;
    type?: TextInputMaskTypeProp
    isShowError?: boolean
};

const ASTextField = (props: ASTextFieldProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        name,
        onFocus,
        onBlur,
        suffixIcon,
        prefixIcon,
        errorBorderColor,
        activeBorderColor,
        inactiveBorderColor,
        style,
        placeholderTextColor = colors.secondary,
        formatError,
        options,
        label,
        type = 'custom',
        isShowError,
        ...restProps
    } = props;
    const [active, setActive] = useState(false);
    const [field, meta, helpers] = useField(name);
    const showMask = !!options?.mask;

    const handleOnFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(true);
        if (onFocus) {
            onFocus(event);
        }
    };

    const handleOnBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(false);
        field?.onBlur(name);
        helpers?.setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };

    let separatorColor: string;

    if (meta?.error && meta?.touched) {
        separatorColor = (errorBorderColor ?? colors.errorContainer)!;
    } else {
        separatorColor = active
            ? (activeBorderColor ?? colors.onSecondaryFixedVariant)!
            : (inactiveBorderColor ?? colors.onSecondary)!;
    }

    const getErrorMessage = (error: string) => {
        return formatError?.(error) ?? error;
    };

    return (
        <>
            <View style={[styles.containerStyle, {backgroundColor: colors.secondaryFixed,}]}>
                <ASText style={[styles.labelStyle, {
                    color: colors.onTertiary
                }]}>{label}</ASText>
                <View style={[styles.contentContainerStyle, {borderColor: separatorColor}]}>
                    {prefixIcon}
                    <View style={styles.inputContainerStyle}>
                        {showMask ? (
                            <TextInputMask
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                                value={`${field?.value}`}
                                onChangeText={field?.onChange(name)}
                                style={[styles.textInputStyle, {
                                    color: colors.surface,
                                }]}
                                placeholderTextColor={placeholderTextColor}
                                options={options}
                                type={type}
                                {...restProps}
                            />
                        ) : (
                            <TextInput
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                                value={`${field?.value}`}
                                onChangeText={field?.onChange(name)}
                                style={[styles.textInputStyle, {
                                    color: colors.surface,
                                }]}
                                placeholderTextColor={placeholderTextColor}
                                autoComplete={'off'}
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                {...restProps}
                            />
                        )}
                    </View>
                    {suffixIcon}
                </View>
            </View>
            {isShowError && meta?.error && meta?.touched && (
                <ASText style={[styles.errorTextStyle, {
                    color: colors.error,
                }]}>{getErrorMessage(meta?.error)}</ASText>
            )}
        </>
    );
};

ASTextField.defaultProps = {
    type: 'custom',
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5
    },
    contentContainerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    labelStyle: {
        fontSize: 10,
    },
    inputContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputStyle: {
        flex: 1,
        fontSize: isAndroid ? 10 : 12,
        paddingVertical: isAndroid ? 2 : 8,
        paddingHorizontal: 0
    },
    errorTextStyle: {
        fontSize: 12,
        marginTop: isAndroid ? 5 : 4,
    },
});

export default ASTextField;
