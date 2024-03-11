import {
    ASBadgeProps,
    ASButtonProps,
    ASCalendarProps,
    ASCheckBoxProps,
    ASChoiceChipsProps,
    ASCircleChartProps,
    ASColumnProps,
    ASContainerProps,
    ASCounterProps,
    ASDividerProps,
    ASDropDownProps,
    ASExpandableTextProps,
    ASFormValidationProps,
    ASImageProps,
    ASListTileProps,
    ASListViewProps,
    ASPageViewProps,
    ASPinProps,
    ASProgressBarProps,
    ASRadioButtonProps,
    ASRichTextProps,
    ASRowProps,
    ASSliderProps,
    ASSpacerProps,
    ASStackProps,
    ASSwitchProps,
    ASTextFieldProps,
    ASTextProps,
    ASTimerProps,
    ASVerticalDividerProps,
    ASWrapProps
} from "../../index";

export type WidgetsName = keyof WidgetsList

export type WidgetsList = {
    ASContainer: (attributes: ASContainerProps) => string
    ASText: (attributes: ASTextProps) => string
    ASButton: (attributes: ASButtonProps) => string
    ASTextField: (attributes: ASTextFieldProps) => string
    ASColumn: (attributes: ASColumnProps) => string
    ASRow: (attributes: ASRowProps) => string
    ASSpacer: (attributes: ASSpacerProps) => string
    ASDivider: (attributes: ASDividerProps) => string
    ASVerticalDivider: (attributes: ASVerticalDividerProps) => string
    ASFormValidation: (attributes: ASFormValidationProps) => string
    ASRichText: (attributes: ASRichTextProps) => string
    ASImage: (attributes: ASImageProps) => string
    ASDropdown: (attributes: ASDropDownProps) => string
    ASExpandableText: (attributes: ASExpandableTextProps) => string
    ASWrap: (attributes: ASWrapProps) => string
    ASSwitch: (attributes: ASSwitchProps) => string
    ASCheckBox: (attributes: ASCheckBoxProps) => string
    ASProgressBar: (attributes: ASProgressBarProps) => string
    ASStack: (attributes: ASStackProps) => string
    ASListView: (attributes: ASListViewProps) => string
    ASCircleChart: (attributes: ASCircleChartProps) => string
    ASBadge: (attributes: ASBadgeProps) => string
    ASPageView: (attributes: ASPageViewProps) => string
    ASListTile: (attributes: ASListTileProps) => string
    ASRadioButton: (attributes: ASRadioButtonProps) => string
    ASSlider: (attributes: ASSliderProps) => string
    ASCounter: (attributes: ASCounterProps) => string
    ASChoiceChips: (attributes: ASChoiceChipsProps) => string
    ASCalendar: (attributes: ASCalendarProps) => string
    ASTimer: (attributes: ASTimerProps) => string
    ASPin: (attributes: ASPinProps) => string
}

export class ASWidgetsList {

    constructor() {
    }

    private static generateValidationSchema(validationSchema: any): string {
        if (!validationSchema) {
            return '';
        }
        const fieldValidations: string[] = [];
        validationSchema.forEach((field: any) => {
            const fieldName = Object.keys(field)[0];
            const validations = field[fieldName];
            const existingFieldIndex = fieldValidations.findIndex((value) => value.includes(`${fieldName}:`));
            const fieldValidation = validations.map((validation: any) => {
                const validationKey = Object.keys(validation)[0];
                const validationValue = Array.isArray(validation[validationKey])
                    ? `${validationKey}('${validation[validationKey].join(', ')}')`
                    : `${validationKey}('${validation[validationKey]}')`;
                return `${validationValue}`;
            }).join('.');
            if (existingFieldIndex !== -1) {
                // Field already exists in fieldValidations, replace the existing entry
                fieldValidations[existingFieldIndex] = `  ${fieldName}: Yup.string().trim().${fieldValidation}`;
            } else {
                // Field doesn't exist, add it to fieldValidations
                fieldValidations.push(`  ${fieldName}: Yup.string().trim().${fieldValidation}`);
            }
        });
        return `{Yup.object().shape({\n${fieldValidations.join(',\n')}\n})}`;
    };


    private static getWidgetAttributes(attributes: any): string {
        let result: string = ''
        const atrributesObj = {...attributes}
        if (atrributesObj?.children) {
            delete atrributesObj['children']
        }

        for (let key in atrributesObj) {
            let attributeValue = atrributesObj[key]

            if (key === 'validationSchema') {
                attributeValue = ASWidgetsList.generateValidationSchema(attributeValue)
                result += ` ${key}=${attributeValue}`
                continue
            }

            if (key === 'initialValues') {
                result += ` ${attributeValue}`
                continue
            }

            switch (typeof attributeValue) {
                case "function":
                case 'boolean':
                case 'number':
                    attributeValue = `{${attributeValue}}`
                    break
                case 'string':
                    attributeValue = `{"${attributeValue}"}`
                    break
                case 'object':
                    attributeValue = `{${JSON.stringify(attributeValue)}}`
                    break
                default:
                    attributeValue = `{"${attributeValue}"}`
                    break
            }
            result += ` ${key}=${attributeValue}`
        }

        return result
    }

