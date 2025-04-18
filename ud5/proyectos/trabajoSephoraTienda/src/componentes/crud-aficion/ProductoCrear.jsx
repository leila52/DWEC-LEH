import React, { useState } from 'react';
import '../../estilos/Formulario.css';  // Asegúrate de crear un CSS adecuado
import servicioStock from '../../servicios/servicioStock';  // Cambié a servicioStock
import Swal from 'sweetalert2';

function ProductoCrear({ productos, setProductos, onClose }) {
  // Almacenar los errores del formulario
  const [errores, setErrores] = useState({});

  // Almacenar los valores del formulario
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    url: ''
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
    if (form.descripcion.length === 0 || form.descripcion.length > 100) {
      nuevosErrores.descripcion = 'La descripción debe tener entre 1 y 100 caracteres';
    }

    // Validación para "precio"
    if (!form.precio || isNaN(form.precio) || form.precio <= 0) {
      nuevosErrores.precio = 'El precio debe ser un número mayor a 0';
    }

    // Validación para "url" (solo que no esté vacío en este caso)
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

      const nuevoProducto = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        precio: form.precio,
        url: form.url
      };

      // Enviar por Axios al Json de BD
      servicioStock.create(nuevoProducto)
        .then(response => {
          Swal.fire("Producto creado correctamente");
          // Limpiar el formulario después de agregar
          setForm({
            nombre: '',
            descripcion: '',
            precio: '',
            url: ''
          });

          // Le ponemos el id correcto de la BD
          nuevoProducto.id = response.data.id;

          // Actualizar el estado local de productos
          setProductos([...productos, nuevoProducto]);

          // Cerramos el modal
          onClose();

        })
        .catch(error => {
          Swal.fire("ERROR, Al crear producto");
        });
    }
  };

  return (
    <form onSubmit={enviarFormulario}>
      {/* Campo de texto para nombre */}
      <label htmlFor="nombre">Nombre del Producto a Añadir</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={gestionarCambio}
        placeholder="Escribe el nombre del producto"
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      {/* Campo de texto para descripción */}
      <label htmlFor="descripcion">Descripción del Producto</label>
      <textarea
        id="descripcion"
        name="descripcion"
        value={form.descripcion}
        onChange={gestionarCambio}
        placeholder="Escribe una breve descripción del producto"
      />
      {errores.descripcion && <p className="error">{errores.descripcion}</p>}

      {/* Campo de texto para precio */}
      <label htmlFor="precio">Precio del Producto</label>
      <input
        id="precio"
        type="number"
        name="precio"
        value={form.precio}
        onChange={gestionarCambio}
        placeholder="Escribe el precio del producto"
      />
      {errores.precio && <p className="error">{errores.precio}</p>}

      {/* Campo de texto para la URL de la imagen */}
      <label htmlFor="url">URL de la Imagen</label>
      <input
        id="url"
        type="text"
        name="url"
        value={form.url}
        onChange={gestionarCambio}
        placeholder="Escribe la URL de la imagen del producto"
      />
      {errores.url && <p className="error">{errores.url}</p>}

      {/* Botón de envío */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ProductoCrear;
