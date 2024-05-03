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
    formatNumber?: 'comma' | 'dot' | 'percentage' | undefined
    prefixText?: string;
    prefixTextStyle?: StyleProp<TextStyle>;
};

const ASTextField = (props: ASTextFieldProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        name,
        onFocus,
        onBlur,
        suffixIcon,
        prefixIcon,
        prefixText,
        prefixTextStyle,
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
        formatNumber,
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

    const handleFormat = () => {
        let text = field.value
        let numberValue = typeof text === 'string' ? parseFloat(text) : Number(text);

        if (!isNaN(numberValue)) {
            switch (formatNumber) {
                case "comma":
                    // Remove comma in the number so when format the already formatted (Ex: 123,456.00) number it's still working
                    // because can't parseFloat a string with comma into Number
                    // For ex: 123456 -> 123,456.00 and 123,456.00 -> 123,456.00
                    // The same apply for "dot"
                    text = parseFloat(text.replace(',', '')).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })
                    break;
                case "dot":
                    text = parseFloat(text.replace('.', '')).toLocaleString('de-DE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })
                    break;
                case "percentage":
                    const percentage = (numberValue * 100).toFixed(2);
                    text = `${percentage}%`
                    break;

                default:
                    text = field.value
                    break
            }
        }

        field?.onChange(name)(text)
    }

    const handleOnBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        handleFormat()
        setActive(false);
        field?.onBlur(name);
        helpers?.setTouched(true);

        if (onBlur) {
            onBlur(event);
        }
    };

    const handleOnChange = (e: string) => {
        field?.onChange(name)(e)
    }

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
                    {
                        !!prefixText &&
                        <ASText style={[{color: colors.tertiary}, prefixTextStyle]}>{prefixText}</ASText>
                    }
                    <View style={styles.inputContainerStyle}>
                        {showMask ? (
                            <TextInputMask
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                                value={`${field?.value}`}
                                onChangeText={handleOnChange}
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
                                onChangeText={handleOnChange}
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
