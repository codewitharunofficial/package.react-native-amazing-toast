import React, { ReactNode } from "react";
import { ToastProps } from "./Toast";
interface ToastManagerContextProps {
    showToast: (props: ToastProps) => void;
}
export declare const useToast: () => ToastManagerContextProps;
export declare const ToastProvider: React.FC<{
    children: ReactNode;
}>;
export {};
