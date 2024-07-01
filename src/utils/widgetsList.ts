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
  ASFormProps,
  ASImageProps,
  ASListTileProps,
  ASListViewProps,
  ASLoadingIndicatorProps,
  ASLoadingScreenProps,
  ASPageViewProps,
  ASPasswordTextField,
  ASPasswordTextFieldProps,
  ASPinProps,
  ASPopUpProps,
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
  ASWrapProps,
  E6TransactionHistoryListViewProps,
  ASSwipeButtonProps,
  ASIconButton,
  ASIconButtonProps,
} from "../../index";

export type WidgetsName = keyof WidgetsList;

export type WidgetsList = {
  ASContainer: (attributes: ASContainerProps) => string;
  ASText: (attributes: ASTextProps) => string;
  ASButton: (attributes: ASButtonProps) => string;
  ASTextField: (attributes: ASTextFieldProps) => string;
  ASColumn: (attributes: ASColumnProps) => string;
  ASRow: (attributes: ASRowProps) => string;
  ASSpacer: (attributes: ASSpacerProps) => string;
  ASDivider: (attributes: ASDividerProps) => string;
  ASVerticalDivider: (attributes: ASVerticalDividerProps) => string;
  ASForm: (attributes: ASFormProps) => string;
  ASRichText: (attributes: ASRichTextProps) => string;
  ASImage: (attributes: ASImageProps) => string;
  ASDropDown: (attributes: ASDropDownProps) => string;
  ASExpandableText: (attributes: ASExpandableTextProps) => string;
  ASWrap: (attributes: ASWrapProps) => string;
  ASSwitch: (attributes: ASSwitchProps) => string;
  ASCheckBox: (attributes: ASCheckBoxProps) => string;
  ASProgressBar: (attributes: ASProgressBarProps) => string;
  ASStack: (attributes: ASStackProps) => string;
  ASListView: (attributes: ASListViewProps) => string;
  ASCircleChart: (attributes: ASCircleChartProps) => string;
  ASBadge: (attributes: ASBadgeProps) => string;
  ASPageView: (attributes: ASPageViewProps) => string;
  ASListTile: (attributes: ASListTileProps) => string;
  ASRadioButton: (attributes: ASRadioButtonProps) => string;
  ASSlider: (attributes: ASSliderProps) => string;
  ASCounter: (attributes: ASCounterProps) => string;
  ASChoiceChips: (attributes: ASChoiceChipsProps) => string;
  ASCalendar: (attributes: ASCalendarProps) => string;
  ASTimer: (attributes: ASTimerProps) => string;
  ASPin: (attributes: ASPinProps) => string;
  ASPasswordTextField: (attributes: ASPasswordTextFieldProps) => string;
  ASPopUp: (attributes: ASPopUpProps) => string;
  ASLoadingScreen: (attributes: ASLoadingScreenProps) => string;
  ASLoadingIndicator: (attributes: ASLoadingIndicatorProps) => string;
  ASSwipeButton: (attributes: ASSwipeButtonProps) => string;
  // E6 custom widget
  E6TransactionHistoryListView: (
    attributes: E6TransactionHistoryListViewProps
  ) => string;
  ASIconButton: (attributes: ASIconButtonProps) => string;
};

export class ASWidgetsList {
  constructor() {}

  private static getReturnValue(attributeValue: any): string {
    let result: any;
    switch (typeof attributeValue) {
      case "function":
        if (typeof attributeValue?.() === "string") {
          result = `{${attributeValue?.()}}`;
        } else {
          result = `{${attributeValue}}`;
        }
        break;
      case "boolean":
      case "number":
        result = `{${attributeValue}}`;
        break;
      case "string":
        result = `{"${attributeValue}"}`;
        break;
      case "object":
        // if(Array.isArray(attributeValue)){
        //     result = `{[${JSON.stringify(attributeValue)}]}`
        // }else{
        result = `{${JSON.stringify(attributeValue)}}`;
        // }
        break;
      default:
        result = `{"${attributeValue}"}`;
        break;
    }

    return result;
  }

