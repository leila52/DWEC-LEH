import { useState } from 'react'
import './App.css'
import Menu from './componentes/Menu';
import Cuerpo from './componentes/Cuerpo';
import Inferior from "./componentes/Inferior";

function App() {
  const [servicios,setServicios]=useState([]);
  

  return (
    <>
    <Menu servicios={servicios}/>
    <Cuerpo servicios={servicios} setServicios={setServicios}/>
    <Inferior servicios={servicios} /> 
     
    </>
  )
}

export default App
