
export class Categoria{
    mostrarCategorias=async()=>{
        const res=await fetch("http://localhost:4002/categoria");
        const data=await res.json();
        return data;
    }
}