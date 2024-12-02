var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { createContext, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import Toast from "./Toast";
var ToastManagerContext = createContext(undefined);
export var useToast = function () {
    var context = useContext(ToastManagerContext);
    if (!context)
        throw new Error('useToast must be used with in ToastProvider');
    return context;
};
export var ToastProvider = function (_a) {
    var children = _a.children;
    var _b = useState([]), toast = _b[0], setToast = _b[1];
    var showToast = function (toast) {
        setToast(function (prev) { return __spreadArray(__spreadArray([], prev, true), [toast], false); });
    };
    var handleRemoveToast = function (index) {
        setToast(function (prev) { return prev.filter(function (_, i) { return i !== index; }); });
    };
    return (React.createElement(ToastManagerContext.Provider, { value: { showToast: showToast } },
        children,
        React.createElement(View, { style: styles.container }, toast.map(function (toast, index) { return (React.createElement(Toast, __assign({ key: index }, toast, { onClose: function () { return handleRemoveToast(index); } }))); }))));
};
var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
