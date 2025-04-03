import {useEffect, useState} from "react";

const useIsTimeoutLoading = (timeout: number = 40000, loading: boolean|undefined) => {
    const [isTimeout, setIsTimeout] = useState<boolean>(false);

    useEffect(() => {
        setIsTimeout(false)
        let _timeout: any

        // Only start timeout when it's start loading
        if (loading) {
            _timeout = setTimeout(() => {
                setIsTimeout(true)
            }, timeout)
        }

        return () => {
            _timeout && clearTimeout(_timeout)
        }
    }, [timeout,loading])

    return isTimeout
}
export {useIsTimeoutLoading}
