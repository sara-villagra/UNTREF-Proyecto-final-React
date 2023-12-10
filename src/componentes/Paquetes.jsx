import React, { useState,useContext } from 'react'
import Formulario from './Formulario'
import DataContext from '../context/DataContext';
import PaqueteStyle from "../style/Paquetes.module.css"

const Paquetes = () => {
  const{destinos,setPack}=useContext(DataContext);
  let paseos= new Set(destinos.map((item)=>item.paquete))
  const[packs,setPacks]=useState([...paseos])
 
  console.log(packs)
  return (
    <>
      <fieldset className= {PaqueteStyle.container}>
        <label htmlFor="paquetes">Seleccione su pack ideal</label>
        <select name="paquetes" id="paquete" defaultValue={0}  onChange={({target})=>setPack(target.value)}>
          <option value={0} disabled>Paquetes disponibles:</option>
          {
            packs.map((item,indice)=><option key={indice} value={item}>{item}</option>)
          }
        </select>
      </fieldset>

    </>
  )
}

export default Paquetes;