"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const react_native_parsed_text_1 = __importDefault(require("react-native-parsed-text"));
const ASRichText = (props) => {
    const { children, style, parse, childrenProps = { allowFontScaling: false } } = props || {};
    return (react_1.default.createElement(react_native_parsed_text_1.default, { style: [styles.textStyle, style], parse: parse, childrenProps: childrenProps }, children));
};
const styles = react_native_1.StyleSheet.create({
    textStyle: {
        fontSize: 16,
        color: colors_1.colors.black,
    },
});
exports.default = ASRichText;
//NOTE:  ASRichText Example
/*
                <ASRichText parse={[
                    {
                        type: 'url', style: {
                            color: 'red',
                            textDecorationLine: 'underline',
                        }, onPress: (text: string, matchIndex: number) => {
                            console.log('type:::::::url ', text, matchIndex);

                        }
                    },
                    {
                        type: 'phone', style: {
                            color: 'blue',
                            textDecorationLine: 'underline',
                        }, onPress: () => {
                        }
                    },
                    {
                        type: 'email', style: {textDecorationLine: 'underline',}, onPress: () => {
                        }
                    },
                    {
                        pattern: /Bob|David/, style: {color: 'red'}, onPress: (text: string, matchIndex: number) => {
                            console.log('type:::::::Bob|David ', text, matchIndex);
                        }
                    },
                    {
                        pattern: /\[(@[^:]+):([^\]]+)\]/i,
                        style: {
                            color: 'green',
                            fontWeight: 'bold'
                        },
                        onPress: (text: string, matchIndex: number) => {
                            console.log('type:::::::pattern  renderText', text, matchIndex);
                        },
                        renderText: (matchingString: string, matches: any) => {
                            //matches => ["[@michel:5455345]", "@michel", "5455345"]
                            let pattern = /\[(@[^:]+):([^\]]+)\]/i;
                            let match = matchingString.match(pattern);

                            console.log('match::::::: ', match);
                            return `^^${match?.[1]}^^`;
                        }
                    },
                    {
                        pattern: /42/, style: {
                            fontSize: 42,
                            color: 'pink',
                        }
                    },
                    {pattern: /#(\w+)/, style: {fontStyle: 'italic',}},
                ]}>{`Hello this is an example of the ParsedText, links like http:www.google.com or http:www.facebook.com are
             clickable and phone number 444-555-6666 can call too.
             But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
             ["[@michel:5455345]
             And the magic number is 42!
             #react #react-native`}
                </ASRichText>
* */
