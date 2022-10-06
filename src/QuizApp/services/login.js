import axios from "axios";
export class usuarioLogin{
    login=async(correo,keyUser)=>{
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({correo,pass:keyUser})
          };
           let response=await fetch("http://localhost:4002/auth",options);
           let date=await response.json();
           return date;
    }

    crearCuenta=async(values)=>{
        const options={
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        }
        let response=await fetch("http://localhost:4002/registro",options);
        let date=await response.json();
        return date;
    }
}
