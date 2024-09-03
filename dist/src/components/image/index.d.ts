import { DimensionValue, ImageProps, ImageStyle, StyleProp } from 'react-native';
import { ImageResizeMode } from "react-native/Libraries/Image/ImageResizeMode";
export type ASImageProps = ImageProps & {
    source: any;
    style?: StyleProp<ImageStyle>;
    resizeMode?: ImageResizeMode;
    height?: DimensionValue;
    width?: DimensionValue;
    roundImageSize?: string | number;
    accessibilityLabel?: string;
};
declare const ASImage: (props: ASImageProps) => JSX.Element;
export default ASImage;
