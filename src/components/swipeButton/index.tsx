import React, { useContext } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { ThemeContext } from '../../context/theme-context';

export type ASSwipeButtonProps = {
  onSwipeSuccess: () => void;
  title?: string;
  style?: ViewStyle;
  disabled?: boolean;
  thumbIconBackgroundColor?: string;
  railBackgroundColor?: string;
  railBorderColor?: string;
  railFillBackgroundColor?: string;
  thumbIconComponent?: React.ReactNode;
};

const ASSwipeButton: React.FC<ASSwipeButtonProps> = (props) => {
  const { colors } = useContext(ThemeContext);
  const {
    onSwipeSuccess,
    title,
    style,
    disabled,
    thumbIconBackgroundColor,
    railBackgroundColor,
    railBorderColor,
    railFillBackgroundColor,
    thumbIconComponent,
  } = props;

  return (
    <SwipeButton
      disabled={disabled}
      onSwipeSuccess={onSwipeSuccess}
      title={title}
      thumbIconBackgroundColor={thumbIconBackgroundColor || colors.primary}
      railBackgroundColor={railBackgroundColor || colors.tertiary}
      railBorderColor={railBorderColor || colors.onSurface}
      railFillBackgroundColor={railFillBackgroundColor || colors.primaryFixed}
    //   thumbIconComponent={thumbIconComponent}
      containerStyles={[styles.container, style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ASSwipeButton;
