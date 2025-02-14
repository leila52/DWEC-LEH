import './App.css'
import { useEffect, useState } from 'react'
import Menu from './componentes/Menu';
import Cuerpo from './componentes/Cuerpo';
import Pagina404 from './componentes/Pagina404';
import UseStateStorage from './servicioStorage/UseStateStorage';
import ServicioUsuario from './servicioLogIn/ServicioUsuario';
//npm install react-router-dom
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './login/AuthProvider';
import Login from './login/login';
import RutasProtegida from './login/RutasProtegidas';
import DetalleCarrito from './componentes/DetalleCarrito';
import skinCare from './componentes/SkinCare';

function App() {
  const [informacion, setInformacion] = useState([]);
  const [skincare, setSkinCare] = useState([]);
  useEffect(() => {
    ServicioUsuario.getAllInformacion()
      .then((response) => {
        //almacenamos toda la info
        setInformacion(response.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question",
        });
      });
  },//importante poner esto 
    []);
  useEffect(() => {
    ServicioUsuario.getAllSkinCare()
      .then((response) => {
        //almacenamos toda la info
        setSkinCare(response.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question",
        });
      });
  },//importante poner esto 
    []);
  const [productoM, setProductoM] = UseStateStorage("productoM", []);
  const [total, setTotal] = UseStateStorage("total", 0);
  return (
    <AuthProvider>
      <Menu
        total={total}
        setTotal={setTotal}
        productoM={productoM}
        setProductoM={setProductoM}
        informacion={informacion}
      />
      <Routes>

        <Route
          path="/"
          element={
            <RutasProtegida>
              <Cuerpo
                informacion={informacion}
                setInformacion={setInformacion}
                productoM={productoM}
                setProductoM={setProductoM}
                total={total}
                setTotal={setTotal}
              />
            </RutasProtegida>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />
         <Route path="/detalle-carrito" element={
               <RutasProtegida>
              <DetalleCarrito productoM={productoM} informacion={informacion} />
              </RutasProtegida>
              } />

<Route
          path="/skinCare"
          element={
            <RutasProtegida>
              <skinCare
              skincare={skincare}
               setSkinCare={setSkinCare}
                productoM={productoM}
                setProductoM={setProductoM}
                total={total}
                setTotal={setTotal}
              />
            </RutasProtegida>
          }
        />

        <Route path="*" element={<Pagina404 />} />

      </Routes>

      </AuthProvider>
  )
}

export default App
