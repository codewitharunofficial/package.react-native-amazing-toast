import React from 'react';
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
declare const Toast: React.FC<ToastProps>;
export default Toast;
