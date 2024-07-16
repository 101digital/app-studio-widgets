import React, { useContext } from 'react';
import { StyleSheet, TextStyle, View, ViewStyle,Text } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { ThemeContext } from '../../context/theme-context';

export type ASSwipeButtonProps = {
  containerStyles?: ViewStyle;
  disabled?: boolean;
  disableResetOnTap?: boolean;
  disabledRailBackgroundColor?: string;
  disabledThumbIconBackgroundColor?: string;
  disabledThumbIconBorderColor?: string;
  enableReverseSwipe?: boolean;
  forceReset?: (reset: () => void) => void;
  height?: number | string;
  onSwipeFail?: () => void;
  onSwipeStart?: () => void;
  onSwipeSuccess?: () => void;
  railBackgroundColor?: string;
  railBorderColor?: string;
  railFillBackgroundColor?: string;
  railFillBorderColor?: string;
  railStyles?: ViewStyle;
  resetAfterSuccessAnimDelay?: number;
  resetAfterSuccessAnimDuration?: number;
  screenReaderEnabled?: boolean;
  shouldResetAfterSuccess?: boolean;
  swipeSuccessThreshold?: number;
  thumbIconBackgroundColor?: string;
  thumbIconBorderColor?: string;
  thumbIconComponent?: React.ReactNode;
  thumbIconImageSource?: string | number;
  thumbIconStyles?: ViewStyle;
  thumbIconWidth?: number;
  lebel?: string;
  titleColor?: string;
  titleFontSize?: number;
  titleMaxFontScale?: number;
  titleStyles?: TextStyle;
  width?: number | string;
};

const ASSwipeButton: React.FC<ASSwipeButtonProps> = (props) => {
  const { colors } = useContext(ThemeContext);
  const {
    containerStyles,
    disabled,
    disableResetOnTap,
    disabledRailBackgroundColor,
    disabledThumbIconBackgroundColor,
    disabledThumbIconBorderColor,
    enableReverseSwipe,
    forceReset,
    height,
    onSwipeFail,
    onSwipeStart,
    onSwipeSuccess,
    railBackgroundColor,
    railBorderColor,
    railFillBackgroundColor,
    railFillBorderColor,
    railStyles,
    resetAfterSuccessAnimDelay,
    resetAfterSuccessAnimDuration,
    screenReaderEnabled,
    shouldResetAfterSuccess,
    swipeSuccessThreshold,
    thumbIconBackgroundColor,
    thumbIconBorderColor,
    thumbIconComponent,
    thumbIconImageSource,
    thumbIconStyles,
    thumbIconWidth,
    lebel,
    titleColor,
    titleFontSize,
    titleMaxFontScale,
    titleStyles,
    width,
  } = props;

  return (
    <SwipeButton
      containerStyles={styles.containerStyles || containerStyles}
      disabled={disabled}
      disableResetOnTap={disableResetOnTap}
      disabledRailBackgroundColor={disabledRailBackgroundColor}
      disabledThumbIconBackgroundColor={disabledThumbIconBackgroundColor}
      disabledThumbIconBorderColor={disabledThumbIconBorderColor}
      enableReverseSwipe={enableReverseSwipe}
      forceReset={forceReset}
      height={height}
      onSwipeFail={onSwipeFail}
      onSwipeStart={onSwipeStart}
      onSwipeSuccess={onSwipeSuccess}
      railBackgroundColor={railBackgroundColor || colors.primary}
      railBorderColor={railBorderColor || colors.primary}
      railFillBackgroundColor={railFillBackgroundColor || '#a62e19'}
      railFillBorderColor={railFillBorderColor}
      railStyles={styles.railStyles|| railStyles}
      resetAfterSuccessAnimDelay={resetAfterSuccessAnimDelay}
      resetAfterSuccessAnimDuration={resetAfterSuccessAnimDuration}
      screenReaderEnabled={screenReaderEnabled}
      shouldResetAfterSuccess={shouldResetAfterSuccess}
      swipeSuccessThreshold={swipeSuccessThreshold}
      thumbIconBackgroundColor={thumbIconBackgroundColor || colors.secondary}
      thumbIconBorderColor={thumbIconBorderColor}
      thumbIconComponent={thumbIconComponent}
      thumbIconImageSource={thumbIconImageSource}
      thumbIconStyles={styles.thumbIconStyles || thumbIconStyles}
      thumbIconWidth={thumbIconWidth}
      title={lebel}
      titleColor={titleColor || colors.title}
      titleFontSize={titleFontSize}
      titleMaxFontScale={titleMaxFontScale}
      titleStyles={styles.titleStyles|| titleStyles}
      width={width}
    />
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    borderRadius: 5,
  },
  railStyles: {
    borderRadius: 5,
  },
  thumbIconStyles: {
    borderRadius: 5,
  },
  titleStyles: {
    fontSize: 16,
  },
});

export default ASSwipeButton;
