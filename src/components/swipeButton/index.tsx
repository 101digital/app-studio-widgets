import React, { ReactElement, useContext, useEffect } from "react";
import { StyleSheet, TextStyle, View, ViewStyle, Text } from "react-native";
import SwipeButton from "rn-swipe-button";
import { ThemeContext } from "../../context/theme-context";
import ASLoadingIndicator from "../loadingIndicator";
import { ArrowForwardIcon } from "../../assets/icon/arrow-forward.icon";
import $ from "jquery";

export type ASSwipeButtonProps = {
  containerStyles?: ViewStyle | ViewStyle[];
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
  railStyles?: ViewStyle | ViewStyle[];
  resetAfterSuccessAnimDelay?: number;
  resetAfterSuccessAnimDuration?: number;
  screenReaderEnabled?: boolean;
  shouldResetAfterSuccess?: boolean;
  swipeSuccessThreshold?: number;
  thumbIconBackgroundColor?: string;
  thumbIconBorderColor?: string;
  thumbIconComponent?: React.ReactElement;
  thumbIconImageSource?: string | number;
  thumbIconStyles?: ViewStyle | ViewStyle[];
  thumbIconWidth?: number;
  label?: string;
  titleColor?: string;
  titleFontSize?: number;
  titleMaxFontScale?: number;
  labelStyles?: any;
  width?: number | string;
  accessibilityLabel?: string;
  loading?: boolean;
  id?: string;
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
    id,
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

  useEffect(() => {
    try {
      setTimeout(() => {
        if (document) {
          const swipeIcon = document.getElementById("swipe-icon");
          if (swipeIcon) {
            swipeIcon.addEventListener("mouseup", (event) => {
              const currentMouse = event.clientX;
              const width =
                document.getElementById("swipe-background")?.clientWidth;
              if (width && currentMouse + 10 > width) {
                if (onPress && typeof onPress === "function") {
                  onPress();
                  setTimeout(function () {
                    $(".swipe-text").fadeTo(300, 1);
                    $(".swipe-icon").animate(
                      {
                        left: "0px",
                      },
                      300
                    );
                  }, 2000);
                  // console.log('move to left');
                  // swipeIcon.style.left = '0px';
                }
              }
            });
          }
        }
      }, 1500);
    } catch (error) {}
  }, []);

  // Helper function to flatten styles or return empty object if undefined
  const flattenStyles = (
    styles: ViewStyle | ViewStyle[] | TextStyle | TextStyle[] | undefined
  ) => (styles ? StyleSheet.flatten(styles) : {});

  return (
    <View accessibilityLabel={accessibilityLabel} id={id}>
      <SwipeButton
        containerStyles={flattenStyles(containerStyles)}
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
        railStyles={flattenStyles(railStyles)}
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
        thumbIconStyles={flattenStyles(thumbIconStyles)}
        thumbIconWidth={thumbIconWidth}
        title={label}
        titleMaxFontScale={titleMaxFontScale}
        titleStyles={flattenStyles(labelStyles)}
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
