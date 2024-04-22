import React, {createContext, useMemo, useState} from 'react'
import {ThemeColorProps} from "../../utils/colors";
import {ThemeFontProps} from '../../utils/fonts';
import {colors} from '../../utils/colors'
import {fonts} from '../../utils/fonts'

export const defaultTheme = (fonts: ThemeFontProps, colors: ThemeColorProps): ThemeProps => {
    return {
        colors: colors,
        fonts: fonts,
    };
};

export type ThemeContextData = {
    colors: ThemeColorProps;
    fonts?: ThemeFontProps;
}

export type ThemeProps = {
    colors: ThemeColorProps;
    fonts?: ThemeFontProps;
};

export const themeDefaultValue: ThemeContextData = {
    colors: colors,
    fonts: fonts,
};

export const ThemeContext = createContext<ThemeContextData>(themeDefaultValue);

export const useThemeContextValue = (initial: ThemeProps, initI18n?: any): ThemeContextData => {
    const [colors] = useState<ThemeColorProps>(initial.colors ?? {});
    const [fonts] = useState<ThemeFontProps>(initial.fonts ?? {});

    return useMemo(
        () => ({
            colors,
            fonts
        }),
        [
            colors,
            fonts
        ]
    );
}
