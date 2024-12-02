import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View, ViewStyle } from 'react-native';

export interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    onClose?: () => void;
    position?: 'top' | 'bottom';
    backgroundColor?: string;
    icon?: any;
    textColor?: string;
}

const Toast: React.FC<ToastProps> = ({
    message, type = 'info', duration = 3000,
    onClose, backgroundColor = "lightblue", position = 'bottom', icon, textColor = "#000"
}) => {
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();

        const timeOut = setTimeout(() => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => onClose && onClose());
        }, duration);

        return () => clearTimeout(timeOut);

    }, [opacity, duration, onClose]);


    return (
        <Animated.View style={[styles.toast, { backgroundColor: backgroundColor, opacity, width: "60%", bottom: position === 'bottom' ? 50 : "auto", top: position === 'top' ? 100 : "auto" }]} >
            {
                icon && (
                    <Image source={icon} style={styles.appIcon} />
                )
            }
            <Text style={[styles.message, { color: textColor }]} >{message}</Text>
            {
                type === 'success' ? (
                    <Ionicons name='checkmark-done-circle' size={20} color={'#4CAF50'} />
                ) : type === 'error' ? (
                    <MaterialIcons name='error' color={'#F44336'} size={20} />
                ) : type === 'info' ? (
                    <Entypo name='info' color={'#FFC107'} size={20} />
                ) : (
                    <AntDesign name='warning' size={20} color={"orange"} />
                )
            }
        </Animated.View>
    )
};


const styles = StyleSheet.create({
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