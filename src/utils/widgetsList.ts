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

    private static getReturnValue(attributeValue: any): string {
        let result: any

        switch (typeof attributeValue) {
            case 'function':
                if (typeof attributeValue?.() === 'string') {
                    result = `{${attributeValue?.()}}`
                } else {
                    result = `{${attributeValue}}`
                }
                break
            case 'boolean':
            case 'number':
                result = `{${attributeValue}}`
                break
            case 'string':
                result = `{"${attributeValue}"}`
                break
            case 'object':
                result = `{${JSON.stringify(attributeValue)}}`
                break
            default:
                result = `{"${attributeValue}"}`
                break
        }

        return result
    }

    private static getWidgetAttributes(attributes: any, widgetName?: string): string {
        let result: string = ''
        const atrributesObj = {...attributes}
        if (atrributesObj?.children) {
            delete atrributesObj['children']
        }

        //Remove the label attribute from ASText, because it's used as children
        if (widgetName === 'ASText') {
            delete atrributesObj['label']
        }

        for (let key in atrributesObj) {
            let attributeValue = atrributesObj[key]

            if (key === 'validationSchema') {
                attributeValue = ASWidgetsList.generateValidationSchema(attributeValue)
                result += ` ${key}=${attributeValue}`
                continue
            }
            if (key === 'initialValues') {
                result += ` ${key}={ ${JSON.stringify(attributeValue) }}`
                continue
            }

            attributeValue = ASWidgetsList.getReturnValue(attributeValue)
            result += ` ${key}=${attributeValue}`
        }

        return result
    }

    private static returnWidgetArrayOrString(attributes: any): string {
        // Return a string if children is an array joined by ''
        // and a string if children is a string
        return Array.isArray(attributes?.children) ? attributes?.children.join('') : attributes?.children
    }

    private static getWidgetString(widgetName: any, attributes: any): string {
        //Handle logic for ASFormValidation
        if (widgetName === 'ASFormValidation') {
            return `<ASFormValidation${ASWidgetsList.getWidgetAttributes(attributes)}>
                         {(formikProps: FormikProps<any>)=>(
                            <>${ASWidgetsList.returnWidgetArrayOrString(attributes)}</>
                         )}
                    </ASFormValidation>`
        }

        //Handle logic for ASText
        if (widgetName === 'ASText') {
            // ASText will use label:string as children
            return `<ASText${ASWidgetsList.getWidgetAttributes(attributes, 'ASText')}>
                        ${attributes?.label || attributes?.children}
                    </ASText>`
        }

        //If widgets has children then return a wrapper else return a tag
        if (attributes?.children) {
            return `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes)}>
                        ${ASWidgetsList.returnWidgetArrayOrString(attributes)}
                    </${widgetName}>`
        } else {
            return `<${widgetName}${ASWidgetsList.getWidgetAttributes(attributes)}/>`
        }
    }

    public getWidgets(): WidgetsList {
        return {
            ASContainer: (attributes: ASContainerProps) => ASWidgetsList.getWidgetString('ASContainer', attributes),
            ASText: (attributes: ASTextProps) => ASWidgetsList.getWidgetString('ASText', {
                label: attributes?.children,
                ...attributes,
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
