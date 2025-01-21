import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import { Routes,  Route } from 'react-router-dom';
import Pagina404 from './componentes/Pagina404';
import Detalle from './componentes/Detalle';
import DetalleProducto from './componentes/DetalleProducto';

function App() {
  const informacion = [ 
    { url: "../imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
    { url: "../imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
    { url: "../imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
  ];

  const [total, setTotal] = useState(0); // Estado para el importe total
  const [productos, setProductos] = useState([]); 
  const [productosJson, setProductosJson] = useState([]);// Lista de productos del carrrito

  return (
    <div className="App">
      
      <header className="App-header">
        {/* Pasar el total al menú superior */}
        <MenuSuperior 
            total={total} 
            productosJson={productosJson}
                  />
      </header>
      <main>
        {/* Pasar total y setTotal a ListaImagenes */}
        
        <Routes>
          <Route  path='/detalle-carrito' element={<Detalle productos={productos} informacion={informacion} productosJson={productosJson}/>}/>
      <Route path='/' 
      element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos}  productosJson={productosJson} setProductosJson={setProductosJson} informacion={informacion}/>} />
      
      <Route path='/detalle-producto/:nombre'
       element={<DetalleProducto informacion={informacion}/>}/>
      
      <Route path='*' element={<Pagina404/>} />

      </Routes>
      </main>
    </div>
  );
}

export default App;
