import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { usuarioLogin } from '../services/login';
import { InputForm } from '../components/InputForm';
import {Validations} from  "../../Validaciones/validations.js"
import { useForm } from '../Hooks/useForm';
import { BtnGoogle } from '../components/BtnGoogle';
import {gapi} from 'gapi-script';
import { stringify } from 'postcss';
import { useAuthStore } from '../Hooks/useAuthStore';
import { onLogin } from '../../auth/authSlice';
import { useDispatch } from 'react-redux';
const usuariologin = new usuarioLogin();

// import "../../index.css";
const google_id="62648359602-tdfiivql4f2hp30141lik8q2cfcht7fk.apps.googleusercontent.com";

export const Login = () => {

  const {StartLogin,StartRegister} =useAuthStore();
  const dispatch = useDispatch();
  const [typeAccount,setTypeAccount]=useState(true)

  const{inputChange,formState,Nombre,Password,Apellidos,Correo,setFormState,onResetForm}=useForm({
    Nombre:"",
    Password:"",
    Apellidos:"",
    Correo:""
  });
  

  const createAccount=(e)=>{
    setTypeAccount(!typeAccount)
  }

  const onAcces=(e)=>{
    e.preventDefault();

    if(typeAccount){
      if(!(Validations.todo.test(Password) && Validations.correo.test(Correo))) return;
    }else{
      if(!(Validations.todo.test(Password) && Validations.correo.test(Correo) 
      && Validations.nombre.test(Nombre) && Validations.nombre.test(Apellidos))) return;
    }
    
    
    if(typeAccount){
      StartLogin(Correo,Password);
    }else{
      // let result=usuariologin.crearCuenta({nombre:Nombre,apellidos:Apellidos,corre:Correo,pass:Password});
      
      StartRegister(Correo,Password,Nombre,Apellidos);
    }
    
  }


  const onGoogle=(res)=>{
    let usuario=res.profileObj;
    
    let resp=usuariologin.loginGoogle({nombre:usuario.givenName,apellidos:usuario.familyName,correo:usuario.email,pass:usuario.googleId});
    
    resp.then(res=>{
      if(res.code==0){
        const {token,nombre,id}=res.user;
    
        let correo=usuario.email;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify({correo,nombre,id}));

        dispatch(onLogin({correo,nombre,id}))
       
      }else{
        Swal.fire({title:`${res.message}`,icon:'error',width:"20em"});
      }
     
    }).catch(err=>{
      console.log(err,"error")
    });
  }
  
  
  return (
    <div className='w-10/12 m-auto h-screen font-poppins'>
        <div className="flex justify-center flex-col items-center h-full">
          <h1 className='font-bold text-3xl text-gray-500 mb-10'>Quiz App</h1>
            <form action="" 
            className='overflow-hidden w-[24rem] py-6 px-6 bg-gray-50 shadow-xl  flex flex-col justify-center relative rounded-md'
            onSubmit={onAcces}>
              <label htmlFor="" className='text-2xl font-bold text-gray-200 m-auto text-center mb-10 z-10'>{typeAccount? "Iniciar Sesion":"Crear Cuenta"}</label>
              
              <InputForm typeAccount={typeAccount} type={"text"} 
              nombre={"Nombre"} placeholder={"Tu nombre..."} 
              expRegular={Validations.nombre} error={"solo se permiten letras y minimo 3 letras"}
              formState={formState} inputChange={inputChange}/>

              <InputForm typeAccount={typeAccount} type={"text"} 
              nombre={"Apellidos"} placeholder={"Tus Apellidos..."} 
              expRegular={Validations.nombre} error={"solo se permiten letras y minimo 3 letras"}
              formState={formState} inputChange={inputChange}
              />

              <InputForm typeAccount={false} type={"Email"} 
              nombre={"Correo"} placeholder={"Tu Email..."} 
              expRegular={Validations.correo} error={"Correo no valido"}
              formState={formState.Correo} inputChange={inputChange}
              />
              
              <InputForm 
              typeAccount={false} type={"Password"} 
              nombre={"Password"} placeholder={"Password.."} 
              expRegular={Validations.todo} error={"Debe ser un minimo a 5 caracteres"}
              formState={formState} inputChange={inputChange}
              />

              <BtnGoogle onGoogle={onGoogle}/>
              <button className='bg-orange-500 z-10 text-white font-bold py-3 m-auto w-1/2 rounded-full'>{typeAccount? "Iniciar Sesion":"Crear Cuenta"}</button>
                <p className='font-semibold text-gray-500 text-xs text-center mt-4 cursor-pointer' onClick={createAccount}>{typeAccount? "Crear Cuenta":"Iniciar Sesion"}</p>
                <div className='bg-wave_form rotate-180 absolute top-0 left-0 h-64 w-full bg-no-repeat bg-cover'></div>
            </form>
        </div>
    </div>
  )
}
