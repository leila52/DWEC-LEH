import React, { useState } from 'react';
import '../estilos/FormularioServicios.css'; // Cambia el nombre del archivo de estilos si es necesario
import ServicioAxios from '../servicios/ServicioAxios'; // Actualiza el nombre del servicio
import Swal from 'sweetalert2';

function FormularioServicios({ servicios, setServicios, onClose }) {
  // Almacenar los errores del formulario
  const [errores, setErrores] = useState({});
  
  // Almacenar los valores del formulario
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    url: '',
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

    // Validación para "importe"
    if (!form.importe || isNaN(form.importe) || form.importe <= 0) {
      nuevosErrores.importe = 'El importe debe ser un número mayor a 0';
    }

    // Validación para "url"
    if (!form.url.trim()) {
      nuevosErrores.url = 'La URL de la imagen es obligatoria';
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
      
      const nuevoServicio = {          
        nombre: form.nombre,
        descripcion: form.descripcion,
        importe: parseFloat(form.importe),
        url: form.url,
      };
      console.log(nuevoServicio);

      // Enviar por Axios al Json de BD
      ServicioAxios.create(nuevoServicio)
      .then(response => {
        Swal.fire("Servicio creado correctamente"); 
        // Limpiar el formulario después de agregar
        setForm({
          nombre: '',
          descripcion: '',
          importe: '',
          url: '',
        });
       
        // Le ponemos el id correcto de la BD
        nuevoServicio.id = response.data.id;

        // Actualizar el estado local de servicios
        setServicios([...servicios, nuevoServicio]);

        // Cerrar el modal
        onClose();
       
      })
      .catch(error => {
        Swal.fire("ERROR, al crear el servicio"); 
      });
    }
  };

  return(

  <form onSubmit={enviarFormulario}>
  {/* Campo de texto para nombre */}
  <label htmlFor="nombre">Nombre del Servicio</label>
  <input
    id="nombre"
    type="text"
    name="nombre"
    value={form.nombre}
    onChange={gestionarCambio}
    placeholder="Escribe el nombre del servicio"
  />
  {errores.nombre && <p className="error">{errores.nombre}</p>}

  {/* Campo de texto para descripción */}
  <label htmlFor="descripcion">Descripción del Servicio</label>
  <textarea
    id="descripcion"
    name="descripcion"
    value={form.descripcion}
    onChange={gestionarCambio}
    placeholder="Escribe una breve descripción del servicio"
  />
  {errores.descripcion && <p className="error">{errores.descripcion}</p>}

  {/* Campo de texto para importe */}
  <label htmlFor="importe">Importe</label>
  <input
    id="importe"
    type="number"
    name="importe"
    value={form.importe}
    onChange={gestionarCambio}
    placeholder="Escribe el importe del servicio"
  />
  {errores.importe && <p className="error">{errores.importe}</p>}

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

  {/* Botón de envío */}
  <button type="submit">Enviar</button>
</form>
);
}

export default FormularioServicios;
