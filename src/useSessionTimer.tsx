import { useEffect, useState } from "react";


function useSetTimeout(callback: Function, timeout: number, reset: boolean, start: boolean): void {
    useEffect(() => {
        if (start) {
            let id = setTimeout(callback, timeout);
            return () => {
                clearTimeout(id);
            };
        }
    }, [reset, start]);
}
type useSessionTimerProps = {
    warnAfter: number,
    expireAfter: number,
    onWarning: Function,
    onExpire: Function,
    onReset: Function
}
export default function useSessionTimer({
    warnAfter,
    expireAfter,
    onWarning,
    onExpire,
    onReset
}: useSessionTimerProps) {
    const [start, setStart] = useState(false);
    const [reset, setReset] = useState(false);

    useSetTimeout(onWarning, warnAfter, reset, start);
    useSetTimeout(expireProxyfn, expireAfter, reset, start);

    function expireProxyfn() {
        setStart(false);
        onExpire();
    }
    function handleStart() {
        setStart(true);
    }
    function handleStop() {
        setStart(false);
    }
    function handleReset() {
        onReset();
        setReset(!reset);
    }
    return { start: handleStart, stop: handleStop, reset: handleReset };
}
