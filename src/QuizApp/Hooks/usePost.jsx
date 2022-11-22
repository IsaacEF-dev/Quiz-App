import React, { useEffect, useState } from 'react'

export const usePost = (peticion) => {
    const [first, setfirst] = useState("");
    const {nombre,idCategoria}=peticion.datos;

    const option={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,idCategoria})
    }

    const postFetch=async()=>{
        const resp=await fetch(peticion.url,option);
        const data=resp.json();
        setfirst(data);
    }

    useEffect(() => {
      postFetch();
    }, [peticion])
    
  return {
    first
  }
    
}

