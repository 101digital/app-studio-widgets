import React, {ReactNode, useContext, useState} from "react";
import {
    NativeSyntheticEvent,
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import {TextInputMask, TextInputMaskProps, TextInputMaskTypeProp,} from "react-native-masked-text";
import {useField} from "formik";
import ASText from "../text";
import {ThemeContext} from "../../context/theme-context";
import {constants} from "../../utils/constants";
import ASOverlay from "../overlay";
import ASImage from "../image";
import { toNumber } from "../../utils/commonUtils";

export type ASTextFieldProps = Omit<TextInputMaskProps, "type"> &
    TextInputProps & {
    name: string;
    prefixIcon?: ReactNode | string;
    suffixIcon?: ReactNode | string;
    formatError?: (error: string) => string;
    label?: string;
    textFieldType?: TextInputMaskTypeProp;
    formatNumber?: "comma" | "dot" | "percentage" | undefined;
    prefixText?: string;
    prefixTextStyle?: StyleProp<TextStyle>;
    labelTextStyle?: TextStyle;
    inputTextStyle?: StyleProp<TextStyle>;
    errorMessageTextStyle?: StyleProp<TextStyle>;
    borderErrorColor?: string;
    borderActiveColor?: string;
    placeholderTextColor?: string;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
    isOverlayEnabled?: boolean;
    id?: string;
    onChange?: (text: any) => void;
    testId?: string;
    editable?: boolean;
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
        formatError,
        options,
        label,
        textFieldType = "custom",
        formatNumber,
        labelTextStyle,
        inputTextStyle,
        borderErrorColor,
        borderActiveColor,
        style,
        errorMessageTextStyle,
        placeholderTextColor,
        accessibilityLabel,
        isOverlayEnabled,
        id,
        onChange,
        testId = "ASTextField",
        editable = true,
        ...restProps
    } = props;
    const [active, setActive] = useState(false);
    const [field, meta, helpers] = useField(name);
    const showMask = options && Object.keys(options).length > 0;
    const flattenedStyle = StyleSheet.flatten(style) as ViewStyle;
    const flattenedLabelStyle = StyleSheet.flatten(labelTextStyle) || {};
    const labelFontSize =
        flattenedLabelStyle.fontSize || styles.labelStyle.fontSize;
    const labelTopPosition = -labelFontSize * 0.55;
    const flattenedHeight = flattenedStyle?.height || 56;
    const handleOnFocus = (
        event: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
        setActive(true);
        if (onFocus) {
            onFocus(event);
        }
    };
    const borderColor = (meta.error && meta.error.length > 0) ? colors.error : (active && editable) ? colors.primary : colors.borderInput;

    // Triger this in onBlur envent
    const handleFormat = () => {
        let text = field.value;
        let numberValue =
            typeof text === "string" ? parseFloat(text) : toNumber(text);

        if (!isNaN(numberValue)) {
            switch (formatNumber) {
                case "comma":
                    // Remove comma in the number so when format the already formatted (Ex: 123,456.00) number it's still working
                    // because can't parseFloat a string with comma into Number
                    // For ex: 123456 -> 123,456.00 and 123,456.00 -> 123,456.00
                    // The same apply for "dot"
                    text = parseFloat(text.replace(",", "")).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    });
                    break;
                case "dot":
                    text = parseFloat(text.replace(".", "")).toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    });
                    break;
                case "percentage":
                    const percentage = (numberValue * 100).toFixed(2);
                    text = `${percentage}%`;
                    break;

                default:
                    text = field.value;
                    break;
            }
        }

        field?.onChange(name)(text);
    };

    const handleOnBlur = (
        event: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
        handleFormat();
        setActive(false);
        field?.onBlur(name);
        helpers?.setTouched(true);

        if (onBlur) {
            onBlur(event);
        }
    };

    const handleOnChange = (e: string) => {
        field?.onChange(name)(e);
        if (onChange) {
            onChange(e);
        }
    };

    const getErrorMessage = (error: string) => {
        return formatError?.(error) ?? error;
    };

    const getBorderColor = () => {
        if (meta.error && meta.touched) {
            return borderErrorColor;
        }
        return active ? borderActiveColor : flattenedStyle?.borderColor;
    };

    return (
        <View
        testID={`view-${testId}`}
        style={[styles.wrapperStyle, {
            height: "auto",
            borderColor: borderColor,
            marginBottom: flattenedStyle?.marginBottom || 0,
            ...(flattenedStyle?.flex ? { flex: flattenedStyle.flex } : {}),
            ...(flattenedStyle?.width ? { width: flattenedStyle.width } : {}),
            ...(flattenedStyle?.alignSelf ? { alignSelf: flattenedStyle.alignSelf } : {})
        },  ]}
              accessibilityLabel={accessibilityLabel} id={id}>
            <View
                style={[
                    styles.containerStyle,
                    {
                        height: flattenedHeight,
                        ...flattenedStyle,
                        borderColor: borderColor || flattenedStyle?.borderColor,
                        marginBottom: 0
                    },
                ]}
            >
                <View
                    style={[styles.contentContainerStyle]}>
                    {prefixIcon && <View style={styles.prefixIcon}>{typeof prefixIcon === 'string' ?
                        <ASImage
                            style={{width: 20, height: 20}}
                            source={prefixIcon}
                            testID={`prefixIcon-${testId}`}
                        />
                        : prefixIcon}</View>}
                    {!!prefixText && (
                        <ASText style={[styles.prefixText, prefixTextStyle] } 
                        testID={`prefixLabel-${testId}`}>
                            {prefixText}
                        </ASText>
                    )}
                    <View style={styles.inputContainerStyle}>
                        {showMask ? (
                            <TextInputMask
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                                value={`${field?.value}`}
                                onChangeText={handleOnChange}
                                style={[styles.textInputStyle, !!flattenedStyle?.width && {width: flattenedStyle.width}, inputTextStyle, !editable && {color: colors.disable}]}
                                placeholderTextColor={placeholderTextColor || constants.defaultPlaceholderColor}
                                {...restProps}
                                options={options}
                                type={textFieldType}
                                testID={`textInputMask-${testId}`}
                                editable={editable}
                            />
                        ) : (
                            <TextInput
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                                value={`${field?.value}`}
                                onChangeText={handleOnChange}
                                style={[styles.textInputStyle, !!flattenedStyle?.width && {width: flattenedStyle.width}, inputTextStyle, !editable && {color: colors.disable}]}
                                placeholderTextColor={placeholderTextColor || constants.defaultPlaceholderColor}
                                autoComplete={"off"}
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                testID={`textInput-${testId}`}
                                editable={editable}
                                {...restProps}
                            />
                        )}
                    </View>
                    {suffixIcon && <View style={styles.suffixIcon}>{typeof suffixIcon === 'string' ?
                        <ASImage
                            style={{width: 20, height: 20}}
                            source={suffixIcon}
                            testID={`suffixIcon-${testId}`}
                        />
                        : suffixIcon}</View>}
                </View>
            </View>
            {label && !!field.value && <ASText
                testID={`label-${testId}`}
                style={[
                    styles.labelStyle,
                    {
                        backgroundColor: flattenedStyle?.backgroundColor,
                        color: !editable ? colors.disable : meta?.error ? colors.error : (active && editable) ? colors.primary : colors.borderInput,
                        top: labelTopPosition,
                        left: (typeof flattenedStyle?.paddingLeft === 'number' ? flattenedStyle.paddingLeft : 0) - (typeof labelTextStyle?.paddingLeft === 'number' ? labelTextStyle.paddingLeft : 2)
                    },
                ]}
            >
                {label}
            </ASText>}
            {meta?.error && (
                <ASText
                testID={`errorLabel-${testId}`} style={[styles.errorTextStyle, errorMessageTextStyle]}>
                    {getErrorMessage(meta?.error)}
                </ASText>
            )}
            {isOverlayEnabled && <ASOverlay/>}
        </View>
    );
};

ASTextField.defaultProps = {
    type: "custom",
};

const styles = StyleSheet.create({
    wrapperStyle: {
        position: "relative",
    },
    containerStyle: {
        borderWidth: 1,
        paddingVertical: 2,
        justifyContent: "center",
        marginBottom: 2,
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:14,
        paddingRight:14,
    },
    contentContainerStyle: {
        alignItems: "center",
        flexDirection: "row",
    },
    labelStyle: {
        fontSize: 12,
        paddingLeft:2,
        paddingRight:2,
        position: "absolute",
    },
    inputContainerStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    textInputStyle: {
        flex: 1,
        fontSize: 12,
        paddingVertical: 0,
    },
    errorTextStyle: {
        fontSize: 12,
        marginLeft: 5,
        marginHorizontal: 16,
    },
    prefixIcon: {
        marginRight: 8,
    },
    suffixIcon: {
        marginLeft: 8,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    prefixText: {
        marginRight: 4,
    },
});

export default ASTextField;
