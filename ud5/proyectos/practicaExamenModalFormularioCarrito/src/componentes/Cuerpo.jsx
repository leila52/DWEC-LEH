import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import servicioInformacion from "../servicios/servicioInformacion";
import InformacionBorrar from "./crud-informacion/InformacionBorrar.js";
import InformacionCrear from "./crud-informacion/InformacionCrear.jsx";
import InformacionEditar from "./crud-informacion/InformacionEditar.jsx";
import InformacionConsultar from "./crud-informacion/InformacionConsultar.jsx";
import { buscarProducto,añadir } from "../heramientas/herramientas.js";
import "../estilos/Cuerpo.css";
import Swal from 'sweetalert2';

const Cuerpo = ({ informacion, setInformacion, producto, setProducto, total, setTotal }) => {

    //para saber que producto ha seleccionado
    const [informacionSeleccionada, setInformacionSeleccionada] = useState(null);
    //para mostar el modal
    const [modals, setModals] = useState({
        crear: false,
        consultar: false,
        editar: false,
    });

    //gestionar modales
    const gestionarModal = (tipoModal, estadoAbierto) => {
        setModals((previoModals) => ({ ...previoModals, [tipoModal]: estadoAbierto }));
    };
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

    //manejar modales
    const consultarDetalleInformacion = (info) => {
        setInformacionSeleccionada(info);
        gestionarModal("consultar", true)
    };

    const EditarInformacion = (info) => {
        setInformacionSeleccionada(info);
        gestionarModal("editar", true)
    };

    const crearInformacion = () => {
        gestionarModal("crear", true)
    };

    const borrarInformacion = (info) => {
        InformacionBorrar(info, informacion, setInformacion)
    }
    const AnadirACesta=(nombre, precio)=>{
        setTotal(total+precio);
        
    if (buscarProducto(nombre, producto) === null) {
        setProducto((elegidoProducto)=>[...elegidoProducto,{nombre,cantidad:1}]);
    }else{
        setProducto((elegidoProducto)=> añadir(elegidoProducto,nombre))
    }
    Swal.fire("Producto añadido a la cesta", `${nombre} añadido`, "success");
    }



    return (
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
                                <button onClick={() => consultarDetalleInformacion(info)}>
                                    Consulta
                                </button>
                                <button onClick={() => borrarInformacion(info)}>Borrar</button>
                                <button onClick={() => EditarInformacion(info)}>Editar</button>
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
            <button className="add-aficion-btn" onClick={crearInformacion}>
                Añadir Afición
            </button>


            <Modal isOpen={modals.crear} onClose={() => gestionarModal("crear", false)}>
                <InformacionCrear informacion={informacion} setInformacion={setInformacion} onClose={() => gestionarModal("crear", false)} />
            </Modal>

            <Modal isOpen={modals.consultar} onClose={() => gestionarModal("consultar", false)}>
                {informacionSeleccionada && <InformacionConsultar info={informacionSeleccionada} />}
            </Modal>


            <Modal isOpen={modals.editar} onClose={() => gestionarModal("editar", false)} >
                <InformacionEditar informacion={informacionSeleccionada} setInformacion={setInformacion} onClose={() => gestionarModal("editar", false)} />
            </Modal>
        </>
    );
};
export default Cuerpo;