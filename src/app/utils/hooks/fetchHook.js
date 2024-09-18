import { useState, useEffect} from "react";

const useFetch = (url,method,body,setting) => {

    const [result, setResult] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [ok,setOk] = useState()
    const [state, setState] = useState()

    useEffect(() => {
        const abortController = new AbortController()
        (async() => {
            setIsLoading(true)

            const response = await fetch(url,{...setting,method: method, body: body,signal: abortController.signal})
            setOk(response.ok)
            setState(response.status)

            if(response.ok) {
                const apiResult = await response.json()
                setResult(apiResult)
            }

            setIsLoading(false)
        })()

        return () => abortController.abort()

    },[method,body,url,setting])

    return [result,isLoading,ok.state]

}

export default useFetch