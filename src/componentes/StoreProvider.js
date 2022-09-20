import React, { useState } from "react";


export const Contexto = React.createContext({})
export const Provider = (props) =>{
    const [filmePrincipal, setfilmePrincipal] = useState(null)
    return(
        <Contexto.Provider value={{filmePrincipal, setfilmePrincipal}}>
            {props.children}
        </Contexto.Provider>
    )
}