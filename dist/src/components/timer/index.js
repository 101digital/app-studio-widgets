import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ASText from "../text";
const ASTimer = (props) => {
    const { initialTime, textStyle, onFinish } = props || {};
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    useEffect(() => {
        let timer;
        if (timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        }
        else {
            onFinish === null || onFinish === void 0 ? void 0 : onFinish();
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
    timerStyle: {
        fontWeight: '600',
        fontSize: 16
    }
});
export default ASTimer;
// Note: ASTimer Example
/*
         <ASTimer initialTime={62} onFinish={()=>{}}/>
* */
