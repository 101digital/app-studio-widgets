export type ThemeColorProps = {
    primaryColor: string;
    secondaryColor: string;
    inputTextColor?: string;
    primaryTextColor?: string;
    secondaryTextColor?: string;
    backgroundTextColor?: string;
    errorTextColor?: string;
    primaryButtonColor?: string;
    secondaryButtonColor?: string;
    primaryButtonLabelColor?: string;
    secondaryButtonLabelColor?: string;
    mainBackgroundColor?: string;
    secondaryBackgroundColor?: string;
    dividerColor?: string;
    appBarBackgroundColor?: string;
    appBarTextColor?: string;
    loadingIndicatorColor?: string;
    inActiveInputBorderColor?: string;
    activeInputBorderColor?: string;
    errorInputBorderColor?: string;
    backgroundSearchInput?: string;
    placeholderColor?: string;
    btnColor?: string;
    inputColor?: string;
    disable?: string;
    icon?: string;
    red?: string;
    disableTransparent?: string;
    headerTitleColor?: string;
    black?: string;
    white?: string;
    gray80?: string;
    lightShadeOfGray?: string;
    lightShadeOfBlue?: string;
    primaryBlackColor?: string;
    black0?: string;
    black50?: string;
    grayScale?: string;
    secondary?: string;
    lightGrayD?: string;
    primaryText?: string;
    primaryHifiColor?: string;
    emergencyCollectionColor?: string;
    vihicleCollectionColor?: string;
    housecollectionColor?: string;
    travelcollectionColor?: string;
    lightWhite?: string;
    lightWhite2?: string;
    gray400?: string;
    black900?: string;
    black800?: string;
    black700?: string;
    black500?: string;
    disabledButton?: string;
    backgroundColor?: string;
    deepBackgroundColor?: string;
    errorColor?: string;
    superlighterPrimaryColor?: string;
    neutral?: string;
    alertSubtitle?: string;
    offWhite?: string;
    offWhite2: string;
    primayEternalBloom200?: string;
    green?: string;
};
export declare const colors: ThemeColorProps;
export declare const rgbToHex: (color: string) => string;
export declare const addAlpha: (color: string, opacity: number) => string;
