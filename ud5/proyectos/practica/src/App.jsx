import { useState } from 'react'
import './App.css'
import Menu from './componentes/Menu';
import Cuerpo from './componentes/Cuerpo';
import Inferior from "./componentes/Inferior";

function App() {
  const [servicios,setServicios]=useState([]);
  const [cesta, setCesta] = useState([]); // Estado para la cesta
  const [total, setTotal] = useState(0); // Estado para el total


  return (
    <>
    <Menu  cesta={cesta} setCesta={setCesta} total={total}  setTotal={setTotal} servicios={servicios} />
    <Cuerpo servicios={servicios}
        setServicios={setServicios}
        cesta={cesta}
        setCesta={setCesta}
        total={total}
        setTotal={setTotal}/>
    <Inferior servicios={servicios} /> 
     
    </>
  )
}

export default App
