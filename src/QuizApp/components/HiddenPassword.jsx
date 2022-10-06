import React, { useState } from 'react'
import {GrFormViewHide,GrFormView} from "react-icons/gr";

export const HiddenPassword = () => {

    const [hidenPassword, setHidenPassword] = useState(false);

    const viewPassword=()=>{
     setHidenPassword(!hidenPassword)
    }

  return (
    <>
        <GrFormView className={`${hidenPassword?"inline-block":"hidden"} absolute right-7 top-[65%] text-white `} onClick={viewPassword}/>
        <GrFormViewHide className={`${hidenPassword?"hidden":"inline-block"} absolute right-7 top-[65%] text-white `} onClick={viewPassword}/>
    </>
  )
}
