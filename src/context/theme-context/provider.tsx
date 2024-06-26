import {defaultsDeep} from 'lodash';
import React, {ReactNode, useContext} from 'react';
import {defaultTheme, ThemeContext, ThemeContextData, ThemeProps, useThemeContextValue} from './context';
import {colors} from '../../utils/colors'
import {fonts} from '../../utils/fonts'

export type ProviderProps = {
    children: ReactNode;
    theme: ThemeProps;
    i18n?: any;
};

export const createThemeData = (theme: ThemeProps): ThemeContextData => {
    const _fonts = defaultsDeep(theme.fonts, fonts);
    const _colors = defaultsDeep(theme.colors, colors);
    return defaultsDeep(theme, defaultTheme(_fonts, _colors));
};

export const ThemeProvider = (props: ProviderProps) => {
    const {children, theme, i18n} = props;
    const themeContextData = useThemeContextValue(theme, i18n);

    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeColors = () => useContext(ThemeContext).colors;
export const useThemeFonts = () => useContext(ThemeContext).fonts;
