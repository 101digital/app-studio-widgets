import React, { useContext, useState, ReactNode } from "react";
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
  ScrollViewProps,
  ScrollView
} from "react-native";
import { ThemeContext } from "../../context/theme-context";
// import { ScrollView } from "react-native-gesture-handler"; // TODO: Check if isPreview use ScrollView from RN else use this ScrollView

export type ASPageViewProps = ScrollViewProps & {
  children: ReactNode[];
  style?: StyleProp<ViewStyle>;
  paginationStyle?: StyleProp<ViewStyle>;
  paginationBottomPosition?: number;
  snapToAlignment?: "center" | "end" | "start";
  showsHorizontalScrollIndicator: boolean;
  showsVerticalScrollIndicator: boolean
  testId?: string
};

const ASPageView: (props: ASPageViewProps) => ReactNode = (
    props: ASPageViewProps
) => {
  const { colors } = useContext(ThemeContext);
  const {
    children,
    paginationStyle,
    paginationBottomPosition = 0,
    horizontal = true,
    snapToAlignment = "center",
    showsHorizontalScrollIndicator = false,
    showsVerticalScrollIndicator=false,
    testId='ASPageView',
    ...restProps
  } = props;
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const heightValue = event.nativeEvent.layout.height;
    const widthValue = event.nativeEvent.layout.width;

    if (heightValue > height) {
      setHeight(heightValue + paginationBottomPosition);
    }
    if (widthValue > width) {
      setWidth(widthValue + paginationBottomPosition);
    }
  };

  const snapConfig = horizontal
      ? { snapToOffsets: [0, width], horizontal: true }
      : { snapToOffsets: [0, height] };

  return (
      <ScrollView
          horizontal={horizontal}
          decelerationRate={0}
          {...(width > 0 && horizontal ? { snapToInterval: width } : {})}
          snapToAlignment={snapToAlignment}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          testID={`scrollView-${testId}`}
          {...snapConfig}
          {...restProps}
      >
        {Array.isArray(children) ? (
            children.map((page: React.ReactNode, index: number) => (
                <View
                    testID={`childView-${index}-${testId}`} onLayout={onLayout} key={index} style={styles.slide}>
                  {page}
                </View>
            ))
        ) : (
            <View testID={`slideView-${testId}`} onLayout={onLayout} style={styles.slide}>
              {children}
            </View>
        )}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {},
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  paginationStyle: {
    bottom: 0,
  },
});

export default ASPageView;

//Note: ASPageView example
/*
    <ASPageView
              <ASRow>
                        <ASText style={{ fontSize: 24}}>Test Page view</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primaryIconColor"/>
                         <ASText style={{textAlign: 'center', fontSize: 24}}>Welcome to App Studio</ASText>,
                    <ASColumn style={{}}>
                        <ASText>Test1</ASText>
                        <ASText>Test2</ASText>
                        <ASText>Test3</ASText>
                        <ASText>Test4</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test.....</ASText>
                    </ASColumn>
                    </ASRow>
            </ASPageView>
* */
