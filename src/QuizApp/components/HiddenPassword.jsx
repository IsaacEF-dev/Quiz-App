import React, { useState } from 'react'
import {GrFormViewHide,GrFormView} from "react-icons/gr";

export const HiddenPassword = ({hidenPassword,viewPassword}) => {
 
  return (
    <>
        <GrFormView className={`${hidenPassword?"inline-block":"hidden"} absolute right-3 top-[45%] text-white `} onClick={viewPassword}/>
        <GrFormViewHide className={`${hidenPassword?"hidden":"inline-block"} absolute right-3 top-[45%] text-white `} onClick={viewPassword}/>
    </>
  )
}
