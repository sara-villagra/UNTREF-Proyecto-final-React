import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import HistoryStyle from "../style/Historial.module.css";
const Historial = () => {
  const { historial, setHistorial } = useContext(DataContext);
  const navigation = useNavigate();
  const borrar = (e) => {
      setHistorial([]);
      return navigation("/historial")}

  const titulo = " MI HISTORIAL";

  return (
    <>
      <section className={HistoryStyle.sectionHistory}>
        <h2 className={HistoryStyle.title}>{titulo}</h2>

        <ul className={HistoryStyle.ul}>
          {historial.map((item, indice) => (
            <li className={HistoryStyle.lista} key={indice}>
              <p>id:{item.id}</p>
              <p>Fecha:{item.fecha}</p>
              <p>Destino:{item.destino}</p>
              <p>Paquete:{item.paquete}</p>
              <p>Incluye:{item.incluye}</p>
              <p>Precio:$ {item.precio}</p>
              <p>Valor:$ {item.valor}</p>
              </li>

          ))}
          <form className={HistoryStyle.form} action="">
            <button type="button" onClick={borrar}>
              borrar
            </button>
            <button type="button" onClick={() => navigation("/")}>
              Volver
            </button>
          </form>
        </ul>
      </section>
    </>
  );
};
export default Historial;
