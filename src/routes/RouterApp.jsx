import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { useValidUser } from "../QuizApp/Hooks/useValidUser"
import { Login } from "../QuizApp/Pages/Login"
import { QuizApp } from "../QuizApp/Pages/QuizApp"
import { RouterQuiz } from "../QuizApp/Routers/RouterQuiz"


export const RouterApp = () => {
    const [validUser, setValidUser] = useState(true)

    const handleLogin=(params)=>{
        console.log(params)
        setValidUser(params);
        console.log(validUser);
    }
    
  return (
   <>
        {
            validUser?<Login props={handleLogin}/>: <RouterQuiz />
        }
   </>
        
        
    
  )
}
