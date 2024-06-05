"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASWidgetsList = void 0;
class ASWidgetsList {
    constructor() {
    }
    static getReturnValue(attributeValue) {
        let result;
        switch (typeof attributeValue) {
            case 'function':
                if (typeof (attributeValue === null || attributeValue === void 0 ? void 0 : attributeValue()) === 'string') {
                    result = `{${attributeValue === null || attributeValue === void 0 ? void 0 : attributeValue()}}`;
                }
                else {
                    result = `{${attributeValue}}`;
                }
                break;
            case 'boolean':
            case 'number':
                result = `{${attributeValue}}`;
                break;
            case 'string':
                result = `{"${attributeValue}"}`;
                break;
            case 'object':
                if (Array.isArray(attributeValue)) {
                    result = `{[${JSON.stringify(attributeValue)}]}`;
                }
                else {
                    result = `{${JSON.stringify(attributeValue)}}`;
                }
                break;
            default:
                result = `{"${attributeValue}"}`;
                break;
        }
        return result;
    }
    static getWidgetAttributes(attributes, widgetName) {
        var _a;
        let result = '';
        const atrributesObj = Object.assign({}, attributes);
        if (atrributesObj === null || atrributesObj === void 0 ? void 0 : atrributesObj.children) {
            delete atrributesObj['children'];
        }
        // Remove the label attribute from ASText, because it's used as children
        if (widgetName === 'ASText') {
            delete atrributesObj['label'];
        }
        // Loop through attributes list and add properties / attributes to widget
        for (let key in atrributesObj) {
            let attributeValue = atrributesObj[key];
            if (key === 'validationRules' || key === 'validationRule' || key === 'initialValues') {
                continue;
            }
            // All the widgets inside ASFormValidation
            if (key === 'formWidgets') {
                const formWidgetsList = attributeValue;
                const validationStringArray = [];
                const initialValues = {};
                for (const formWidgetItem of formWidgetsList) {
                    if (!Array.isArray(formWidgetItem === null || formWidgetItem === void 0 ? void 0 : formWidgetItem.validationRules) || ((_a = formWidgetItem === null || formWidgetItem === void 0 ? void 0 : formWidgetItem.validationRules) === null || _a === void 0 ? void 0 : _a.length) < 1) {
                        continue;
                    }
                    let validation = `Yup`;
                    const initialValueItem = atrributesObj.initialValues[formWidgetItem.name];
                    initialValues[formWidgetItem.name] = initialValueItem ? `${initialValueItem} || ''` : `''`;
                    if (formWidgetItem === null || formWidgetItem === void 0 ? void 0 : formWidgetItem.dataType) {
                        validation += `.${formWidgetItem === null || formWidgetItem === void 0 ? void 0 : formWidgetItem.dataType}()`;
                    }
                    for (const validationRule of formWidgetItem.validationRules) {
                        validation += `.${validationRule.type}${validationRule.errorMessage ? `('${validationRule.errorMessage}')` : '()'}`;
                    }
                    validationStringArray.push(`${formWidgetItem.name}:${validation}`);
                }
                const validationSchema = `Yup.object().shape({
                    ${validationStringArray.join(',')}
                })`;
                result += ` validationSchema={${validationSchema}}`;
                result += ` initialValues={ ${JSON.stringify(initialValues).replace(/"/g, "")}}`;
                console.log('\nklsjhjbhiybfg----', JSON.stringify(validationSchema), '\n++++++', JSON.stringify(initialValues), '\n-----', JSON.stringify(formWidgetsList));
                continue;
            }
            // Get the return value for each property
            attributeValue = ASWidgetsList.getReturnValue(attributeValue);
            result += ` ${key}=${attributeValue}`;
        }
        return result;
    }
    static returnWidgetArrayOrString(attributes) {
        // Return a string if children is an array joined by ''
        // and a string if children is a string
        return Array.isArray(attributes === null || attributes === void 0 ? void 0 : attributes.children) ? attributes === null || attributes === void 0 ? void 0 : attributes.children.join('') : attributes === null || attributes === void 0 ? void 0 : attributes.children;
    }
    static getWidgetString(widgetName, attributes) {
        // Handle custom logic for widget that has children
        // Handle logic for ASFormValidation
        if (widgetName === 'ASFormValidation') {
            const keys = Object.keys((attributes === null || attributes === void 0 ? void 0 : attributes.initialValues) || {});
            const destructuredValueString = `const {${keys.join(', ')}} = values`;
            return `<ASFormValidation${ASWidgetsList.getWidgetAttributes(attributes, 'ASFormValidation')}>
                         {(formikProps: FormikProps<any>)=> {
                             const {values, handleSubmit} = formikProps
                             ${destructuredValueString}
                                return (
                                    <>${ASWidgetsList.returnWidgetArrayOrString(attributes)}</>
                                 )
                             }
                         }
                    </ASFormValidation>`;
        }
        // Handle logic for ASText
        if (widgetName === 'ASText') {
            // ASText will use label:string as children
            const _textValue = (attributes === null || attributes === void 0 ? void 0 : attributes.label) || (attributes === null || attributes === void 0 ? void 0 : attributes.children);
            // Text value is not a string (by checking startsWith character) then return object. EX: `${value}`
            // else return a string. Ex: `value`
            /*
            *    ${value} => value
            *    value => `value`
            *    This is ${value} => `This is ${value}`
            * */
            const labelValue = (_textValue === null || _textValue === void 0 ? void 0 : _textValue.startsWith('${')) || (_textValue === null || _textValue === void 0 ? void 0 : _textValue.startsWith('{')) ? `${_textValue.replace(/[$\{\}]/g, '')}` : `\`${_textValue}\``;
            return `<ASText${ASWidgetsList.getWidgetAttributes(attributes, 'ASText')}>
                        {${labelValue}}
                    </ASText>`;
        }
        //If widgets has children then return a wrapper else return a tag
        if (attributes === null || attributes === void 0 ? void 0 : attributes.children) {
            return `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes, widgetName)}>
                        ${ASWidgetsList.returnWidgetArrayOrString(attributes)}
                    </${widgetName}>`;
        }
        else {
            return `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes, widgetName)}/>`;
        }
    }
    getWidgets() {
        return {
            ASContainer: (attributes) => ASWidgetsList.getWidgetString('ASContainer', attributes),
            ASText: (attributes) => ASWidgetsList.getWidgetString('ASText', Object.assign({ label: (attributes === null || attributes === void 0 ? void 0 : attributes.children) || "" }, attributes)),
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
            ASDropDown: (attributes) => ASWidgetsList.getWidgetString('ASDropDown', attributes),
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
            ASPasswordTextField: (attributes) => ASWidgetsList.getWidgetString('ASPasswordTextField', attributes),
            ASPopUp: (attributes) => ASWidgetsList.getWidgetString('ASPopUp', attributes),
            ASLoadingScreen: (attributes) => ASWidgetsList.getWidgetString('ASLoadingScreen', attributes),
            ASLoadingIndicator: (attributes) => ASWidgetsList.getWidgetString('ASLoadingIndicator', attributes),
            ASSwipeButton: (attributes) => ASWidgetsList.getWidgetString('ASSwipeButton', attributes),
            // E6 custom widget
            E6TransactionHistoryListView: (attributes) => ASWidgetsList.getWidgetString('E6TransactionHistoryListView', attributes),
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
//     label: 'haha',
//     style: {fontSize: 12},
//     numberOfLines: 1,
//     ellipsizeMode: "tail"
// },)
// const asButton = a.getWidgets().ASButton({label: 'button', onPress: () => "onPressButton"})
// const spacer = a.getWidgets().ASSpacer({height: 10})
// const column = a.getWidgets().ASColumn({children: [asText, spacer, asButton]})
// const asContainer = a.getWidgetByName('ASContainer')({children: column, style: {flex: 1}})
// console.log('RESULT WIDGET:\n', asContainer, '\n')
//RESULT:
// <ASContainer style={{"flex":1}}>
//     <ASColumn>
//         <ASText style={{"fontSize":12}} numberOfLines={1} ellipsizeMode={"tail"} label={"haha"}>haha</ASText>
//         <ASSpacer height={10}/>
//          <ASButton label={"button"} onPress={onPressButton}/>
//     </ASColumn>
// </ASContainer>
//  ts-node --esm  /Users/huacatluong/101digital/generator-app/app-studio-widgets/src/utils/WidgetsList.ts
