import { useState } from "react";
import { useForm } from "../Hooks/useForm"
import { HiddenPassword } from "./HiddenPassword";

export const InputForm = ({typeAccount,type,nombre,placeholder,expRegular}) => {
    let valor;
    const{inputChange,formState,nombreonResetForm}=useForm({
        Nombre:""
    })

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
        
        <input 
        type={`${type}`} 
        className={`form__input ${valid? 'border-orange-400':'border-red-700'}`} 
        name={`${nombre}`} 
        value={formState.value} 
        placeholder={`${placeholder}`} 
        onChange={inputChange}
        onKeyUp={validInput}
        />
        {
            type=="Password" && <HiddenPassword/>
        }
        <p className={`text-red-700 text-[.8rem] font-medium absolute left-7 ${valid? 'hidden':'inline-block'}`}>Valores Incorrectos</p>
    </div>
  )
}
