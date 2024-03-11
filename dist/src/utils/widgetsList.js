"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASWidgetsList = void 0;
class ASWidgetsList {
    constructor() {
    }
    static generateValidationSchema(validationSchema) {
        if (!validationSchema) {
            return '';
        }
        const fieldValidations = [];
        validationSchema.forEach((field) => {
            const fieldName = Object.keys(field)[0];
            const validations = field[fieldName];
            const existingFieldIndex = fieldValidations.findIndex((value) => value.includes(`${fieldName}:`));
            const fieldValidation = validations.map((validation) => {
                const validationKey = Object.keys(validation)[0];
                const validationValue = Array.isArray(validation[validationKey])
                    ? `${validationKey}('${validation[validationKey].join(', ')}')`
                    : `${validationKey}('${validation[validationKey]}')`;
                return `${validationValue}`;
            }).join('.');
            if (existingFieldIndex !== -1) {
                // Field already exists in fieldValidations, replace the existing entry
                fieldValidations[existingFieldIndex] = `  ${fieldName}: Yup.string().trim().${fieldValidation}`;
            }
            else {
                // Field doesn't exist, add it to fieldValidations
                fieldValidations.push(`  ${fieldName}: Yup.string().trim().${fieldValidation}`);
            }
        });
        return `{Yup.object().shape({\n${fieldValidations.join(',\n')}\n})}`;
    }
    ;
    static getWidgetAttributes(attributes) {
        let result = '';
        const atrributesObj = Object.assign({}, attributes);
        if (atrributesObj === null || atrributesObj === void 0 ? void 0 : atrributesObj.children) {
            delete atrributesObj['children'];
        }
        for (let key in atrributesObj) {
            let attributeValue = atrributesObj[key];
            if (key === 'validationSchema') {
                attributeValue = ASWidgetsList.generateValidationSchema(attributeValue);
                result += ` ${key}=${attributeValue}`;
                continue;
            }
            if (key === 'initialValues') {
                result += ` ${attributeValue}`;
                continue;
            }
            switch (typeof attributeValue) {
                case "function":
                case 'boolean':
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
    static getWidgetString(widgetName, attributes) {
        if (widgetName === 'ASFormValidation') {
            return `<ASFormValidation${ASWidgetsList.getWidgetAttributes(attributes)}>{(formikProps: FormikProps<any>)=>(<>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</>)}</ASFormValidation>`;
        }
        if (widgetName === 'ASText') {
            return `<ASText${ASWidgetsList.getWidgetAttributes(attributes)}>${(attributes === null || attributes === void 0 ? void 0 : attributes.label) || (attributes === null || attributes === void 0 ? void 0 : attributes.children)}</ASText>`;
        }
        return (attributes === null || attributes === void 0 ? void 0 : attributes.children) ? `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes === null || attributes === void 0 ? void 0 : attributes.children}</${widgetName}>` : `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes)}/>`;
    }
    getWidgets() {
        return {
            ASContainer: (attributes) => ASWidgetsList.getWidgetString('ASContainer', attributes),
            ASText: (attributes) => ASWidgetsList.getWidgetString('ASText', Object.assign(Object.assign({}, attributes), { label: attributes === null || attributes === void 0 ? void 0 : attributes.children })),
            ASButton: (attributes) => ASWidgetsList.getWidgetString('ASButton', attributes),
            ASTextField: (attributes) => ASWidgetsList.getWidgetString('ASTextField', attributes),
            ASColumn: (attributes) => ASWidgetsList.getWidgetString('ASColumn', attributes),
            ASRow: (attributes) => ASWidgetsList.getWidgetString('ASRow', attributes),
            ASSpacer: (attributes) => ASWidgetsList.getWidgetString('ASSpacer', attributes),
            ASDivider: (attributes) => ASWidgetsList.getWidgetString('ASDivider', attributes),
            ASVerticalDivider: (attributes) => ASWidgetsList.getWidgetString('ASVerticalDivider', attributes),
            ASFormValidation: (attributes) => ASWidgetsList.getWidgetString('ASFormValidation', attributes),
            ASRichText: (attributes) => ASWidgetsList.getWidgetString('ASRichText', attributes),
            ASImage: (attributes) => ASWidgetsList.getWidgetString('ASImage', attributes),
            ASDropdown: (attributes) => ASWidgetsList.getWidgetString('ASDropdown', attributes),
            ASExpandableText: (attributes) => ASWidgetsList.getWidgetString('ASExpandableText', attributes),
            ASWrap: (attributes) => ASWidgetsList.getWidgetString('ASWrap', attributes),
            ASSwitch: (attributes) => ASWidgetsList.getWidgetString('ASSwitch', attributes),
            ASCheckBox: (attributes) => ASWidgetsList.getWidgetString('ASCheckBox', attributes),
            ASProgressBar: (attributes) => ASWidgetsList.getWidgetString('ASProgressBar', attributes),
            ASStack: (attributes) => ASWidgetsList.getWidgetString('ASStack', attributes),
            ASListView: (attributes) => ASWidgetsList.getWidgetString('ASListView', attributes),
            ASCircleChart: (attributes) => ASWidgetsList.getWidgetString('ASCircleChart', attributes),
            ASBadge: (attributes) => ASWidgetsList.getWidgetString('ASBadge', attributes),
            ASPageView: (attributes) => ASWidgetsList.getWidgetString('ASPageView', attributes),
            ASListTile: (attributes) => ASWidgetsList.getWidgetString('ASListTile', attributes),
            ASRadioButton: (attributes) => ASWidgetsList.getWidgetString('ASRadioButton', attributes),
            ASSlider: (attributes) => ASWidgetsList.getWidgetString('ASSlider', attributes),
            ASCounter: (attributes) => ASWidgetsList.getWidgetString('ASCounter', attributes),
            ASChoiceChips: (attributes) => ASWidgetsList.getWidgetString('ASChoiceChips', attributes),
            ASCalendar: (attributes) => ASWidgetsList.getWidgetString('ASCalendar', attributes),
            ASTimer: (attributes) => ASWidgetsList.getWidgetString('ASTimer', attributes),
            ASPin: (attributes) => ASWidgetsList.getWidgetString('ASPin', attributes),
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
