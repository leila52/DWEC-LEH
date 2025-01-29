import { useState, useEffect } from 'react'
import Modal from './Modal'
import CrearProductos from './crud-productos/CrearProductos'
import EditarProductos from './crud-productos/EditarProductos'
import '../estilos/cuerpo.css'
import Swal from 'sweetalert2'
import ProductoDetalle from './crud-productos/ProductoDetalle'
import servicioProductos from '../servicios/servicioProductos'
import { buscarProducto, incrementarCantidad} from '../herramientas/buscarproducto'

const Cuerpo = ({ productos, setproductos, productosJson, setproductosJson}) => {
  const [productoSelecionado, setproductoSeleccionado] = useState(null);

  const [modals, setModals] = useState({
    crear: false,
    consultar: false,
    editar: false,
  });

  const gestionarModal = (tipoModal, estadoAbierto) => {
    setModals((previoModals) => ({ ...previoModals, [tipoModal]: estadoAbierto }));
  };

  // ************************************************
  // Carga inicial de todas las aficiones, 
  // Gracias a UseEffect, se ejecuta una única vez
  // ************************************************
  useEffect(() => {
    servicioProductos.getAll()
      .then((response) => {
        setproductos(response.data);
      })
      .catch((error) => {

        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question"
        });
      });
  }, []);

  // ************************************************
  // Manejadores de Eventos de : editar , crear y borrar 
  // Gracias a UseEffect, se ejecuta una única vez
  // ************************************************
  const consultarProducto = (producto) => {
    setproductoSeleccionado(producto);
    gestionarModal("consultar", true)
  };

  const EditarProducto = (producto) => {
    setproductoSeleccionado(producto);
    gestionarModal("editar", true)
  };

  const CrearProducto = () => {
    gestionarModal("crear", true)
  };
  const borrarProducto = (producto) => {
    servicioProductos.delete(producto.id)
      .then(() => {
        Swal.fire("Servicio borrado correctamente");
        const nuevosProductos = productos.filter((s) => s.id !== producto.id);
        setproductos(nuevosProductos);
      })
      .catch(() => {
        Swal.fire("ERROR, No se ha borrado el servicio");
      });
  };
//FUNCION PARA AÑADIR 1 PRODUCTO A LA CESTA:
const AñadirCesta = (nombre) => {
    //alert(`${nombre} añadido al carrito, con precio ${precio}`);
   if (buscarProducto(nombre, productosJson) === null) {
         setproductosJson([...productosJson, { nombre: nombre, cantidad: 1 }]);
         console.log("Se añade uno nuevo");
         console.log(productosJson);
       } else {
         setproductosJson(incrementarCantidad(productosJson, nombre));
         console.log("se ha actualizado la cantidad");
         console.log(productosJson);
       }
  };

  return (
    <>
      <ul className="aficiones-list">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <li key={producto.id} className="aficion-item">
              <div>
                <strong>{producto.nombre}</strong>: {producto.descripcion}
              </div>
              <div>
                <button onClick={() => consultarProducto(producto)}>Consulta</button>
                <button onClick={() => borrarProducto(producto)}>Borrar</button>
                <button onClick={() => EditarProducto(producto)}>Editar</button>
                <button onClick={() => AñadirCesta(producto.nombre, producto.precio)}>Añadir a la Cesta</button>

              </div>
            </li>
          ))
        ) : (
          <p>No se encontraron aficiones.</p>
        )}
      </ul>

      <button className="add-aficion-btn" onClick={CrearProducto}>Añadir Producto</button>


      <Modal isOpen={modals.crear} onClose={() => gestionarModal("crear", false)}>
        <CrearProductos productos={productos} setproductos={setproductos} onClose={() => gestionarModal("crear", false)} />
      </Modal>

      <Modal isOpen={modals.consultar} onClose={() => gestionarModal("consultar", false)}>
        {productoSelecionado && <ProductoDetalle producto={productoSelecionado} />}
      </Modal>

      <Modal isOpen={modals.editar} onClose={() => gestionarModal("editar", false)} >
        <EditarProductos productos={productoSelecionado} setproductos={setproductos} onClose={() => gestionarModal("editar", false)} />
      </Modal>


    </>
  )
}

export default Cuerpo
