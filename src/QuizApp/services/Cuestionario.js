export class Cuestionario{
    insertCuestionario=async(nombre,idCategoria,idUsuario)=>{
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({nombre,idCategoria,idUsuario})
        };
        
        const resp=await fetch("http://localhost:4002/insertCuestionario",options);
        const data=resp.json();
        return data;
    }

    getCuestionarios=async(idUsuario)=>{
        let isLoading=true;
        const options = {
            method: "GET",
            headers: {
                accept: 'application/json',
            },
        };
       
        const resp=await fetch(`http://localhost:4002/cuestionarios?idUsuario=${idUsuario}`,options);
        const data=await resp.json();
        isLoading=false;
        return {
            data,
            isLoading,
        }
    }
}