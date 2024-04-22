export type ThemeColorProps = {
  primaryColor?: string;
  transparent?: string;
  backgroundColor?: string;
  black?: string;
  white?: string;
  lightWhite?: string;
  gray80?: string;
  gray400?: string;
  black900?: string;
  black800?: string;
  black700: string;
  black500?: string;
  offWhite?: string;
  textColor?: string;
  buttonColor?: string;
  disabledButtonColor?: string;
  disabledTextColor?: string;
  buttonTextColor?: string;
  inputColor?: string;
  textFieldTextColor?: string;
  placeholderTextColor?: string;
  textFieldBackgroundColor?: string;
  textFieldErrorColor?: string;
  textFieldLabelColor?: string;
  badgeBackgroundColor?: string;
  badgeBorderColor?: string;
  checkboxTintColor?: string;
  circleChartStrokeColor?: string;
  dividerColor?: string;
  textFieldActiveBorderColor?: string;
  textFieldErrorBorderColor?: string;
  switchOnColor?: string;
  switchOffColor?: string;
  tickRadioButtonBackgroundColor?: string
  textFieldInActiveBorderColor?: string
  progressBarCurrentColor?: string
};

export const colors: ThemeColorProps = {
  // Main colors
  primaryColor: '#0073F0',
  transparent: 'transparent',
  backgroundColor: '#DEDEDE',

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
  disabledTextColor:'#666666',
  buttonTextColor: '#343434',

  // Textfield
  inputColor: '#858585',
  textFieldTextColor: '#343434',
  placeholderTextColor:'#C4C4C4',
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
  checkboxTintColor:'#0073F0',

  // Circle chart
  circleChartStrokeColor :'#4F4F4F',

  // Divider
  dividerColor: '#666666',

 // Switch
  switchOnColor:'#00BA88',
  switchOffColor:'#999999',

  // Radio button
  tickRadioButtonBackgroundColor: '#FAF9F5',

  // Progress bar
  progressBarCurrentColor:'#00BA88'
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
