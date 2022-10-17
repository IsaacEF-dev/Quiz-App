import { stringify } from 'postcss';
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import Swal from 'sweetalert2';
import {onChecking, onLogin, onLogout} from "../../auth/authSlice"
import {usuarioLogin} from "../services/login";
const usuariologin=new usuarioLogin();

export const useAuthStore = () => {
  const {status}=useSelector(state=>state.auth);
    const dispatch=useDispatch();

    const StartLogin=async(email,password)=>{
        dispatch(onChecking());
       
        let resp= await usuariologin.login(email,password);
        
        
        if(resp.code!=0){
              Swal.fire({title:`${resp.message}`,icon:'error',width:"20em"});
              return;
        }
        const {token,nombre,id}=resp.datos
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify({email,nombre,id}));

        dispatch(onLogin({email,nombre,id}))
    };

    const StartRegister=async(email,password,nombre,apellidos)=>{
        dispatch(onChecking());

        
        let resp =await usuariologin.crearCuenta(email,password,nombre,apellidos);

        if(resp.code!=20){
          Swal.fire({title:`${resp.message}`,icon:'error',width:"20em"});
          return;
        }
        let {token,id}=resp.data
        
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify({email,nombre,id}));
        dispatch(onLogin({email,nombre,id}))
    };

    const startLogout=async()=>{
      localStorage.clear();
      dispatch(onLogout());
    };

    const checkingToken=()=>{
      // const user=JSON.parse(localStorage.getItem("token"));
      const token=localStorage.getItem('token')
      const user=JSON.parse(localStorage.getItem('user'))
      
      if(token){
        const email=user.email;
        const nombre=user.nombre;
        const id=user.id;
        dispatch(onLogin({email,nombre,id}));
      }else{
        dispatch(onLogout());
      }
    }

  return {
    StartLogin,
    StartRegister,
    startLogout,
    status,
    checkingToken
  }
}
