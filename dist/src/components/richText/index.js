"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_parsed_text_1 = __importDefault(require("react-native-parsed-text"));
const theme_context_1 = require("../../context/theme-context");
const ASRichText = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { children, style, parse, childrenProps = { allowFontScaling: false }, testId = 'ASRichText' } = props || {};
    return (react_1.default.createElement(react_native_parsed_text_1.default, { style: [styles.textStyle, { color: colors.primaryFixed }, style], parse: parse, childrenProps: childrenProps, testID: testId }, children));
};
const styles = react_native_1.StyleSheet.create({
    textStyle: {
        fontSize: 16,
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
