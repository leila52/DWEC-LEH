import React, { useState } from 'react';
import '../estilos/FormularioServicios.css';
import ServicioAxios from '../servicios/ServicioAxios';
import Swal from 'sweetalert2';


function FormularioServicioEdit({servicio, setServicios, onClose}) {
  // Almacenar los errores del formulario
  const [errores, setErrores] = useState({});
  
  // Almacenar los valores del formulario
  const [form, setForm] = useState({
    nombre: servicio.nombre,
    descripcion: servicio.descripcion,
  });

  //////////////////////////////////////
  // Función para gestionar los cambios en los campos del formulario
  //////////////////////////////////////
  const gestionarCambio = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //////////////////////////////////////
  // Función de validación
  //////////////////////////////////////
  const validar = () => {
    const nuevosErrores = {};

    // Validación para "nombre"
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }


    setErrores(nuevosErrores);

    // Retorna true si no hay errores, de lo contrario retorna false
    return Object.keys(nuevosErrores).length === 0;
  };

  // Función para manejar el envío del formulario
  const enviarFormulario = (e) => {
    e.preventDefault();

    // Validar antes de enviar
    if (validar()) {
      console.clear();
      console.log('Formulario Enviado', form);
      
      const editarAficion = {          
        nombre: form.nombre,
        descripcion: form.descripcion,
      };

     
     
      //Enviar por Axios al Json de BD
      ServicioAxios.update(servicio.id,editarAficion)
      .then(response => {
        Swal.fire("Afición Actualizada correctamente"); 
        // Limpiar el formulario después de agregar
        setForm({
          nombre: '',
          descripcion: '',
        });
       
        // // Le ponemos el id correcto de la BD
        // nuevaAficion.id=response.data.id

       servicioAficiones.getAll()
            .then((response) => {
              setServicios(response.data);
            })


        //Cerramos el modal
        onClose();
       
      })
      .catch(error => {
        Swal.fire("ERROR, Al crear afición"); 
      });

    }
   
  };

  return (
    <form onSubmit={enviarFormulario}>
      {/* Campo de texto para nombre */}
      <label htmlFor="nombre">Nombre de la Afición Editar</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={gestionarCambio}
        placeholder="Escribe el nombre de la afición"
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      {/* Campo de texto para descripción */}
      <label htmlFor="descripcion">Descripción de la Afición</label>
      <textarea
        id="descripcion"
        name="descripcion"
        value={form.descripcion}
        onChange={gestionarCambio}
        placeholder="Escribe una breve descripción de la afición"
      />
      {errores.descripcion && <p className="error">{errores.descripcion}</p>}

      {/* Botón de envío */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioServicioEdit;
