import React, { ReactElement, useContext } from "react";
import { StyleSheet, TextStyle, View, ViewStyle, Text } from "react-native";
import SwipeButton from "rn-swipe-button";
import { ThemeContext } from "../../context/theme-context";
import ASLoadingIndicator from "../loadingIndicator";
import { ArrowForwardIcon } from "../../assets/icon/arrow-forward.icon";

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
  onPress?: () => void;
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
  thumbIconComponent?: React.ReactElement;
  thumbIconImageSource?: string | number;
  thumbIconStyles?: ViewStyle;
  thumbIconWidth?: number;
  label?: string;
  titleColor?: string;
  titleFontSize?: number;
  titleMaxFontScale?: number;
  labelStyles?: TextStyle;
  width?: number | string;
  accessibilityLabel?: string;
  loading?: boolean;
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
    onPress,
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
    label,
    titleColor,
    titleFontSize,
    titleMaxFontScale,
    labelStyles,
    width,
    accessibilityLabel,
    loading,
  } = props;

  const onSwipeSuccess = () => {
    if (onPress && typeof onPress === "function") {
      onPress();
    }
  };

  const renderThumbIcon = (): ReactElement => {
    return (
      <View>
        {loading ? (
          <ASLoadingIndicator loading={loading} />
        ) : thumbIconComponent ? (
          thumbIconComponent
        ) : (
          <ArrowForwardIcon />
        )}
      </View>
    );
  };

  return (
    <View accessibilityLabel={accessibilityLabel}>
      <SwipeButton
        containerStyles={containerStyles}
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
        railBackgroundColor={railBackgroundColor}
        railBorderColor={railBorderColor}
        railFillBackgroundColor={railFillBackgroundColor}
        railFillBorderColor={railFillBorderColor}
        railStyles={railStyles}
        resetAfterSuccessAnimDelay={resetAfterSuccessAnimDelay}
        resetAfterSuccessAnimDuration={resetAfterSuccessAnimDuration}
        screenReaderEnabled={screenReaderEnabled}
        shouldResetAfterSuccess={shouldResetAfterSuccess}
        swipeSuccessThreshold={swipeSuccessThreshold}
        thumbIconBackgroundColor={thumbIconBackgroundColor || colors.secondary}
        thumbIconBorderColor={thumbIconBorderColor}
        // @ts-ignore
        thumbIconComponent={renderThumbIcon}
        thumbIconImageSource={thumbIconImageSource}
        thumbIconStyles={thumbIconStyles}
        thumbIconWidth={thumbIconWidth}
        title={label}
        titleMaxFontScale={titleMaxFontScale}
        titleStyles={labelStyles}
        width={width}
      />
    </View>
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
