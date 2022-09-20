import React from "react";
import './Header.css'
import Logo from "../../icons/logo.png"
import User from "../../icons/user.png"

export default function Header({exibir}){
    return(
        <header className={exibir?'black': ''}>
            <div className="logo">
                <img alt="netflix" src={Logo}></img>
            </div>
            <div className="user">
                <img alt="netflix" src={User}></img>
            </div>
        </header>
    )
}