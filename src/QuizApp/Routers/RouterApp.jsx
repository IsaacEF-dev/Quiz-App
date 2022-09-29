import { Route, Routes } from "react-router-dom"
import { Login } from "../../UI/Pages/Login"
import { QuizApp } from "../Pages/QuizApp"


export const RouterApp = () => {
  return (
    <Routes>
        <Route path="login"  element={<Login />} />
        <Route path="home" element={<QuizApp />} />
    </Routes>
  )
}
