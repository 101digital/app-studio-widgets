import React, { useContext } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  StyleSheet,
  View,
  Image,
} from "react-native";

export type ASIconButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  width: number;
  height: number;
  icon: any;
};

const ASIconButton: React.FC<ASIconButtonProps> = (
  props: ASIconButtonProps
) => {
  const { onPress, width = 20, height = 20, icon } = props;

  const renderIcon = () => {
    if (typeof icon === "string") {
      if (icon.startsWith("data:") || icon.startsWith("http")) {
        return <Image source={{ uri: icon }} style={{ width, height }} />;
      }
    }
    return <View style={{ width, height }}>{icon}</View>;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default ASIconButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