    private static getWidgetString(widgetName: any, attributes: any): string {
        if (widgetName === 'ASFormValidation') {
            return `<ASFormValidation${ASWidgetsList.getWidgetAttributes(attributes)}>{(formikProps: FormikProps<any>)=>(<>${attributes?.children}</>)}</ASFormValidation>`
        }

        if (widgetName === 'ASText') {
            return `<ASText${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.label || attributes?.children}</ASText>`
        }

        if (attributes?.children) {
            return `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes)}>${Array.isArray(attributes?.children) ? attributes?.children.join('') : attributes?.children}</${widgetName}>`
        } else {
            return `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes)}/>`
        }
    }

    public getWidgets(): WidgetsList {
        return {
            ASContainer: (attributes: ASContainerProps) => ASWidgetsList.getWidgetString('ASContainer', attributes),
            ASText: (attributes: ASTextProps) => ASWidgetsList.getWidgetString('ASText', {
                ...attributes,
                label: attributes?.children
            }),
            ASButton: (attributes: ASButtonProps) => ASWidgetsList.getWidgetString('ASButton', attributes),
            ASTextField: (attributes: ASTextFieldProps) => ASWidgetsList.getWidgetString('ASTextField', attributes),
            ASColumn: (attributes: ASColumnProps) => ASWidgetsList.getWidgetString('ASColumn', attributes),
            ASRow: (attributes: ASRowProps) => ASWidgetsList.getWidgetString('ASRow', attributes),
            ASSpacer: (attributes: ASSpacerProps) => ASWidgetsList.getWidgetString('ASSpacer', attributes),
            ASDivider: (attributes: ASDividerProps) => ASWidgetsList.getWidgetString('ASDivider', attributes),
            ASVerticalDivider: (attributes: ASVerticalDividerProps) => ASWidgetsList.getWidgetString('ASVerticalDivider', attributes),
            ASFormValidation: (attributes: ASFormValidationProps) => ASWidgetsList.getWidgetString('ASFormValidation', attributes),
            ASRichText: (attributes: ASRichTextProps) => ASWidgetsList.getWidgetString('ASRichText', attributes),
            ASImage: (attributes: ASImageProps) => ASWidgetsList.getWidgetString('ASImage', attributes),
            ASDropdown: (attributes: ASDropDownProps,) => ASWidgetsList.getWidgetString('ASDropdown', attributes),
            ASExpandableText: (attributes: ASExpandableTextProps) => ASWidgetsList.getWidgetString('ASExpandableText', attributes),
            ASWrap: (attributes: ASWrapProps) => ASWidgetsList.getWidgetString('ASWrap', attributes),
            ASSwitch: (attributes: ASSwitchProps) => ASWidgetsList.getWidgetString('ASSwitch', attributes),
            ASCheckBox: (attributes: ASCheckBoxProps) => ASWidgetsList.getWidgetString('ASCheckBox', attributes),
            ASProgressBar: (attributes: ASProgressBarProps) => ASWidgetsList.getWidgetString('ASProgressBar', attributes),
            ASStack: (attributes: ASStackProps) => ASWidgetsList.getWidgetString('ASStack', attributes),
            ASListView: (attributes: ASListViewProps) => ASWidgetsList.getWidgetString('ASListView', attributes),
            ASCircleChart: (attributes: ASCircleChartProps) => ASWidgetsList.getWidgetString('ASCircleChart', attributes),
            ASBadge: (attributes: ASBadgeProps) => ASWidgetsList.getWidgetString('ASBadge', attributes),
            ASPageView: (attributes: ASPageViewProps) => ASWidgetsList.getWidgetString('ASPageView', attributes),
            ASListTile: (attributes: ASListTileProps) => ASWidgetsList.getWidgetString('ASListTile', attributes),
            ASRadioButton: (attributes: ASRadioButtonProps) => ASWidgetsList.getWidgetString('ASRadioButton', attributes),
            ASSlider: (attributes: ASSliderProps) => ASWidgetsList.getWidgetString('ASSlider', attributes),
            ASCounter: (attributes: ASCounterProps) => ASWidgetsList.getWidgetString('ASCounter', attributes),
            ASChoiceChips: (attributes: ASChoiceChipsProps) => ASWidgetsList.getWidgetString('ASChoiceChips', attributes),
            ASCalendar: (attributes: ASCalendarProps) => ASWidgetsList.getWidgetString('ASCalendar', attributes),
            ASTimer: (attributes: ASTimerProps) => ASWidgetsList.getWidgetString('ASTimer', attributes),
            ASPin: (attributes: ASPinProps) => ASWidgetsList.getWidgetString('ASPin', attributes),
        }
    }

    public getWidgetByName(name: WidgetsName): (attributes: any, children?: any) => string {
        return this.getWidgets()?.[name]
    }
}

// const a = new ASWidgetsList()
// const asText = a.getWidgets().ASText({
//     children: 'haha',
//     style: {fontSize: 12},
//     numberOfLines: 1,
//     ellipsizeMode: "tail"
// },)
// const spacer = a.getWidgets().ASSpacer({height: 10})
// const column = a.getWidgets().ASColumn({
//     children: [asText, spacer],
// },)
// const asContainer = a.getWidgetByName('ASContainer')({children: column, style: {flex: 1}})
//
// console.log('RESULT WIDGET:\n', asContainer, '\n')

//RESULT:
// <ASContainer style={{"flex":1}}>
//     <ASColumn>
//         <ASText style={{"fontSize":12}} numberOfLines={1} ellipsizeMode={"tail"} label={"haha"}>haha</ASText>
//         <ASSpacer height={10}/>
//     </ASColumn>
// </ASContainer>


//  ts-node --esm  /Users/huacatluong/101digital/generator-app/app-studio-widgets/src/utils/WidgetsList.ts
