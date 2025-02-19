import { useEffect, useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import DetalleCarrito from './componentes/DetalleCarrito'
import { AuthProvider } from './Login/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import Pagina404 from './componentes/Pagina404';
import DetalleProducto from './componentes/DetalleProducto';
import UseStorageState from './servicios/UseStorageState';
import ServicioInformacion from './servicios/ServicioInformacion';
import Login from './Login/login';
import RutasProtegidas from './Login/RutasProtegidas';


function App() {

  const [informacion, setInformacion] = useState([])

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
  const [productos, setProductos] = UseStorageState("productos", []); // Lista de productos del carrrito

  // authProvider es la hamburges dentro esta luego dentro esta Routes para los contenidos,luego en cada elemento Route y dentro para lo del login rutasAnidadas
  return (
    
    <AuthProvider>
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
            element={
            <RutasProtegidas><ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos} informacion={informacion} /></RutasProtegidas>
            }
          />

          <Route
            path="/login"
            element={<Login />}
          />

          {/* Detalle del carrito de la compra */}
          <Route path="/detalle-carrito" element={
            <RutasProtegidas> <DetalleCarrito productos={productos} setProductos={setProductos} total={total} setTotal={setTotal} /></RutasProtegidas>
           } />

          <Route path="/producto/:nombre" element={
            <RutasProtegidas><DetalleProducto informacion={informacion} /></RutasProtegidas>
            } />

          <Route path="*" element={<Pagina404 />} />



        </Routes>
      </main>
    </div>

    </AuthProvider>

    

  );
}

export default App
