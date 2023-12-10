import React from 'react'
import StyleHeader from "../../style/Header.module.css"
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
   
    const titulo= "Nuestro país lo tiene TODO"
   
    return (
        <>
            <header>
                <h2 className={StyleHeader.title}>{titulo}</h2>
              
                <nav>
                <Link className={StyleHeader.link} to="/"> Cotizador </Link>
                <Link className={StyleHeader.link} to="/historial"> Historial </Link>
                </nav>
                
            </header>
        </>
    )
}

export default Header;