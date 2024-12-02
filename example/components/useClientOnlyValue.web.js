import React from 'react';
// `useEffect` is not invoked during server rendering, meaning
// we can use this to determine if we're on the server or not.
export function useClientOnlyValue(server, client) {
    var _a = React.useState(server), value = _a[0], setValue = _a[1];
    React.useEffect(function () {
        setValue(client);
    }, [client]);
    return value;
}
