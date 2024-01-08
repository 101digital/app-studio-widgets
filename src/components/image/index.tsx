import React from 'react';
import {Image, ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

interface ASImageProps {
    source: ImageSourcePropType | string;
    style?: StyleProp<ImageStyle>;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const ASImage: React.FC<ASImageProps> = (props: ASImageProps) => {
    const {source, style, resizeMode, ...otherProps} = props
    const imageSource = source?.startsWith('http') ? {uri: source} : source

    return (
        <Image
            source={imageSource}
            style={[{width: '50%', height: '50%'}, style]} // Default to full width and height
            resizeMode={resizeMode || 'cover'} // Default to 'cover'
            {...otherProps}
        />
    );
};

export default ASImage;
