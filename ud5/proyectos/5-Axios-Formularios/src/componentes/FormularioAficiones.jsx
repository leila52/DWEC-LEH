import React, { useState } from 'react';
import '../estilos/FormularioAficiones.css';
import servicioAficiones from '../servicios/servicioAficiones';
import Swal from 'sweetalert2';


function FormularioAficiones({aficiones, setAficiones, onClose}) {
  // Almacenar los errores del formulario
  const [errores, setErrores] = useState({});
  
  // Almacenar los valores del formulario
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
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

    // Validación para "descripcion"
    if (form.descripcion && (form.descripcion.length < 10 || form.descripcion.length > 100)) {
      nuevosErrores.descripcion = 'La descripción debe tener entre 10 y 100 caracteres';
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
      
      const nuevaAficion = {          
        nombre: form.nombre,
        descripcion: form.descripcion,
      };

     

      //Enviar por Axios al Json de BD
      servicioAficiones.create(nuevaAficion)
      .then(response => {
        Swal.fire("Afición creada correctamente"); 
        // Limpiar el formulario después de agregar
        setForm({
          nombre: '',
          descripcion: '',
        });
       
        // Le ponemos el id correcto de la BD
        nuevaAficion.id=response.data.id

         // Actualizar el estado local de aficiones
        setAficiones([...aficiones, nuevaAficion]);

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
      <label htmlFor="nombre">Nombre de la Afición</label>
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

export default FormularioAficiones;
