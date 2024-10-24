import { DimensionValue, ImageProps, ImageSourcePropType } from 'react-native';
import { ImageResizeMode } from 'react-native/Libraries/Image/ImageResizeMode';
export type ASImageProps = Omit<ImageProps, 'source'> & {
    source: string | ImageSourcePropType;
    resizeMode?: ImageResizeMode;
    height?: DimensionValue;
    width?: DimensionValue;
    roundImageSize?: string | number;
    accessibilityLabel?: string;
};
declare const ASImage: (props: ASImageProps) => JSX.Element;
export default ASImage;
