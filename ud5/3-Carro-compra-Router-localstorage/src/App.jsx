import { useEffect, useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import DetalleCarrito from './componentes/DetalleCarrito'

import {Routes, Route } from 'react-router-dom';
import Pagina404 from './componentes/Pagina404';
import DetalleProducto from './componentes/DetalleProducto';
import UseStorageState from './servicios/UseStorageState';
import ServicioInformacion from './servicios/ServicioInformacion';


function App() {
  
  const [informacion,setInformacion] = useState([])

  useEffect(() => {
    ServicioInformacion.getAll()
      .then((response) => {
        setInformacion(response.data);
      })
      .catch((error) => {
        
       alert("No se descarga informacion")
      });
  }, []);
 

  const [total, setTotal] = UseStorageState("total", 0); // Estado para el importe total
  const [productos, setProductos] = UseStorageState("productos",[]); // Lista de productos del carrrito
  

  return (

    
    <div className="App">
      <header className="App-header">
        {/* Pasar el total al menú superior */}
        <MenuSuperior 
            total={total} 
            productos={productos}
                  />
      </header>
      <main>
      <Routes>
            {/* Ruta principal con ListaImagenes */}
            <Route 
              path="/" 
              element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos} informacion={informacion}/>} 
            />
            
            {/* Detalle del carrito de la compra */}
            <Route path="/detalle-carrito" element={<DetalleCarrito productos={productos} setProductos={setProductos} total={total} setTotal={setTotal}/>} />

            <Route path="/producto/:nombre" element={<DetalleProducto informacion={informacion}/>} />
            
            <Route path="*" element={<Pagina404 />} />

            

          </Routes>
      </main>
    </div>
  
  );
}

export default App
