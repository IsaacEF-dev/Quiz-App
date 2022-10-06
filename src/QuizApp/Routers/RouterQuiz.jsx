import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../../UI/Pages/Navbar"
import { NavbarLateral } from "../../UI/Pages/NavbarLateral"
import { Login } from "../Pages/Login"
import { QuizApp } from "../Pages/QuizApp"



export const RouterQuiz = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu}/>
        <div className="flex fixed w-full">
          <NavbarLateral menu={menu}/>
          <Routes>
              <Route path="/" exact={true}   element={<QuizApp />} />
              <Route path="/misCuestionario" exact={true}   element={<QuizApp />} />
              <Route path="/Perfil" exact={true}   element={<QuizApp />} />
          </Routes>
        </div>
      </BrowserRouter>
     
    </>
  )
}
