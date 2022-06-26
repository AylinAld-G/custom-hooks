import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch= async() =>{
        setState({
            ...state,
            isLoading: true
        })

        const resp=await fetch(url);
        const data=await resp.json();
        
        setState({
            data,
            isLoading:false,
            hasError: null,
        })
    }

    useEffect(() => {
      getFetch();
    }, [url])  //cada vez que se cambie el URL se va a volver a disparar este useEffect
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
