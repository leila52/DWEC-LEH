import './App.css'
import { useState } from 'react';
import Menu from './componentes/Menu';
import Cuerpo from './componentes/Cuerpo';

function App() {
  const [informacion, setInformacion] = useState([])
  const[productoM,setProductoM]=useState([]);
  const [total,setTotal]=useState(0);

  return (
    <>
       <Menu
      total={total}
      setTotal={setTotal}
       productoM={productoM}
      setProductoM={setProductoM}
      informacion={informacion}
       />
   <Cuerpo 
      informacion={informacion}
      setInformacion={setInformacion}
      productoM={productoM}
      setProductoM={setProductoM}
      total={total}
      setTotal={setTotal}
      />
    </>
  )
}

export default App
