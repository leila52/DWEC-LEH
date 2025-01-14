import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import { Routes,  Route } from 'react-router-dom';
import Pagina404 from './componentes/Pagina404';
import Detalle from './componentes/Detalle';

function App() {
  const informacion = [ 
    { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
    { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
    { url: "./imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
  ];

  const [total, setTotal] = useState(0); // Estado para el importe total
  const [productos, setProductos] = useState([]); // Lista de productos del carrrito

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
        {/* Pasar total y setTotal a ListaImagenes */}
        
        <Routes>
          <Route  path='/detalle-carrito' element={<Detalle productos={productos} informacion={informacion}/>}/>
      <Route path='/' 
      element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos}  informacion={informacion}/>} />
      <Route path='*' element={<Pagina404/>} />

      </Routes>
      </main>
    </div>
  );
}

export default App
