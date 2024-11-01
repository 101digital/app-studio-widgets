import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useField } from "formik";
import { DecrementIcon, IncrementIcon } from "../../assets/icon";

// Define the type for component props
export type ASCounterProps = {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  onValueChange?: (value: number) => void;
  incrementIconColor?: string;
  decrementIconColor?: string;
  incrementIconSize?: number;
  decrementIconSize?: number;
  labelTypography?: TextStyle;
  style?: ViewStyle;
  name: string;
}

// ASCounter component with typed props
const ASCounter: React.FC<ASCounterProps> = ({
  initialValue = 0,
  onValueChange,
  incrementIconColor = "#007AFF",
  decrementIconColor = "#007AFF",
  incrementIconSize = 24,
  decrementIconSize = 24,
  minValue = 0,
  maxValue,
  style,
  name,
  labelTypography
}) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers || {};
  const count = parseInt(field?.value || initialValue);

  const handleIncrement = () => {
    const newValue = count + 1;
    if (maxValue === undefined || newValue <= maxValue) {
      setValue(newValue);
      onValueChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = count - 1;
    if (newValue >= minValue) {
      setValue(newValue);
      onValueChange?.(newValue);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleDecrement}>
        <DecrementIcon color={decrementIconColor} size={decrementIconSize}/>
      </TouchableOpacity>
      <Text style={[styles.countText, labelTypography]}>{count}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <IncrementIcon color={incrementIconColor} size={incrementIconSize}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  countText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ASCounter;
