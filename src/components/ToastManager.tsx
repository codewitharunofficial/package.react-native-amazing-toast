import React, {createContext, useContext, useState, ReactNode} from "react";
import { View, StyleSheet } from "react-native";
import Toast, {ToastProps} from "./Toast";

interface ToastManagerContextProps {
    showToast: (props: ToastProps) => void;
}

const ToastManagerContext = createContext<ToastManagerContextProps | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastManagerContext);
    if(!context) throw new Error('useToast must be used with in ToastProvider');
    return context;
};

export const ToastProvider: React.FC<{children: ReactNode}> = ({
    children
}) => {
    const [toast, setToast] = useState<ToastProps[]>([]);

    const showToast = (toast: ToastProps) => {
        setToast((prev) => [...prev, toast]);
    }
    const handleRemoveToast = (index: number) => {
        setToast((prev) => prev.filter((_, i) => i !==index));
    };



    return (
        <ToastManagerContext.Provider value={{showToast}} >
            {children}
            <View style={styles.container} >
                {toast.map((toast, index) => (
                    <Toast key={index} {...toast} onClose={() => handleRemoveToast(index)} />
                ))}
            </View>
        </ToastManagerContext.Provider>
    )

};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
