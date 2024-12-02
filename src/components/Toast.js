import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
var Toast = function (_a) {
    var message = _a.message, _b = _a.type, type = _b === void 0 ? 'info' : _b, _c = _a.duration, duration = _c === void 0 ? 3000 : _c, onClose = _a.onClose;
    var opacity = useState(new Animated.Value(0))[0];
    useEffect(function () {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start();
        var timeOut = setTimeout(function () {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(function () { return onClose && onClose(); });
        }, duration);
        return function () { return clearTimeout(timeOut); };
    }, [opacity, duration, onClose]);
    var backgroundColor = getToastColor(type);
    return (React.createElement(Animated.View, { style: [styles.toast, { backgroundColor: backgroundColor, opacity: opacity }] },
        React.createElement(Text, { style: styles.message }, message)));
};
var getToastColor = function (type) {
    switch (type) {
        case 'success':
            return '#4CAF50';
        case 'error':
            return '#F44336';
        case 'info':
            return '#FFC107';
        case 'warning':
            return '#2196F3';
        default:
            return '#2196F3';
    }
};
var styles = StyleSheet.create({
    message: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    toast: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
        //    display: 'flex',
        //    flexDirection: 'row',
    }
});
export default Toast;
