import React, { useState, useContext, useEffect } from "react";
import { TextStyle, ViewStyle } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  useField,
  useFormikContext,
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
} from "formik";
import { ThemeContext } from "../../context/theme-context";

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
};

const ASCheckBox: React.FC<ASCheckBoxProps> = (props: ASCheckBoxProps) => {
  const {
    label,
    labelStyles,
    unFillColor = "transparent",
    fillColor,
    iconStyles,
    innerIconStyles,
    disabled,
    onChange,
    accessibilityLabel,
    size = 25,
    iconSize = 12,
    name,
    ...restProps
  } = props;

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
      fillColor={fillColor}
      unFillColor={unFillColor}
      text={label}
      iconStyle={iconStyles}
      innerIconStyle={innerIconStyles}
      textStyle={labelStyles}
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
