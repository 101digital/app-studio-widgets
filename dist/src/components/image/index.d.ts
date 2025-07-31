import React from "react";
import { DimensionValue, ImageProps, ImageSourcePropType } from "react-native";
import { ImageResizeMode } from "react-native/Libraries/Image/ImageResizeMode";
export type ASImageProps = Omit<ImageProps, "source"> & {
    source: string | ImageSourcePropType;
    resizeMode?: ImageResizeMode;
    height?: DimensionValue;
    width?: DimensionValue;
    roundImageSize?: string | number;
    accessibilityLabel?: string;
    testId?: string;
};
declare const ASImage: React.FC<ASImageProps>;
export default ASImage;
