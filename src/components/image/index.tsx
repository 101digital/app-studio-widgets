import React from 'react';
import { DimensionValue, Image, ImageProps, ImageStyle, StyleProp, ImageSourcePropType, Dimensions } from 'react-native';
import { convertPercentageToPx } from '../../utils/commonUtils';
import { ImageResizeMode } from 'react-native/Libraries/Image/ImageResizeMode';

export type ASImageProps = ImageProps & {
    source: any;
    style?: StyleProp<ImageStyle>;
    resizeMode?: ImageResizeMode;
    height?: DimensionValue;
    width?: DimensionValue;
    roundImageSize?: string | number;
    accessibilityLabel?: string;
};

const ASImage: React.FC<ASImageProps> = (props: ASImageProps) => {
    const { source, style, roundImageSize = 0, ...restProps } = props;
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');     // Get device dimensions to use for responsiveness
    const imageSource = typeof source === 'string' && source?.startsWith('http') || source?.startsWith('data:') ? {uri: source} : source
    const roundImageSizeValue = convertPercentageToPx(roundImageSize, true) || 0;

    return (
        <Image
            source={imageSource}
            style={[
                {
                    width: roundImageSizeValue || '100%',
                    height: roundImageSizeValue || '100%',
                    borderRadius: roundImageSizeValue || 0,
                },
                style
            ]}
            {...restProps}
            resizeMode={props?.resizeMode || 'contain'}
        />
    );
};

export default ASImage;
