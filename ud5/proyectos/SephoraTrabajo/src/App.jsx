import './App.css'
import Menu from './componentes/Menu';
import Cuerpo from './componentes/Cuerpo';
import UseStateStorage from './servicios/UseStateStorage';



function App() {
  const [informacion, setInformacion] =UseStateStorage("informacion",[]);
  const[productoM,setProductoM]=UseStateStorage("productoM",[]);
  const [total,setTotal]=UseStateStorage("total",0);

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
