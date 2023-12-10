import React, { useContext, useEffect, useRef, useState } from "react";
import Paquetes from "./Paquetes";
import Pasajes from "./Pasajes";
import Destinos from "./Destinos";
import BtnCotizar from "./BtnCotizar";
import FormStyle from "../style/Formulario.module.css";
import DataContext from "../context/DataContext";
import Swal from 'sweetalert2';

const Formulario = () => {
  const { pack, travel, boleto, destinos, historial, setHistorial,valor,setValor,setBoleto } =
    useContext(DataContext);

  // const [valor, setValor] = useState(null);
  const youTravels = (evento) => {
    evento.preventDefault();
    console.log("datos",pack,travel,boleto)
    if(pack == null || travel == null || boleto < 1){
      return   Swal.fire("Error","Debes completar los datos","error")
    }
    const destino = destinos.find(
      (paquete) => paquete.destino == travel && paquete.paquete == pack
    );
    return setValor(destino.precio * boleto);
  };
  const guardar = (event) => {
    event.preventDefault();
    const destino = destinos.find(
      (paquete) => paquete.destino == travel && paquete.paquete == pack
    );

    setHistorial([
      ...historial,
      { ...destino, boleto, valor, fecha: new Date().toLocaleDateString() },
    ]);
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'cotizacion guardada',
      animation: false,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,})
     setValor(null)
     setBoleto(1)
    return reseteo.current.reset();
  };
 
  const reseteo = useRef();
  const tituloForm = "Completa los datos y solicita tu cotización...";
  const subtitulo="¡Descubrí las playas Argentina!"
  return (
    <>
      <form
        ref={reseteo}
        className={FormStyle.form}
        onSubmit={youTravels}
        id="cotizador"
      >
        <h3 className= {FormStyle.upTitle} >{subtitulo}</h3>
        <h3 className={FormStyle.title}>{tituloForm}</h3>
        <Destinos />
        <Paquetes />
        <Pasajes />
        <fieldset className={FormStyle.containerBtn}>
          <BtnCotizar />

          {valor  && (
            <>
             
              {" "}
              <h2 className={FormStyle.price}>Precio Estimado $ {valor}  </h2>
             
              <button
                className={FormStyle.saveBtn}
                onClick={guardar}
                type="button"
              >
                <i className="fa-solid fa-floppy-disk"></i>
              </button>
            </>
          )}
        </fieldset>
      </form>
    </>
  );
};

export default Formulario;
