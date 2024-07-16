import React, { useContext } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import ASText from "../text";
import { ThemeContext } from "../../context/theme-context";

export type ASBadgeProps = {
  children: React.ReactNode;
  label: number | string | null | undefined;
  badgeStyles?: StyleProp<ViewStyle>;
  badgeTextStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const ASBadge: React.FC<ASBadgeProps> = (props: ASBadgeProps) => {
  const { colors } = useContext(ThemeContext);
  const { children, label, badgeStyles, badgeTextStyle, containerStyle } =
    props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        {children}
        {!!label && (
          <View
            style={[
              styles.badgeStyles,
              {
                backgroundColor: colors.background,
                borderColor: colors.accent2,
              },
              badgeStyles,
            ]}
          >
            <ASText style={[styles.badgeTextStyle, badgeTextStyle]}>
              {label}
            </ASText>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  badgeStyles: {
    top: -15,
    right: -12,
    borderRadius: 30,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    flex: 0,
  },
  badgeTextStyle: {
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ASBadge;

// Note: ASBadge example
/*
                <ASBadge badgeNumber={3}>
                    <ASRow>
                        <ASText>Badge</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primary"/>
                    </ASRow>
                </ASBadge>
* */
