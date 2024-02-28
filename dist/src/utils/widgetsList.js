"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASWidgetsList = void 0;
// export const ASWidgetsList =()=> {
//     const getWidget = ()=>{
//         console.log('aosdujhfdsf', )
//     }
//
//     return {getWidget}
// }
class ASWidgetsList {
    constructor() {
    }
    static getWidgetAttributes(attributes) {
        let result = '';
        const atrributesObj = Object.assign({}, attributes);
        if (atrributesObj === null || atrributesObj === void 0 ? void 0 : atrributesObj.children) {
            delete atrributesObj['children'];
        }
        for (let key in atrributesObj) {
            let attributeValue = atrributesObj[key];
            switch (typeof attributeValue) {
                case 'number':
                    attributeValue = `{${attributeValue}}`;
                    break;
                case 'string':
                    attributeValue = `{"${attributeValue}"}`;
                    break;
                case 'object':
                    attributeValue = `{${JSON.stringify(attributeValue)}}`;
                    break;
                default:
                    attributeValue = `{"${attributeValue}"}`;
                    break;
            }
            result += ` ${key}=${attributeValue}`;
        }
        return result;
    }
    getWidgets() {
        return {
            ASContainer: (attributes) => `<ASContainer${ASWidgetsList.getWidgetAttributes(attributes)}>\n${attributes === null || attributes === void 0 ? void 0 : attributes.children}\n</ASContainer>`,
            ASText: (attributes) => `<ASText${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASText>`,
            ASButton: (attributes) => `<ASButton${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASButton>`,
            ASTextField: (attributes) => `<ASTextField${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASColumn: (attributes) => `<ASColumn${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASColumn>`,
            ASRow: (attributes) => `<ASRow${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASRow>`,
            ASSpacer: (attributes) => `<ASSpacer${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASDivider: (attributes) => `<ASDivider${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASVerticalDivider: (attributes) => `<ASVerticalDivider${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASFormValidation: (attributes) => `<ASFormValidation${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASFormValidation>`,
            ASRichText: (attributes) => `<ASRichText${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASRichText>`,
            ASImage: (attributes) => `<ASImage${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASDropdown: (attributes) => `<ASDropdown${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASExpandableText: (attributes) => `<ASExpandableText${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASWrap: (attributes) => `<ASWrap${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASWrap>`,
            ASSwitch: (attributes) => `<ASSwitch${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCheckBox: (attributes) => `<ASCheckBox${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASProgressBar: (attributes) => `<ASProgressBar${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASStack: (attributes) => `<ASStack${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASStack>`,
            ASListView: (attributes) => `<ASListView${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCircleChart: (attributes) => `<ASCircleChart${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASCircleChart>`,
            ASBadge: (attributes) => `<ASBadge${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</ASBadge>`,
            ASPageView: (attributes) => `<ASPageView${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASListTile: (attributes) => `<ASListTile${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASRadioButton: (attributes) => `<ASRadioButton${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASSlider: (attributes) => `<ASSlider${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCounter: (attributes) => `<ASCounter${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASChoiceChips: (attributes) => `<ASChoiceChips${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCalendar: (attributes) => `<ASCalendar${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASTimer: (attributes) => `<ASTimer${ASWidgetsList.getWidgetAttributes(attributes)}/>`
        };
    }
    getWidgetByName(name) {
        var _a;
        return (_a = this.getWidgets()) === null || _a === void 0 ? void 0 : _a[name];
    }
}
exports.ASWidgetsList = ASWidgetsList;
// const a = new ASWidgetsList()
// const asText = a.getWidgets().ASText({
//     children: 'haha',
//     style: {fontSize: 12},
//     numberOfLines: 1,
//     ellipsizeMode: "tail"
// },)
// const asContainer = a.getWidgetByName('ASContainer')({children: asText, style: {flex: 1}})
//
// console.log('RESULT WIDGET:\n', asContainer , '\n')
// <ASContainer style={{"flex":1}}>
// <ASText style={{"fontSize":12}} numberOfLines={1} ellipsizeMode={"tail"}>haha</ASText>
// </ASContainer>
//  ts-node --esm  /Users/huacatluong/101digital/generator-app/app-studio-widgets/src/utils/WidgetsList.ts
