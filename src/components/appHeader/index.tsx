import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ASText from "../text";
import ASRow from "../row";
import { toNumber } from "../../utils/commonUtils";

type BackButtonProps = {
  isEnabled: boolean;
  icon: React.ReactNode | string;
  color?: string;
  size?: number;
  isLargerBackButton?: boolean;
  onPress?: () => void;
};

type HeaderTitleProps = {
  title: string;
  textStyles?: TextStyle;
  alignment?: "left" | "center" | "right";
};

type ActionItem = {
  icon: React.ReactNode | string;
  iconSize?: number;
  alignment: "left" | "right";
  onPress: () => void;
  color?: string;
};

type ASAppHeaderProps = {
  styles?: ViewStyle;
  backButton?: BackButtonProps;
  headerTitle: HeaderTitleProps;
  actions?: ActionItem[];
  isPreview?: boolean;
};

const ASAppHeader: React.FC<ASAppHeaderProps> = ({
  styles: customStyles = {},
  backButton,
  headerTitle,
  actions = [],
  isPreview,
  ...restProps
}: ASAppHeaderProps) => {
  
  const renderIcon = (
    icon: React.ReactNode | string,
    size = 24,
    color = "#000"
  ) => {
    if (typeof icon === "string") {
      if (icon.startsWith("http")) {
        return (
          <Image
            source={{ uri: icon }}
            style={{
              width: size,
              height: size,
              tintColor: color,
            }}
          />
        );
      } else {
        return (
          <ASText
            style={{
              fontSize: size,
              fontFamily: "Material Icon",
              color: color,
            }}
            accessibilityLabel={"back_button_icon"}
          >
            {icon}
          </ASText>
        );
      }
    }
    return icon;
  };

  const renderActions = (alignment: "left" | "right") => {
    const filteredActions = actions.filter(
      (action) => action.alignment === alignment
    );
    return filteredActions.map((action, idx) => (
      <TouchableOpacity
        key={`${alignment}-${idx}`}
        onPress={action.onPress}
        style={[
          stylesObj.actionButton,
          idx === filteredActions.length - 1 ? { marginRight: 0 } : null,
        ]} // Prevent last item to have marginRight
      >
        {renderIcon(action.icon, action.iconSize, action.color)}
      </TouchableOpacity>
    ));
  };

  const renderBackButton = () => {
    if (!backButton?.isEnabled) return null;

    const btn = (
      <TouchableOpacity
        onPress={backButton.onPress}
        style={stylesObj.backButton}
        testID={'header-back-button'}
      >
        {renderIcon(backButton.icon, backButton.size, backButton.color)}
      </TouchableOpacity>
    );

    if (backButton.isLargerBackButton) {
      return <View style={stylesObj.fullRowBack}>{btn}</View>;
    }

    return btn;
  };

  const getTitleContainerStyle = (): ViewStyle => {
    const alignment = headerTitle.alignment || "center";

    if (alignment === "center") {
      return {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1,
        pointerEvents: "none",
        paddingHorizontal: 8,
      };
    }

    return {
      flex: 1,
      justifyContent: "center",
      alignItems: alignment === "left" ? "flex-start" : "flex-end",
      paddingHorizontal: 8,
    };
  };

  const getTitleTextAlign = (): TextStyle["textAlign"] => {
    switch (headerTitle.alignment) {
      case "left":
        return "left";
      case "right":
        return "right";
      case "center":
      default:
        return "center";
    }
  };

  const insets = isPreview ? null : useSafeAreaInsets();

  return (
    <View
      {...restProps}
      style={[
        customStyles,
        {
          paddingTop: (toNumber(customStyles?.paddingTop)) + (insets?.top ?? 0), // Handle safe area view
          height: (toNumber(customStyles?.height)) + (insets?.top ?? 0), // Handle safe area view
        },
      ]}
    >
      {backButton?.isEnabled &&
        backButton.isLargerBackButton &&
        renderBackButton()}{" "}
      {/* Full row back button (if enabled) */}
      {/* Main app header */}
      <View style={stylesObj.headerContainer}>
        <View style={stylesObj.leftContainer}>
          {!backButton?.isLargerBackButton && renderBackButton()}
          {renderActions("left")}
        </View>

        {/* Title */}
        <View style={getTitleContainerStyle()}>
          <Text
            style={[
              stylesObj.titleText,
              headerTitle.textStyles,
              { textAlign: getTitleTextAlign() },
            ]}
            numberOfLines={1}
          >
            {headerTitle.title}
          </Text>
        </View>

        <View style={stylesObj.rightContainer}>{renderActions("right")}</View>
      </View>
    </View>
  );
};

const stylesObj = StyleSheet.create({
  headerContainer: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    marginRight: 8,
  },
  fullRowBack: {
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  actionButton: {
    marginHorizontal: 6,
  },
});

export default ASAppHeader;
