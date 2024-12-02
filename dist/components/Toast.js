import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, Text } from 'react-native';
var Toast = function (_a) {
    var message = _a.message, _b = _a.type, type = _b === void 0 ? 'info' : _b, _c = _a.duration, duration = _c === void 0 ? 3000 : _c, onClose = _a.onClose, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? "lightblue" : _d, _e = _a.position, position = _e === void 0 ? 'bottom' : _e, icon = _a.icon, _f = _a.textColor, textColor = _f === void 0 ? "#000" : _f;
    var opacity = useState(new Animated.Value(0))[0];
    useEffect(function () {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
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
    return (React.createElement(Animated.View, { style: [styles.toast, { backgroundColor: backgroundColor, opacity: opacity, width: "60%", bottom: position === 'bottom' ? 50 : "auto", top: position === 'top' ? 100 : "auto" }] },
        icon && (React.createElement(Image, { source: icon, style: styles.appIcon })),
        React.createElement(Text, { style: [styles.message, { color: textColor }] }, message),
        type === 'success' ? (React.createElement(Ionicons, { name: 'checkmark-done-circle', size: 20, color: '#4CAF50' })) : type === 'error' ? (React.createElement(MaterialIcons, { name: 'error', color: '#F44336', size: 20 })) : type === 'info' ? (React.createElement(Entypo, { name: 'info', color: '#FFC107', size: 20 })) : (React.createElement(AntDesign, { name: 'warning', size: 20, color: "orange" }))));
};
var styles = StyleSheet.create({
    message: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'semibold',
        flex: 1
    },
    toast: {
        position: 'absolute',
        bottom: 50,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    appIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderRadius: 10
    }
});
export default Toast;
