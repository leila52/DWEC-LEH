
import React, { useEffect,useState } from "react";
import servicioInformacion from "../servicios/servicioInformacion";
import { buscarProducto,añadir } from "../herramientas/herramientas";
import "../estilos/Cuerpo.css";
import Swal from 'sweetalert2';

const Cuerpo = ({ informacion, setInformacion, productoM, setProductoM, total, setTotal }) => {
    const [tonosSeleccionados, setTonosSeleccionados] = useState({});
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

    // Manejar la selección del tono
    const manejarCambioTono = (productoId, tono) => {
        setTonosSeleccionados(prevTonos => ({
            ...prevTonos,
            [productoId]: tono
        }));
    };
        const AnadirACesta=(nombre, precio,productoId)=>{
            const tonoSeleccionado = tonosSeleccionados[productoId];
            if (!tonoSeleccionado) {
                Swal.fire("Selecciona un tono", "Debes elegir un tono antes de añadir el producto", "warning");
                return;
            }
            setTotal(total+precio);
            // Verificamos si el producto con ese tono ya está en la cesta
            let productoExistente = false;
            let nuevaLista = productoM.map(p => {
            if (p.nombre === nombre && p.tono === tonoSeleccionado) {
                productoExistente = true;
                return { ...p, cantidad: p.cantidad + 1 };
            }
            return p;
        });

        if (!productoExistente) {
            nuevaLista.push({ nombre, tono: tonoSeleccionado, cantidad: 1 });
        }

        setProductoM(nuevaLista);

        Swal.fire("Producto añadido a la cesta", `${nombre} (${tonoSeleccionado}) añadido`, "success");
    };




return(
    <>
        <ul className="informacion-list">
                {informacion.length > 0 ? (
                    informacion.map((info) => (
                        <li key={info.id} className="info-item">
                            <img src={info.url} alt={info.nombre} />
                            <div>
                                <strong>{info.nombre}</strong>: ${info.precio.toFixed(2)}
                            </div>
                            <div>
                                <label htmlFor={`tono-${info.id}`}>Selecciona un tono: </label>
                                <select
                                    id={`tono-${info.id}`}
                                    onChange={(e) => manejarCambioTono(info.id, e.target.value)}
                                    value={tonosSeleccionados[info.id] || ""}
                                >
                                    <option value="">-- Selecciona --</option>
                                    {info.tonos_disponibles.map((tono) => (
                                        <option key={tono} value={tono}>{tono}</option>
                                    ))}
                                </select>
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
