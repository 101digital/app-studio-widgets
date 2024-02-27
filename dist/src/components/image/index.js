var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Image } from 'react-native';
import { convertPercentageToPx } from '../../utils/commonUtils';
const ASImage = (props) => {
    const { source, width = 100, height = 100, style, resizeMode = 'cover', roundImageSize = 0 } = props, restprops = __rest(props, ["source", "width", "height", "style", "resizeMode", "roundImageSize"]);
    const imageSource = typeof source === 'string' && (source === null || source === void 0 ? void 0 : source.startsWith('http')) ? { uri: source } : source;
    const roundImageSizeValue = convertPercentageToPx(roundImageSize, true);
    return (React.createElement(Image, Object.assign({ source: imageSource, style: [{
                width: roundImageSizeValue || width,
                height: roundImageSizeValue || height,
                borderRadius: roundImageSizeValue
            }, style], resizeMode: resizeMode }, restprops)));
};
export default ASImage;
//Note: ASImage example
/*
                        <ASImage source={'https:i.imgur.com/oLgjoWx.png'} style={{width: '35%', height: '20%'}}
                         resizeMode={'contain'}/>
* */
