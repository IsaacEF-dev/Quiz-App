import {Link,NavLink} from "react-router-dom"
import {GrSearch,FaUserAlt,GiHamburgerMenu,ImCross} from "react-icons/all"
import { NavbarLateral } from "./NavbarLateral"
import { useState } from "react"
export const Navbar = ({menu,setMenu}) => {


  const mobilMenu=(e)=>{
    e.preventDefault();
    setMenu(!menu);
  }

  return (
    < >
        <div className="bg-gray-100 w-full flex sm:justify-end justify-between relative right-0">
            <div className="flex items-center sm:w-3/4 w-full py-4 justify-evenly">
                <GiHamburgerMenu className={`sm:hidden ${menu? 'inline-block':'hidden'}`} onClick={mobilMenu}/>
                <ImCross className={`sm:hidden ${menu? 'hidden':'inline-block'}`} onClick={mobilMenu}/>
                <form action="" className="border shadow-md py-2 flex items-center rounded-3xl basis-1/2">
                    <GrSearch className="basis-11 border-r-2 border-gray-400 mr-2 pl-3 pr-2 h-full"/>
                    <input type="search" placeholder="Search.." className="bg-gray-100 outline-none border-none basis-11/12"/>
                    <button className="pl-2 pr-3 text-sm font-semibold border-l-2 border-gray-400">Buscar</button>
                </form>
                <NavLink to="/perfil" className="sm:flex items-center hidden justify-end text-gray-800 text-base font-bold basis-1/4">
                    <FaUserAlt className="mr-1 "/>
                    Julian
                </NavLink>
            </div>
            
        </div>
    </>
    
  )
}
