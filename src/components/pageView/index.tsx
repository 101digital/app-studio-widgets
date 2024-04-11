import React, {useState} from 'react';
import {LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Swiper, {SwiperProps} from 'react-native-swiper';

export type ASPageViewProps = SwiperProps & {
    children: React.ReactNode[];
    style?: StyleProp<ViewStyle>;
    paginationStyle?: StyleProp<ViewStyle>;
    paginationBottomPosition?: number;
}

const ASPageView: (props: ASPageViewProps) => false | JSX.Element = (props: ASPageViewProps) => {
    const {children, style, paginationStyle, paginationBottomPosition = 15, ...restprops} = props
    const [height, setHeight] = useState<number>(0)
    const [startSwiper, setStartSwiper] = useState<boolean>(false)

    useState(() => {
        const timeout = setTimeout(() => {
            setStartSwiper(true)
        }, 100)
        return () => {
            clearTimeout(timeout)
        }
        // @ts-ignore
    }, [])

    const handleSetHeight = (value: number) => {
        if (value > height) {
            setHeight(value + paginationBottomPosition);
        }
    };

    const onLayout = (event: LayoutChangeEvent) => {
        handleSetHeight(event.nativeEvent.layout.height)
    }

    return (startSwiper && <Swiper
        showsButtons={false}
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        {...restprops}
        paginationStyle={[styles.paginationStyle, paginationStyle]}
        style={[styles.wrapper, {height}, style]}
    >
        {children.map((page: React.ReactNode, index: number) => (
            <View onLayout={onLayout}
                  key={index} style={styles.slide}>
                {page}
            </View>
        ))}
    </Swiper>);
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {},
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    paginationStyle: {
        bottom: 0
    }
});

export default ASPageView;

//Note: ASPageView example
/*
    <ASPageView
                pages={[
                    <ASRow>
                        <ASText style={{ fontSize: 24}}>Test Page view</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primaryIconColor"/>
                    </ASRow>
                    ,
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
                ]}
            />
* */
