import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { useAuthStore } from "../QuizApp/Hooks/useAuthStore"
import { useValidUser } from "../QuizApp/Hooks/useValidUser"
import { Login } from "../QuizApp/Pages/Login"
import { QuizApp } from "../QuizApp/Pages/QuizApp"
import { RouterQuiz } from "../QuizApp/Routers/RouterQuiz"


export const RouterApp = () => {
    const {status,checkingToken}=useAuthStore();
    
    useEffect(() => {
        checkingToken();
    }, [])
    
    
  return (
   <>
        {
            (status==="autenticado")? <RouterQuiz />:<Login />
        }
   </>
        
        
    
  )
}
