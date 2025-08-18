import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useField,
  useFormikContext,
} from "formik";
import { ThemeContext } from "../../..";

export type ASCheckBoxProps = {
  label?: string;
  labelStyles?: TextStyle;
  unFillColor?: string;
  fillColor: string;
  iconStyles?: ViewStyle;
  innerIconStyles?: ViewStyle;
  disabled?: boolean;
  accessibilityLabel?: string;
  size?: number;
  iconSize?: number;
  name: string;
  onChange?: (value: boolean) => void;
  inactiveBorderColor?: string;
  testId?: string;
};



const ASCheckBox: React.FC<ASCheckBoxProps> = (props: ASCheckBoxProps) => {
  const {
    label,
    labelStyles,
    unFillColor = "transparent",
    fillColor,
    iconStyles: flattenIconStyles,
    innerIconStyles: flattenInnerIconStyles,
    inactiveBorderColor = "#999999",
    disabled,
    onChange,
    accessibilityLabel,
    size = 25,
    iconSize = 12,
    name,
    testId = "ASCheckBox",
    ...restProps
  } = props;
  const innerIconStyles = StyleSheet.flatten(flattenInnerIconStyles);
  const { colors } = useContext(ThemeContext);
  const iconStyles = StyleSheet.flatten(flattenIconStyles);
  const iconBorderRadius: any =
    innerIconStyles?.borderRadius ?? iconStyles?.borderRadius;
  const formikContext = useFormikContext();
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  let field: FieldInputProps<any> | undefined;
  let meta: FieldMetaProps<any> | undefined;
  let helpers: FieldHelperProps<any> | undefined;
  if (formikContext && name) {
    [field, meta, helpers] = useField(name);
  }
  useEffect(() => {
    if (formikContext && name && field) {
      setToggleCheckBox(field.value);
    }
  }, [formikContext, name, field]);

  const onValueChange = (newValue: boolean) => {
    setToggleCheckBox(newValue);
    if (formikContext && name && helpers) {
      helpers.setValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <BouncyCheckbox
      size={size}
      testID={testId}
      fillColor={fillColor}
      unFillColor={unFillColor}
      text={label}
      iconStyle={[iconStyles, iconBorderRadius]}
      innerIconStyle={[
        iconStyles,
        innerIconStyles,
        { borderColor: toggleCheckBox ? fillColor : inactiveBorderColor },
      ]}
      textContainerStyle={{ flex: 'auto', ...(!label && { display: "none" }) }}
      textStyle={[{color: colors.textPrimary}, labelStyles]}
      onPress={(isChecked: boolean) => {
        onValueChange(isChecked);
      }}
      isChecked={toggleCheckBox}
      iconImageStyle={{ width: iconSize, height: iconSize }}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      {...restProps}
    />
  );
};

export default ASCheckBox;
