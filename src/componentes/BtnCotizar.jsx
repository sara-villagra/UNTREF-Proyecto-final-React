import React, {useContext} from 'react'
import DataContext from '../context/DataContext'
import CotizarButton from "../style/BtnCotizar.module.css"
const BtnCotizar = () => {
    const{valor,boleto,travel,pack,setValor}=useContext(DataContext);
    
    return (
        <>
            <button  className={CotizarButton.save} id="btn">Cotizar</button>        
            
        
        </>
    )

}

export default BtnCotizar;