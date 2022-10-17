import { useState } from "react";
import { useForm } from "../Hooks/useForm"
import { HiddenPassword } from "./HiddenPassword";

export const InputForm = ({typeAccount,type,nombre,placeholder,expRegular,error,formState,inputChange}) => {
    

    const [hidenPassword, setHidenPassword] = useState(false);

    const viewPassword=()=>{
     setHidenPassword(!hidenPassword)
    }

    const [valid, setValid] = useState(true)

    const validInput=(e)=>{
        
        if(expRegular.test(e.target.value)){
            setValid(true);
        }else{
            setValid(false)
        }
        
    }
    
      
  return (
    <div className={`${typeAccount ? "opacity-0 h-0":"opacity-100 h-auto"} mb-7 z-10 transition duration-75`}>
        <label htmlFor="" className={`form__label`}>{nombre}:</label>
        <div className="relative">
            <input 
            type={`${hidenPassword?'text':type}`} 
            className={`form__input ${valid? 'border-orange-400':'border-red-700'}`} 
            name={`${nombre}`} 
            value={formState.nombre} 
            placeholder={`${placeholder}`} 
            onChange={inputChange}
            onBlur={validInput}
            />
            {
                type=="Password" && <HiddenPassword hidenPassword={hidenPassword} viewPassword={viewPassword}/>
            }
        </div>
        
        <p className={`text-red-700 text-[.8rem] font-medium absolute left-7 ${valid? 'hidden':'inline-block'}`}>{error}</p>
    </div>
  )
}
