import { UserContext } from "./userContext"

export const UserProvider=({children})=>{
    return(
        <UserContext.Provider value={{nombre:"Isaac"}}>
            {children}
        </UserContext.Provider>
    )
}