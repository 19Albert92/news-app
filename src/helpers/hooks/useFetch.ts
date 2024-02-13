import {useEffect, useState} from "react";

interface FetchFunction<P, T> {
    (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
    data: T | null | undefined,
    isLoading: boolean,
    error: Error | null
}

export const useFetch = <T, P> (fetchFunction: FetchFunction<P, T>, params?: P) : UseFetchResult<T> => {
    const [data, setData] = useState<UseFetchResult<T>>({
        data: null,
        isLoading: true,
        error: null
    });

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    const changeData = (field: string, value: string | any) => {
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
