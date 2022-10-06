import {Validations} from "./validation";
const validation=new Validations();

/**===========Login============ */
export class SchemaValidatio{
    iniciarSesion(correo,key){
        if(!validation.tryOut({correo},validation.regularExp().correos,40)||
        !validation.tryOut({key},validation.regularExp().letras,30)){
            return false;
        }
        return true;
    }
}
