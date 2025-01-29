import { useState } from 'react'
import './App.css'
import Menu from './componentes/Menu'
import Cuerpo from './componentes/Cuerpo'
import Inferior from './componentes/Inferior'

function App() {
  const [informacion, setInformacion] = useState([])
  const[producto,setProducto]=useState([]);
  const [total,setTotal]=useState(0);

  return (
    <>
      <Menu
      total={total}
      setTotal={setTotal}
       producto={producto}
      setProducto={setProducto}
      informacion={informacion}
       />


      <Cuerpo 
      informacion={informacion}
      setInformacion={setInformacion}
      producto={producto}
      setProducto={setProducto}
      total={total}
      setTotal={setTotal}
      />
      <Inferior informacion={informacion}/>
    </>
  )
}

export default App
