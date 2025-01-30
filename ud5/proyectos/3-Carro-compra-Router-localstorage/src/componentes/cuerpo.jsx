import '../estilos/cuerpo.css';
import React, { useEffect,  } from "react";
import { buscarProducto , incrementarCantidad } from '../herramientas/buscarProducto';
import servicioInformacion from '../servicios/servicioInformacion';



// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos , informacion ,setInformacion}) => {
  
  //coger inormacioon del json que es informacion
  useEffect(() => {
    servicioInformacion.getAll()
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

  const AnadirProducto = (nombre, precio) => {    
    
    
    setTotal(total + precio);    

    let productoAnadir= buscarProducto(informacion,nombre)

    if(buscarProducto(productos,nombre)===null){     
      
      setProductos([...productos,
        { url: productoAnadir.url, nombre: productoAnadir.nombre, precio: productoAnadir.precio, cantidad:1 }])

    }else{

      setProductos(incrementarCantidad(productos , nombre))

    }

    
   
  };


  return (
    <div className="container">
      {informacion.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt="imagen" />
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} Euros</p>
          <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
