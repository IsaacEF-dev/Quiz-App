import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { usuarioLogin } from '../services/login';
import { InputForm } from '../components/InputForm';
import {Validations} from  "../../Validaciones/validations.js"
const usuariologin = new usuarioLogin();

// import "../../index.css";

export const Login = ({props}) => {
  
  const [typeAccount,setTypeAccount]=useState(true)


  const createAccount=(e)=>{
    setTypeAccount(!typeAccount)
  }

  const onAcces=(e)=>{
    e.preventDefault();
    let result;
    
    if(typeAccount){
      // schema.iniciarSesion(correo,keyUser)&&console.log("correcto");
      result=usuariologin.login(correo,keyUser);
    }else{
      result=usuariologin.crearCuenta({nombre:userName,apellidos:apellidos,correo,pass:keyUser});
    }
    
    result.then(res=>{
      Swal.fire({title:"Correcto",icon:'success',text:'Usuario Correcto'})
      .then(value=>{
        props(false)
      });
      
    }).catch(err=>console.log(err,"error"));
    
  }
  
  return (
    <div className='w-10/12 m-auto h-screen font-poppins'>
        <div className="flex justify-center flex-col items-center h-full">
          <h1 className='font-bold text-3xl text-gray-500 mb-10'>Quiz App</h1>
            <form action="" 
            className='overflow-hidden w-[24rem] py-6 px-6 bg-gray-50 shadow-xl  flex flex-col justify-center relative rounded-md'
            onSubmit={onAcces}>
              <label htmlFor="" className='text-2xl font-bold text-gray-200 m-auto text-center mb-10 z-10'>{typeAccount? "Iniciar Sesion":"Crear Cuenta"}</label>
              
              <InputForm typeAccount={typeAccount} type={"text"} nombre={"Nombre"} placeholder={"Tu nombre..."} expRegular={Validations.nombre}/>

              <InputForm typeAccount={typeAccount} type={"text"} nombre={"Apellidos"} placeholder={"Tus Apellidos..."} expRegular={Validations.nombre}/>

              <InputForm typeAccount={false} type={"Email"} nombre={"Correo"} placeholder={"Tu Email..."} expRegular={Validations.correo}/>
              
              <InputForm typeAccount={false} type={"Password"} nombre={"Password"} placeholder={"Password.."} expRegular={Validations.todo}/>


              <button className='bg-orange-500 z-10 text-white font-bold py-3 m-auto w-1/2 rounded-full'>{typeAccount? "Iniciar Sesion":"Crear Cuenta"}</button>
                <p className='font-semibold text-gray-500 text-xs text-center mt-4 cursor-pointer' onClick={createAccount}>{typeAccount? "Crear Cuenta":"Iniciar Sesion"}</p>
                <div className='bg-wave_form rotate-180 absolute top-0 left-0 h-64 w-full bg-no-repeat bg-cover'></div>
            </form>
        </div>
    </div>
  )
}