  private static getWidgetAttributes(
    attributes: any,
    widgetName?: string
  ): string {
    let result: string = "";
    const atrributesObj: any = { ...attributes };

    if (atrributesObj?.children) {
      delete atrributesObj["children"];
    }

    // Remove the label attribute from ASText, because it's used as children
    if (widgetName === "ASText") {
      delete atrributesObj["label"];
    }

    // Loop through attributes list and add properties / attributes to widget
    for (let key in atrributesObj) {
      let attributeValue = atrributesObj[key];
      if (
        key === "validationRules" ||
        key === "validationRule" ||
        key === "initialValues"
      ) {
        continue;
      }

      // All the widgets inside ASForm
      if (key === "formWidgets") {
        const formWidgetsList = attributeValue;
        const validationStringArray: any[] = [];
        const initialValues: any = {};

        for (const formWidgetItem of formWidgetsList) {
          if (
            !Array.isArray(formWidgetItem?.validationRules) ||
            formWidgetItem?.validationRules?.length < 1
          ) {
            continue;
          }

          let validation: string = `Yup`;
          const initialValueItem =
            atrributesObj.initialValues[formWidgetItem.name];
          initialValues[formWidgetItem.name] = initialValueItem
            ? `${initialValueItem} || ''`
            : `''`;

          if (formWidgetItem?.dataType) {
            validation += `.${formWidgetItem?.dataType}()`;
          }

          for (const validationRule of formWidgetItem.validationRules) {
            validation += `.${validationRule.type}${
              validationRule.errorMessage
                ? `('${validationRule.errorMessage}')`
                : "()"
            }`;
          }
          validationStringArray.push(`${formWidgetItem.name}:${validation}`);
        }

        const validationSchema = `Yup.object().shape({
                    ${validationStringArray.join(",")}
                })`;
        result += ` validationSchema={${validationSchema}}`;
        result += ` initialValues={ ${JSON.stringify(initialValues).replace(
          /"/g,
          ""
        )}}`;
        //console.log('\nklsjhjbhiybfg----',  JSON.stringify(validationSchema), '\n++++++', JSON.stringify(initialValues) , '\n-----', JSON.stringify(formWidgetsList))
        continue;
      }

      // Get the return value for each property
      attributeValue = ASWidgetsList.getReturnValue(attributeValue);
      result += ` ${key}=${attributeValue}`;
    }

    return result;
  }

  private static returnWidgetArrayOrString(attributes: any): string {
    // Return a string if children is an array joined by ''
    // and a string if children is a string
    return Array.isArray(attributes?.children)
      ? attributes?.children.join("")
      : attributes?.children;
  }

  private static getWidgetString(widgetName: any, attributes: any): string {
    // Handle custom logic for widget that has children

    // Handle logic for ASForm
    if (widgetName === "ASForm") {
      const keys = Object.keys(attributes?.initialValues || {});
      const destructuredValueString = `const {${keys.join(", ")}} = values`;
      return `<ASForm${ASWidgetsList.getWidgetAttributes(attributes, "ASForm")}>
                         {(formikProps: FormikProps<any>)=> {
                             const {values, handleSubmit} = formikProps
                             ${destructuredValueString}
                                return (
                                    <>${ASWidgetsList.returnWidgetArrayOrString(
                                      attributes
                                    )}</>
                                 )
                             }
                         }
                    </ASForm>`;
    }

    // Handle logic for ASText
    if (widgetName === "ASText") {
      // ASText will use label:string as children
      const _textValue = attributes?.label || attributes?.children;
      // Text value is not a string (by checking startsWith character) then return object. EX: `${value}`
      // else return a string. Ex: `value`
      /*
       *    ${value} => value
       *    value => `value`
       *    This is ${value} => `This is ${value}`
       * */
      const labelValue =
        _textValue?.startsWith("${") || _textValue?.startsWith("{")
          ? `${_textValue.replace(/[$\{\}]/g, "")}`
          : `\`${_textValue}\``;
      return `<ASText${ASWidgetsList.getWidgetAttributes(attributes, "ASText")}>
                        {${labelValue}}
                    </ASText>`;
    }

    //If widgets has children then return a wrapper else return a tag
    if (attributes?.children) {
      return `<${widgetName}${ASWidgetsList.getWidgetAttributes(
        attributes,
        widgetName
      )}>
                        ${ASWidgetsList.returnWidgetArrayOrString(attributes)}
                    </${widgetName}>`;
    } else {
      return `<${widgetName}${ASWidgetsList.getWidgetAttributes(
        attributes,
        widgetName
      )}/>`;
    }
  }

