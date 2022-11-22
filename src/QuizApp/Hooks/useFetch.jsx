import {useState,useEffect} from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({
        data:null,
        isLoading: true,
        hasError:null
    })

    const getFech=async()=>{
        const resp=await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading:false,
            hasError:null
        })
    }

    useEffect(() => {
      getFech();
      
    }, [url])
    

    return{
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError
    }
}