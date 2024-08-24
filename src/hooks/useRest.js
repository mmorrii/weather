import { useEffect, useRef, useState } from "react";

const anySignal = (signals) => {
    const controller = new AbortController()

    function onAbort(reason) {
        controller.abort(reason)

        for(const signal of signals) {
            signal.removeEventListener('abort', () => onAbort(signal.reason))
        }
    }

    for(const signal of signals) {
        if(signal.aborted) {
            onAbort(signal.reason)
            break
        }

        signal.addEventListener('abort', () => onAbort(signal.reason))
    }

    return controller.signal
}

export const useRest = (route = "", {
    parser = res => res.text().then(t => t && JSON.parse(t)),
    auto = false,
    cache = true,
    timeout = 10,
    delay = 0,
    authorization,
    onError,
    onSuccess,
    token
} = {}) => {
    const abort = useRef()

    const [ state, setState ] = useState(auto ? "loading" : "idle")
    const [ data, setData ] = useState(undefined)
    const [ error, setError ] = useState(undefined)
    const [ warning, setWarning ] = useState(undefined)

    function execute(method, request) {
        const controller = new AbortController()
        abort.current = controller

        const signal = anySignal([ controller.signal, AbortSignal.timeout(timeout * 1000) ])

        setState("loading")

        if(!cache) {
            setData(undefined)
            setError(undefined)
            setWarning(undefined)
        }

        setTimeout(() => fetch(`${ route }${ request.path || "" }`, {
            signal: signal,
            method: method,
            body: request.data && JSON.stringify(request.data),
            headers: {
                Authorization: authorization || token || ""
            }
        }).then(res => {
            if(res.ok) {
                parser(res).then(data => {
                    if (typeof data === "object" && data !== null && "name" in data) {
                        setState("warning")
                        setError(undefined)
                        setData(undefined)
                        setWarning(data)
                    } else {
                        setState("success")
                        setError(undefined)
                        setData(data)
                        setWarning(undefined)

                        if(onSuccess) onSuccess(data)
                        if(request.onSuccess) request.onSuccess(data)
                    }
                })
            } else {
                res.json().then(data => {
                    setState("error")
                    setError(data)
                    setData(undefined)
                    setWarning(undefined)

                    if(onError) onError(data)
                    if(request.onError) request.onError(data)
                }).catch(() => {
                    const error = { status: res.status, type: "UNKNOWN" }

                    setState("error")
                    setError(error)
                    setData(undefined)
                    setWarning(undefined)

                    if(onError) onError(error)
                    if(request.onError) request.onError(error)
                })
            }
        }).catch(() => {
            if(signal.reason === "Cancel") setState("idle")
            else {
                const error = { status: 0, type: "TIMEOUT" }

                setState("error")
                setError(error)
                setData(undefined)
                setWarning(undefined)

                if(onError) onError(error)
                if(request.onError) request.onError(error)
            }
        }), delay * 1000)
    }

    useEffect(() => {
        if(auto) execute("GET", {})
    }, [ auto, token ])

    function reset() {
        setState(auto ? "loading" : "idle")
        setData(undefined)
        setError(undefined)
        setWarning(undefined)

        if(auto) execute("GET", {})
    }

    return {
        state: state,
        data: data,
        error: error,
        warning: warning,

        get: (request = {}) => execute("GET", request),
        post: (request = {}) => execute("POST", request),
        put: (request = {}) => execute("PUT", request),
        patch: (request = {}) => execute("PATCH", request),
        del: (request = {}) => execute("DELETE", request),

        reset: reset,
        cancel: () => abort.current?.abort("Cancel"),
        set: (data, error) => {
            if(data) {
                setData(data)
                setError(undefined)
                setState("success")
            } else if(error) {
                setData(undefined)
                setError(error)
                setState("error")
            } else {
                setData(undefined)
                setError(undefined)
                setState("idle")
            }
        }
    }
}