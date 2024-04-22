import React from 'react';
import {DimensionValue, Image,ImageProps , ImageStyle, StyleProp} from 'react-native';
import {convertPercentageToPx} from '../../utils/commonUtils';
import {ImageResizeMode} from "react-native/Libraries/Image/ImageResizeMode";

export type ASImageProps = ImageProps & {
    source: any //ImageSourcePropType | string ;
    style?: StyleProp<ImageStyle>;
    resizeMode?: ImageResizeMode
    height?: DimensionValue
    width?: DimensionValue
    roundImageSize?: string | number
}

const ASImage: (props: ASImageProps) => JSX.Element = (props: ASImageProps) => {
    const {source, width = 100, height = 100, style, resizeMode = 'cover', roundImageSize = 0, ...restprops} = props
    const imageSource = typeof source === 'string' && source?.startsWith('http') || source?.startsWith('data:') ? {uri: source} : source
    const roundImageSizeValue = convertPercentageToPx(roundImageSize, true)

    return (
        <Image
            source={imageSource}
            style={[{
                width: roundImageSizeValue || width,
                height: roundImageSizeValue || height,
                borderRadius: roundImageSizeValue
            }, style]} // Default to full width and height
            resizeMode={resizeMode} // Default to 'cover'
            {...restprops}
        />
    );
};

export default ASImage;

//Note: ASImage example
/*
                        <ASImage source={'https:i.imgur.com/oLgjoWx.png'} style={{width: '35%', height: '20%'}}
                         resizeMode={'contain'}/>
* */
