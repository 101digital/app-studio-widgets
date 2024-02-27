import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ASText from "../text";
const ASTimer = (props) => {
    const { initialTime, textStyle } = props || {};
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    useEffect(() => {
        let timer;
        if (timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timeRemaining]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    return (React.createElement(ASText, { style: [styles.timerStyle, textStyle] }, formatTime(timeRemaining)));
};
const styles = StyleSheet.create({
    timerStyle: {}
});
export default ASTimer;
// Note: ASTimer Example
/*
         <ASTimer initialTime={62}/>
* */
