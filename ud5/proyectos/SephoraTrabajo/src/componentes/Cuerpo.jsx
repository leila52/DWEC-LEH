
import React, { useEffect } from "react";
import servicioInformacion from "../servicios/servicioInformacion";
import { buscarProducto,añadir } from "../herramientas/herramientas";
import "../estilos/Cuerpo.css";
import Swal from 'sweetalert2';

const Cuerpo = ({ informacion, setInformacion, productoM, setProductoM, total, setTotal }) => {

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
    const AnadirACesta=(nombre, precio)=>{
    setTotal(total+precio);
        
    if (buscarProducto(nombre, productoM) === null) {
        setProductoM((elegidoProducto)=>[...elegidoProducto,{nombre,cantidad:1}]);
    }else{
        setProductoM((elegidoProducto)=> añadir(elegidoProducto,nombre))
    }
    Swal.fire("Producto añadido a la cesta", `${nombre} añadido`, "success");
    }



return(
    <>
        <ul className="informacion-list">
                {informacion.length > 0 ? (
                    informacion.map((info) => (
                        <li key={info.id} className="info-item">
                            <img src={info.url} alt={info.nombre} />
                            <div>
                                {info.nombre}: {info.precio}
                            </div>
                            <div>
                                <button
                                    onClick={() =>
                                        AnadirACesta(info.nombre, info.precio)
                                    }
                                >
                                    Añadir a la cesta
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No se encontraron servicios.</p>
                )}

            </ul>
    </>

);
}
export default Cuerpo;
