import { ThemeColorProps } from "../../utils/colors";
import { ThemeFontProps } from '../../utils/fonts';
export declare const defaultTheme: (fonts: ThemeFontProps, colors: ThemeColorProps) => ThemeProps;
export type ThemeContextData = {
    colors: ThemeColorProps;
    fonts?: ThemeFontProps;
};
export type ThemeProps = {
    colors: ThemeColorProps;
    fonts?: ThemeFontProps;
};
export declare const themeDefaultValue: ThemeContextData;
export declare const ThemeContext: any;
export declare const useThemeContextValue: (initial: ThemeProps, initI18n?: any) => ThemeContextData;
