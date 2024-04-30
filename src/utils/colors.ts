export type ThemeColorProps = {
    primaryColor?: string;
    transparent?: string;
    backgroundColor?: string;
    borderColor?: string;
    black?: string;
    white?: string;
    lightWhite?: string;
    gray80?: string;
    gray400?: string;
    black900?: string;
    black800?: string;
    black700?: string;
    black500?: string;
    offWhite?: string;
    textColor?: string;
    buttonColor?: string;
    disabledButtonColor?: string;
    disabledTextColor?: string;
    buttonTextColor?: string;
    buttonSimpleTextColor?: string;
    textFieldTextColor?: string;
    placeholderTextColor?: string;
    textFieldBackgroundColor?: string;
    textFieldErrorColor?: string;
    textFieldLabelColor?: string;
    textFieldActiveBorderColor?: string;
    textFieldInActiveBorderColor?: string;
    textFieldErrorBorderColor?: string;
    badgeBackgroundColor?: string;
    badgeBorderColor?: string;
    checkboxTintColor?: string;
    circleChartStrokeColor?: string;
    dividerColor?: string;
    switchOnColor?: string;
    switchOffColor?: string;
    tickRadioButtonBackgroundColor?: string;
    progressBarCurrentColor?: string;


    ////////
    primary?: string;
    onPrimary?: string;
    primaryFixed?: string;
    onPrimaryFixedVariant?: string;
    secondary?: string;
    onSecondary?: string;
    secondaryFixed?: string;
    onSecondaryFixedVariant?: string;
    tertiary?: string;
    onTertiary?: string;
    tertiaryFixed?: string;
    onTertiaryFixedVariant?: string;
    error?: string;
    onError?: string;
    errorContainer?: string;
    outline?: string;
    background?: string;
    surface?: string;
    onSurface?: string;
    surfaceVariant?: string;
    accent1?: string;
    accent2?: string;
    accent3?: string;
    accent4?: string;
    accent5?: string;

};

export const colors: ThemeColorProps = {
    "primary": "#E4B700",
    "onPrimary": "#FFFFFF",
    "primaryFixed": "#000000",
    "onPrimaryFixedVariant": "#F5F5F5",
    "secondary": "#858585",
    "onSecondary": "#CCCCCC",
    "secondaryFixed": "#FCFCFC",
    "onSecondaryFixedVariant": "#00B0FF",
    "tertiary": "#CCCCCC",
    "onTertiary": "#999999",
    "tertiaryFixed": "#010101",
    "onTertiaryFixedVariant": "#1A1A1A",
    "error": "#FF0000",
    "onError": "#D32F2F",
    "errorContainer": "#FF0000",
    "outline": "#4F4F4F",
    "background": "#f3f3f3",
    "surface": "#343434",
    "onSurface": "#666666",
    "surfaceVariant": "#FAF9F5",
    "accent1": "transparent",
    "accent2": "#00BA88",
    "accent3": "transparent",
    "accent4": "#696969",
    "accent5": "#e1e1e1",






    //////////////
    // Main colors
    primaryColor: '#0073F0',
    transparent: 'transparent',
    backgroundColor: '#DEDEDE',
    borderColor: '#CCCCCC',

    // Colors
    black: '#000000',
    white: '#FFFFFF',
    lightWhite: '#F5F5F5',
    gray80: '#CCCCCC',
    gray400: '#999999',
    black900: '#010101',
    black800: '#1A1A1A',
    black700: '#343434',
    black500: '#666666',
    offWhite: '#FCFCFC',

    // Text
    textColor: '#000000',

    // Button
    buttonColor: '#1B1B1B',
    disabledButtonColor: '#CCCCCC',
    disabledTextColor: '#666666',
    buttonTextColor: '#343434',
    buttonSimpleTextColor: '#343434',

    // Textfield
    textFieldTextColor: '#343434',
    placeholderTextColor: '#C4C4C4',
    textFieldBackgroundColor: '#FCFCFC',
    textFieldErrorColor: '#FF0000',
    textFieldLabelColor: '#999999',
    textFieldActiveBorderColor: '#0073F0',
    textFieldInActiveBorderColor: '#E6E6E6',
    textFieldErrorBorderColor: '#D32F2F',

    // Badge
    badgeBackgroundColor: 'rgb(147,239,129)',
    badgeBorderColor: 'rgb(108,199,91)',

    // Checkbox
    checkboxTintColor: '#0073F0',

    // Circle chart
    circleChartStrokeColor: '#4F4F4F',

    // Divider
    dividerColor: '#666666',

    // Switch
    switchOnColor: '#00BA88',
    switchOffColor: '#999999',

    // Radio button
    tickRadioButtonBackgroundColor: '#FAF9F5',

    // Progress bar
    progressBarCurrentColor: '#00BA88'
};
export const rgbToHex = (color: string) => {
    const a = color.replace(/[^\d,]/g, '').split(',');
    return '#' + ((1 << 24) + (+a[0] << 16) + (+a[1] << 8) + +a[2]).toString(16).slice(1);
};
export const addAlpha = (color: string, opacity: number) => {
    if (!color.startsWith('#')) {
        color = rgbToHex(color);
    }
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16)?.toUpperCase();
};
