// @ts-nocheck
import React, { useContext } from "react";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { FieldHookConfig, useField } from "formik";
import { TickIcon } from "../../assets/icon";
import { ThemeContext } from "../../context/theme-context";
import ASOverlay from "../overlay";
import ASColumn from "../column";
import ASText from "../text";
import ASRow from "../row";

export type ASRadioButtonItemProps = {
  label: string;
  value: string;
};

export type ASRadioButtonProps = {
  options: ASRadioButtonItemProps[];
  name: string | FieldHookConfig<any>;
  radioButtonStyle?: StyleProp<ViewStyle>;
  innerCircleStyle?: StyleProp<ViewStyle>;
  color?: ColorValue;
  labelStyle?: StyleProp<TextStyle>;
  radioType?: "default" | "tick";
  isOverlayEnabled?: boolean;
  onChange?: (item: any) => void;
  inActiveColor?: ColorValue;
  style?: ViewStyle;
  spacing?: number;
};

const ASRadioButton: React.FC<ASRadioButtonProps> = (
  props: ASRadioButtonProps
) => {
  const { colors } = useContext(ThemeContext);
  const {
    options = [],
    name,
    radioButtonStyle,
    innerCircleStyle,
    color = colors.primary,
    labelStyle,
    radioType = "default",
    isOverlayEnabled,
    onChange,
    inActiveColor = "#C4C4C4",
    style: flattenStyle,
    spacing,
  } = props;
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers || {};
  const style = StyleSheet.flatten(flattenStyle);
  const RadioButtonContainer =
    style?.flexDirection === "row" ? ASRow : ASColumn;

  const _onPressRadioButton = (item: ASRadioButtonItemProps) => () => {
    setValue?.(item?.value);
    onChange?.(item?.value);
  };

  const defaultRadioButtonType = (item: ASRadioButtonItemProps) => {
    return (
      <>
        <View
          style={[
            styles.radioButton,
            radioButtonStyle,
            {
              borderColor: item?.value === field?.value ? color : inActiveColor,
            },
          ]}
        >
          {item?.value === field?.value && (
            <View
              style={[
                styles.innerCircle,
                innerCircleStyle,
                { backgroundColor: color },
              ]}
            />
          )}
        </View>
        <ASText style={[styles.label, labelStyle]}>{item?.label}</ASText>
      </>
    );
  };

  const tickRadioButtonType = (item: ASRadioButtonItemProps) => {
    return (
      <ASRow
        style={[
          styles.tickRadioBtn,
          { backgroundColor: colors.surfaceVariant },
        ]}
      >
        <ASText style={[styles.ticklabel, labelStyle]}>{item?.label}</ASText>
        <TickIcon
          size={24}
          color={item?.value === field?.value ? color : "transparent"}
        />
      </ASRow>
    );
  };

  const renderRadioButtonType = (item: ASRadioButtonItemProps) => {
    switch (radioType) {
      case "default":
        return defaultRadioButtonType(item);
      case "tick":
        return tickRadioButtonType(item);
      default:
        return defaultRadioButtonType(item);
    }
  };

  const mapRadioButton = (item: ASRadioButtonItemProps, index: number) => {
    return (
      <TouchableOpacity
        key={`${index}${item?.label}`}
        onPress={_onPressRadioButton(item)}
        style={styles.container}
      >
        {renderRadioButtonType(item)}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <RadioButtonContainer style={style} spacing={spacing}>
        {options?.map(mapRadioButton)}
      </RadioButtonContainer>
      {/*{isOverlayEnabled && <ASOverlay/>}*/}
    </>
  );
};

export default ASRadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  label: {},
  ticklabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tickRadioBtn: {
    justifyContent: "space-between",
    flex: 1,
    padding: 18,
    borderRadius: 5,
    alignItems: "center",
  },
});

/*
         <ASRadioButton name={'gender'}
                        options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}/>
* */
