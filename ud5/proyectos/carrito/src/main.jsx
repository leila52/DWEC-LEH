import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cuerpo from './componentes/cuerpo/Cuerpo.jsx'
import Menu from './componentes/menu/Menu.jsx'
let total;
let productos;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
    <Cuerpo/>
   
  </StrictMode>,
)
