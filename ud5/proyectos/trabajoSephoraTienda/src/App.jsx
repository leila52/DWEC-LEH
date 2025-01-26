import { useState , useEffect} from 'react'
import servicioStock from './servicios/servicioStock';
import FormularioAdministrador from './componentes/FormularioAdministrador';
import './App.css'
import Listado from './componentes/Listado';

function App() {
  

  return (
    <>
    <h1>Tienda sephora</h1>
      <Listado/>
    </>
  );
}

export default App
