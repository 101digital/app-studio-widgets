// @ts-nocheck
import React, { useContext } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import ASText from "../text";
import { ThemeContext } from "../../context/theme-context";

export type ASExpandableTextProps = {
  initialLines: number;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  readMoreTextStyles?: StyleProp<TextStyle>;
};

const ASExpandableText: React.FC<ASExpandableTextProps> = (
  props: ASExpandableTextProps
) => {
  const { colors } = useContext(ThemeContext);
  const { initialLines = 1, text, textStyle, readMoreTextStyles } = props;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <ASText
        numberOfLines={isExpanded ? undefined : initialLines}
        style={[
          styles.textStyle,
          { color: colors.onTertiaryFixedVariant },
          textStyle,
        ]}
      >
        {text}
      </ASText>

      {text?.length > initialLines && (
        <TouchableOpacity onPress={toggleExpansion}>
          <ASText
            style={[
              styles.readMoreTextStyle,
              {
                color: colors.onTertiary,
              },
              readMoreTextStyles,
            ]}
          >
            {isExpanded ? "Read less" : "Read more"}
          </ASText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {},
  readMoreTextStyle: {
    fontSize: 12,
  },
});

export default ASExpandableText;

// NOTE:  ASExpandableText Example
/*
         <ASExpandableText initialLines={1}
                           text={'Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum '}/>

* */
