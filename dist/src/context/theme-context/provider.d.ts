import { ReactNode } from 'react';
import { ThemeContextData, ThemeProps } from './context';
export type ProviderProps = {
    children: ReactNode;
    theme: ThemeProps;
    i18n?: any;
};
export declare const createThemeData: (theme: ThemeProps) => ThemeContextData;
export declare const ThemeProvider: (props: ProviderProps) => any;
export declare const useThemeColors: () => any;
export declare const useThemeFonts: () => any;
