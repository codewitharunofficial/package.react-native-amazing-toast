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
import { Text } from './Themed';
export function MonoText(props) {
    return React.createElement(Text, __assign({}, props, { style: [props.style, { fontFamily: 'SpaceMono' }] }));
}
