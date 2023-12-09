import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/header/Header";
import DataContext from "./context/DataContext";

import Historial from "./componentes/Historial";

const App = () => {
  const [pack, setPack] = useState(null);
  const [travel, setTravel] = useState(null)
  const [boleto, setBoleto] = useState(1)
  const [destinos, setDestino] = useState();
  const [valor, setValor] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setDestino(data))

  }, [])

  
    const [historial, setHistorial] = useState(() => {
    let getLocal = localStorage.getItem("historial")
      if (getLocal) return JSON.parse(getLocal)
      localStorage.setItem("historial", JSON.stringify([]))
      return []
  });
 

  useEffect(() => localStorage.setItem("historial", JSON.stringify(historial)), [historial]);

 


  const titulo = "Travel-Cotizador"
  return (
    <BrowserRouter>
      <Routes>
        
          <Route 
            path="/" 
            element={
           <> 
             <Header />   
             <DataContext.Provider value={{ destinos,  pack,  setPack, travel, setTravel, boleto, setBoleto,historial,setHistorial,valor,setValor}}> 
              
               <Outlet/>

             </DataContext.Provider>
            
            </>} >
            <Route index element={
             destinos ?(
              <>
                <Formulario />
                 
              </>
                 ):<h2>cargando...</h2>

            } ></Route>
            <Route path="historial" element={<Historial/>} ></Route>
          </Route>
          <Route 
          path="*" 
          element={
            <>
              <h3>Saliste del camino, <Link to={"/"}>Volver</Link>
              </h3>
            </>}/>
            
            
      </Routes>
    </BrowserRouter>
  )
}

export default App;