  public getWidgets(): WidgetsList {
    return {
      ASContainer: (attributes: ASContainerProps) =>
        ASWidgetsList.getWidgetString("ASContainer", attributes),
      ASText: (attributes: ASTextProps) =>
        ASWidgetsList.getWidgetString("ASText", {
          label: attributes?.children || "",
          ...attributes,
        }),
      ASButton: (attributes: ASButtonProps) =>
        ASWidgetsList.getWidgetString("ASButton", attributes),
      ASTextField: (attributes: ASTextFieldProps) =>
        ASWidgetsList.getWidgetString("ASTextField", attributes),
      ASColumn: (attributes: ASColumnProps) =>
        ASWidgetsList.getWidgetString("ASColumn", attributes),
      ASRow: (attributes: ASRowProps) =>
        ASWidgetsList.getWidgetString("ASRow", attributes),
      ASSpacer: (attributes: ASSpacerProps) =>
        ASWidgetsList.getWidgetString("ASSpacer", attributes),
      ASDivider: (attributes: ASDividerProps) =>
        ASWidgetsList.getWidgetString("ASDivider", attributes),
      ASVerticalDivider: (attributes: ASVerticalDividerProps) =>
        ASWidgetsList.getWidgetString("ASVerticalDivider", attributes),
      ASForm: (attributes: ASFormProps) =>
        ASWidgetsList.getWidgetString("ASForm", attributes),
      ASRichText: (attributes: ASRichTextProps) =>
        ASWidgetsList.getWidgetString("ASRichText", attributes),
      ASImage: (attributes: ASImageProps) =>
        ASWidgetsList.getWidgetString("ASImage", attributes),
      ASDropDown: (attributes: ASDropDownProps) =>
        ASWidgetsList.getWidgetString("ASDropDown", attributes),
      ASExpandableText: (attributes: ASExpandableTextProps) =>
        ASWidgetsList.getWidgetString("ASExpandableText", attributes),
      ASWrap: (attributes: ASWrapProps) =>
        ASWidgetsList.getWidgetString("ASWrap", attributes),
      ASSwitch: (attributes: ASSwitchProps) =>
        ASWidgetsList.getWidgetString("ASSwitch", attributes),
      ASCheckBox: (attributes: ASCheckBoxProps) =>
        ASWidgetsList.getWidgetString("ASCheckBox", attributes),
      ASProgressBar: (attributes: ASProgressBarProps) =>
        ASWidgetsList.getWidgetString("ASProgressBar", attributes),
      ASStack: (attributes: ASStackProps) =>
        ASWidgetsList.getWidgetString("ASStack", attributes),
      ASListView: (attributes: ASListViewProps) =>
        ASWidgetsList.getWidgetString("ASListView", attributes),
      ASCircleChart: (attributes: ASCircleChartProps) =>
        ASWidgetsList.getWidgetString("ASCircleChart", attributes),
      ASBadge: (attributes: ASBadgeProps) =>
        ASWidgetsList.getWidgetString("ASBadge", attributes),
      ASPageView: (attributes: ASPageViewProps) =>
        ASWidgetsList.getWidgetString("ASPageView", attributes),
      ASListTile: (attributes: ASListTileProps) =>
        ASWidgetsList.getWidgetString("ASListTile", attributes),
      ASRadioButton: (attributes: ASRadioButtonProps) =>
        ASWidgetsList.getWidgetString("ASRadioButton", attributes),
      ASSlider: (attributes: ASSliderProps) =>
        ASWidgetsList.getWidgetString("ASSlider", attributes),
      ASCounter: (attributes: ASCounterProps) =>
        ASWidgetsList.getWidgetString("ASCounter", attributes),
      ASChoiceChips: (attributes: ASChoiceChipsProps) =>
        ASWidgetsList.getWidgetString("ASChoiceChips", attributes),
      ASCalendar: (attributes: ASCalendarProps) =>
        ASWidgetsList.getWidgetString("ASCalendar", attributes),
      ASTimer: (attributes: ASTimerProps) =>
        ASWidgetsList.getWidgetString("ASTimer", attributes),
      ASPin: (attributes: ASPinProps) =>
        ASWidgetsList.getWidgetString("ASPin", attributes),
      ASPasswordTextField: (attributes: ASPasswordTextFieldProps) =>
        ASWidgetsList.getWidgetString("ASPasswordTextField", attributes),
      ASPopUp: (attributes: ASPopUpProps) =>
        ASWidgetsList.getWidgetString("ASPopUp", attributes),
      ASLoadingScreen: (attributes: ASLoadingScreenProps) =>
        ASWidgetsList.getWidgetString("ASLoadingScreen", attributes),
      ASLoadingIndicator: (attributes: ASLoadingIndicatorProps) =>
        ASWidgetsList.getWidgetString("ASLoadingIndicator", attributes),
      ASSwipeButton: (attributes: ASSwipeButtonProps) =>
        ASWidgetsList.getWidgetString("ASSwipeButton", attributes),
      // E6 custom widget
      E6TransactionHistoryListView: (
        attributes: E6TransactionHistoryListViewProps
      ) =>
        ASWidgetsList.getWidgetString(
          "E6TransactionHistoryListView",
          attributes
        ),
      ASIconButton: (attributes: ASIconButtonProps) =>
        ASWidgetsList.getWidgetString("ASIconButton", attributes),
    };
  }

  public getWidgetByName(
    name: WidgetsName
  ): (attributes: any, children?: any) => string {
    return this.getWidgets()?.[name];
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
