import React, { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import DestinoStyle from "../style/Destino.module.css";
const Destinos = () => {
  const { destinos, setTravel } = useContext(DataContext);
  let desti = new Set(destinos.map((item) => item.destino));
  const [travels, setTravels] = useState([...desti]);

  return (
    <>
      <fieldset className={DestinoStyle.container}>
        <label htmlFor="destino">Seleccione su destino viaje:  </label>
        <select
          name="destino"
          id="destino"
          defaultValue={0}
          onChange={({ target }) => setTravel(target.value)}
        >
          <option value={0} disabled>
            Destinos
          </option>
          {travels.map((item, indice) => (
            <option key={indice} value={item}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>
    </>
  );
};

export default Destinos;
