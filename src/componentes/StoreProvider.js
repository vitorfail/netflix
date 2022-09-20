import React, { useState } from "react";


export const Contexto = React.createContext({})
export const Provider = (props) =>{
    const [filmePrincipal, setfilmePrincipal] = useState(null)
    const [loading, setloading] = useState('loading mostrar')
    return(
        <Contexto.Provider value={{filmePrincipal, setfilmePrincipal, loading, setloading}}>
            {props.children}
        </Contexto.Provider>
    )
}