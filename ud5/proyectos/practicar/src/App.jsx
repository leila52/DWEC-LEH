import { useState } from 'react'
import './App.css'
import Menu from './componentes/menu'
import Cuerpo from './componentes/cuerpo'
import Inferior from './componentes/inferior'


function App() {
  const [productos, setproductos] = useState([]) //IMPORTANTE QUE SEA VACÍO
  const [productosJson, setproductosJson] = useState([])
  return (
    <>
      <Menu productos={productos} setproductos={setproductos} productosJson={productosJson} setproductosJson={setproductosJson} />
      <Cuerpo productos={productos} setproductos={setproductos} productosJson={productosJson} setproductosJson={setproductosJson} />
      <Inferior productos={productos} setproductos={setproductos} />
    </>
  )
}

export default App
