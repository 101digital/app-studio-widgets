import { ASBadgeProps, ASButtonProps, ASCalendarProps, ASCheckBoxProps, ASChoiceChipsProps, ASCircleChartProps, ASColumnProps, ASContainerProps, ASCounterProps, ASDividerProps, ASDropDownProps, ASExpandableTextProps, ASFormProps, ASImageProps, ASListTileProps, ASListViewProps, ASLoadingIndicatorProps, ASLoadingScreenProps, ASPageViewProps, ASPasswordTextFieldProps, ASPinProps, ASPopUpProps, ASProgressBarProps, ASRadioButtonProps, ASRichTextProps, ASRowProps, ASSliderProps, ASSpacerProps, ASStackProps, ASSwitchProps, ASTextFieldProps, ASTextProps, ASTimerProps, ASVerticalDividerProps, ASWrapProps, E6TransactionHistoryListViewProps, ASSwipeButtonProps, ASIconButtonProps, TabsProps, ASTabViewProps, ASAppBarProps, ASDatePickerProps } from "../../index";
import { ASFloatingActionButtonProps } from "../components/floatingActionButton";
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
    ASDatePicker: (attributes: ASDatePickerProps) => string;
    ASLoadingScreen: (attributes: ASLoadingScreenProps) => string;
    ASLoadingIndicator: (attributes: ASLoadingIndicatorProps) => string;
    ASSwipeButton: (attributes: ASSwipeButtonProps) => string;
    E6TransactionHistoryListView: (attributes: E6TransactionHistoryListViewProps) => string;
    ASIconButton: (attributes: ASIconButtonProps) => string;
    ASTabs: (attributes: TabsProps) => string;
    ASTabView: (attributes: ASTabViewProps) => string;
    ASAppBar: (attributes: ASAppBarProps) => string;
    ASFloatingActionButton: (attributes: ASFloatingActionButtonProps) => string;
};
export declare class ASWidgetsList {
    private static _initialValues;
    constructor();
    private static getReturnValue;
    private static getWidgetAttributes;
    private static returnWidgetArrayOrString;
    private static getWidgetString;
    getWidgets(): WidgetsList;
    getWidgetByName(name: WidgetsName): (attributes: any, children?: any) => string;
}
