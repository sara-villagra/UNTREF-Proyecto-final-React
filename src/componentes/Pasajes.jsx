import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import PasajeStyle from "../style/Pasaje.module.css";
const Pasajes = () => {
  const{setBoleto,boleto}=useContext(DataContext)


  return (
    <>
      <fieldset className= {PasajeStyle.container}>
      <label htmlFor="pasaje">Ingresa la cantidad de pasajes :</label>
        <input type="number" id="pasaje" name="pasaje"  min="1" max="5" required defaultValue={boleto} onChange={({target})=> setBoleto(target.value)}/>
      </fieldset>
      
    </>
  )
};
export default Pasajes;
