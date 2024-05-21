"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsTimeoutLoading = void 0;
const react_1 = require("react");
const useIsTimeoutLoading = (timeout = 40000, loading) => {
    const [isTimeout, setIsTimeout] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setIsTimeout(false);
        let _timeout;
        // Only start timeout when it's start loading
        if (loading) {
            _timeout = setTimeout(() => {
                setIsTimeout(true);
            }, timeout);
        }
        return () => {
            _timeout && clearTimeout(_timeout);
        };
    }, [timeout, loading]);
    return isTimeout;
};
exports.useIsTimeoutLoading = useIsTimeoutLoading;
