import {useEffect, useState} from "react";

export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    const changeData = (field, value) => {
        setData(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    useEffect(() => {
        (async () => {
            try {
                changeData('isLoading', true);

                const result = await fetchFunction(params);

                changeData('data', result);
            } catch (e) {
                changeData('error', e)
            } finally {
                changeData('isLoading', false);
            }
        })()
    }, [fetchFunction, stringParams])

    return {...data}
}
