/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Text as DefaultText, View as DefaultView } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';
export function useThemeColor(props, colorName) {
    var _a;
    var theme = (_a = useColorScheme()) !== null && _a !== void 0 ? _a : 'light';
    var colorFromProps = props[theme];
    if (colorFromProps) {
        return colorFromProps;
    }
    else {
        return Colors[theme][colorName];
    }
}
export function Text(props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return React.createElement(DefaultText, __assign({ style: [{ color: color }, style] }, otherProps));
}
export function View(props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return React.createElement(DefaultView, __assign({ style: [{ backgroundColor: backgroundColor }, style] }, otherProps));
}
