export type ThemeColorProps = {
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
    inputLabel?: string;
    borderInput?: string;
    disable?: string;
};

export const colors: ThemeColorProps = {
    "primary": "#E4B700",
    "onPrimary": "#FFFFFF",
    "primaryFixed": "#000000",
    "onPrimaryFixedVariant": "#e7e6e6",
    "secondary": "#858585",
    "onSecondary": "#CCCCCC",
    "secondaryFixed": "#FCFCFC",
    "onSecondaryFixedVariant": "#00B0FF",
    "tertiary": "#b6b5b5",
    "onTertiary": "#999999",
    "tertiaryFixed": "#010101",
    "onTertiaryFixedVariant": "#2c2c2c",
    "error": "#FF0000",
    "onError": "#D32F2F",
    "errorContainer": "#f81010",
    "outline": "#4F4F4F",
    "background": "#f3f3f3",
    "surface": "#343434",
    "onSurface": "#666666",
    "surfaceVariant": "#FAF9F5",
    "accent1": "#919090",
    "accent2": "#00BA88",
    "accent3": "#0579cc",
    "accent4": "#696969",
    "accent5": "transparent",
    "inputLabel": "#666666",
    "borderInput": "#C4C4C4",
    "disable": "#999999"
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
