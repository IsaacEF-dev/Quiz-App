import { stringify } from "postcss"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../../UI/Pages/Navbar"
import { NavbarLateral } from "../../UI/Pages/NavbarLateral"
import { CreateQuizz } from "../Pages/CreateQuizz"
import { Login } from "../Pages/Login"
import { MisCuestionarios } from "../Pages/MisCuestionarios"
import { OpcionMultiple } from "../Pages/OpcionMultiple"
import { Perfil } from "../Pages/Perfil"
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
              <Route path="/misCuestionario" exact={true}   element={<MisCuestionarios />} />
              <Route path="/Perfil" exact={true}   element={<Perfil />} />
              <Route path="/CreateQuiz" exact={true}   element={<CreateQuizz />} />
              <Route path="/opcionMultiple" exact={true}   element={<OpcionMultiple />} />
          </Routes>
        </div>
      </BrowserRouter>
     
    </>
  )
}
