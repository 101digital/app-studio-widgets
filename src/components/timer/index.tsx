import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native'
import ASText from "../text";

export type ASTimerProps = {
    initialTime: number; // Initial time in seconds
    textStyle?: StyleProp<TextStyle>
}

const ASTimer: React.FC<ASTimerProps> = (props: ASTimerProps) => {
    const {initialTime, textStyle} = props || {}
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        let timer: any
        if (timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prevTime: number) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timeRemaining]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <ASText style={[styles.timerStyle, textStyle]}>{formatTime(timeRemaining)}</ASText>
    );
}

const styles = StyleSheet.create({
    timerStyle: {}
});

export default ASTimer

// Note: ASTimer Example
/*
         <ASTimer initialTime={62}/>
* */
