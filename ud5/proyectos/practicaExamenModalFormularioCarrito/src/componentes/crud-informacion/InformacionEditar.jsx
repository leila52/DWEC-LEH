import React, { useState } from 'react';
import servicioInformacion from '../../servicios/servicioInformacion';
import Swal from 'sweetalert2';
import '../../estilos/Formulario.css';
function InformacionEditar({ informacion, setInformacion, onClose }) {
    // Almacenar los errores del formulario
    const [errores, setErrores] = useState({});

    // Almacenar los valores del formulario
    const [form, setForm] = useState({
        url: informacion.url,
        nombre: informacion.nombre,
        precio: informacion.precio,
    });
    //gestionamos el cambio
    const gestionarCambio = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };
    //funcion validar
    const validar = () => {
        const nuevosErrores = {};

        // Validación para "nombre"
        if (!form.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio';
        }
        // Validación para "precio"
        if (!form.precio.trim()) {
            nuevosErrores.precio = 'El precio es obligatorio';
        }
        //validar url 
        if (!form.url.trim()) {
            nuevosErrores.url = 'la url es obligatorio';
        }
        setErrores(nuevosErrores);
        // Retorna true si no hay errores, de lo contrario retorna false
        return Object.keys(nuevosErrores).length === 0;
    };
    //funcion para manejar el envio del formulario
    const enviarFormulario = (e) => {
        e.preventDefault();
        // Validar antes de enviar
        if (validar()) {
          console.clear();
          console.log('Formulario Enviado', form);
          
          const editarInformacion = {          
            url: form.url,
            nombre: form.nombre,
            precio: form.precio,
          };
    
          //Enviar por Axios al Json de BD
          servicioInformacion.update(informacion.id,editarInformacion)
          .then(response => {
            Swal.fire("informacion Actualizada correctamente"); 
            // Limpiar el formulario después de agregar
            setForm({
                url: '',
                nombre: '',
                precio: '',
            });
            // // Le ponemos el id correcto de la BD
            // nuevaAficion.id=response.data.id
           servicioInformacion.getAll()
                .then((response) => {
                  setInformacion(response.data);
                })
            // //Cerramos el modal
            onClose();
          })
          .catch(error => {
            Swal.fire("ERROR, Al crear afición"); 
          });
        }
      };
      return(
        <form onSubmit={enviarFormulario} >
            {/* Campo de texto para URL */}
            <label htmlFor="url">URL de la Imagen</label>
            <input
                id="url"
                type="text"
                name="url"
                value={form.url}
                onChange={gestionarCambio}
                placeholder="Pega la URL de la imagen del servicio"
            />
            {errores.url && <p className="error">{errores.url}</p>}


            {/* Campo de texto para nombre */}
            <label htmlFor="nombre">Nombre de la Afición a Añadir</label>
            <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={gestionarCambio}
                placeholder="Escribe el nombre de la afición"
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}

            {/* Campo de texto para precio */}
            <label htmlFor="precio">Importe</label>
            <input
                id="precio"
                type="number"
                name="precio"
                value={form.precio}
                onChange={gestionarCambio}
                placeholder="Escribe el importe del servicio"
            />
            {errores.precio && <p className="error">{errores.precio}</p>}
            {/* Botón de envío */}
            <button type="submit">Enviar</button>
        </form>
      )

}



export default InformacionEditar;