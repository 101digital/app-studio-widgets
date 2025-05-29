import React from "react";
import {
  DimensionValue,
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import { ImageResizeMode } from "react-native/Libraries/Image/ImageResizeMode";
import { convertPercentageToPx } from "../../utils/commonUtils";

export type ASImageProps = Omit<ImageProps, "source"> & {
  source: string | ImageSourcePropType; // Allow string or valid ImageSourcePropType    style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  height?: DimensionValue;
  width?: DimensionValue;
  roundImageSize?: string | number;
  accessibilityLabel?: string;
  testId?: string;
};

const ASImage: (props: ASImageProps) => JSX.Element = (props: ASImageProps) => {
  const {
    source,
    style,
    roundImageSize = 0,
    testId = "ASImage",
    ...restProps
  } = props;
  const imageSource: ImageSourcePropType =
    typeof source === "string" ? { uri: source } : source;
  const roundImageSizeValue = convertPercentageToPx(roundImageSize, true) || 0;

  return (
    <Image
      testID={testId}
      source={imageSource}
      style={[
        {
          width: roundImageSizeValue || "100%",
          height: roundImageSizeValue || "100%",
          borderRadius: roundImageSizeValue || 0,
        },
        StyleSheet.flatten(style),
      ]}
      {...restProps}
      resizeMode={props?.resizeMode || "contain"}
    />
  );
};

export default ASImage;
