import React, { ReactNode } from 'react';
import { ThemeContextData, ThemeProps } from './context';
export type ProviderProps = {
    children: ReactNode;
    theme: ThemeProps;
    i18n?: any;
};
export declare const createThemeData: (theme: ThemeProps) => ThemeContextData;
export declare const ThemeProvider: (props: ProviderProps) => React.JSX.Element;
export declare const useThemeColors: () => import("../../utils/colors").ThemeColorProps;
export declare const useThemeFonts: () => import("../../utils/fonts").ThemeFontProps | undefined;
