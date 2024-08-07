import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import ASImage from "../image";

export type ASColumnProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  backgroundImage?: any;
};

const ASColumn: React.FC<ASColumnProps> = (props: ASColumnProps) => {
  const { children, style, backgroundImage } = props || {};

  return (
    <View style={[styles.container, style]}>
      {backgroundImage && (
        <ASImage source={backgroundImage} style={styles.backgroundStyle} />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // TODO: Start adding justifyContent: 'flex-start', then remove this justifyContent: 'center'
    justifyContent: "center",
  },
  backgroundStyle: {
    height: '100%',
    width: '100%',
    position: "absolute",
  },
});

export default ASColumn;
