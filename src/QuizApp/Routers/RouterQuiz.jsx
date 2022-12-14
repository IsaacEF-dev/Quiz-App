import { stringify } from "postcss"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../../UI/Pages/Navbar"
import { NavbarLateral } from "../../UI/Pages/NavbarLateral"
import { UserProvider } from "../Context/UserProvider"
import { CreateQuizz } from "../Pages/CreateQuizz"
import { Login } from "../Pages/Login"
import { MisCuestionarios } from "../Pages/MisCuestionarios"
import { OpcionMultiple } from "../Pages/OpcionMultiple"
import { Perfil } from "../Pages/Perfil"
import { PreguntaAbierta } from "../Pages/PreguntaAbierta"
import { QuizApp } from "../Pages/QuizApp"



export const RouterQuiz = () => {
  const [menu, setMenu] = useState(true);
  
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar menu={menu} setMenu={setMenu}/>
          <div className="flex fixed w-full">
            <NavbarLateral menu={menu}/>
            <Routes>
                <Route path="/" exact={true}   element={<QuizApp />} />
                <Route path="/misCuestionario" exact={true}   element={<MisCuestionarios />} />
                <Route path="/Perfil" exact={true}   element={<Perfil />} />
                <Route path="/CreateQuiz" exact={true}   element={<CreateQuizz />} />
                <Route path="/CreateQuiz/opcionMultiple" exact={true}   element={<OpcionMultiple />} />
                <Route path="/preguntaAbierta" exact={true}   element={<PreguntaAbierta />} />
            </Routes>
          </div>
        </UserProvider>
      </BrowserRouter>
     
    </>
  )
}
