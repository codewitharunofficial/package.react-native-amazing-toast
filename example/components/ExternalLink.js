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
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform } from 'react-native';
export function ExternalLink(props) {
    return (React.createElement(Link, __assign({ target: "_blank" }, props, { 
        // @ts-expect-error: External URLs are not typed.
        href: props.href, onPress: function (e) {
            if (Platform.OS !== 'web') {
                // Prevent the default behavior of linking to the default browser on native.
                e.preventDefault();
                // Open the link in an in-app browser.
                WebBrowser.openBrowserAsync(props.href);
            }
        } })));
}
