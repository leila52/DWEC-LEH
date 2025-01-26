import React, { useState, useEffect } from 'react';
import '../../estilos/Formulario.css';  // Asegúrate de tener este archivo CSS
import servicioStock from '../../servicios/servicioStock';  // Cambié a servicioStock
import Swal from 'sweetalert2';

function ProductoEditar({ producto, setProductos, onClose }) {
    const [errores, setErrores] = useState({});

    // Inicializar el formulario solo si "producto" no es null
    const [form, setForm] = useState({
      nombre: producto ? producto.nombre : '',
      descripcion: producto ? producto.descripcion : '',
      precio: producto ? producto.precio : '',
      url: producto ? producto.url : '',
    });

    // Sincronización con los datos del producto
    useEffect(() => {
        if (producto) {
          console.log("Producto recibido:", producto); // Agrega este log
          setForm({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            url: producto.url,
          });
        }
      }, [producto]);
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

      if (!form.nombre.trim()) {
        nuevosErrores.nombre = 'El nombre es obligatorio';
      }
      if (form.descripcion.length === 0 || form.descripcion.length > 100) {
        nuevosErrores.descripcion = 'La descripción debe tener entre 1 y 100 caracteres';
      }
      if (!form.precio || isNaN(form.precio) || form.precio <= 0) {
        nuevosErrores.precio = 'El precio debe ser un número mayor a 0';
      }
      if (!form.url.trim()) {
        nuevosErrores.url = 'La URL de la imagen es obligatoria';
      }

      setErrores(nuevosErrores);

      return Object.keys(nuevosErrores).length === 0;
    };

    // Función para manejar el envío del formulario
    const enviarFormulario = (e) => {
      e.preventDefault();

      if (validar()) {
        console.clear();
        console.log('Formulario Enviado', form);

        const editarProducto = {
          nombre: form.nombre,
          descripcion: form.descripcion,
          precio: form.precio,
          url: form.url,
        };
        // Asegúrate de que `producto.id` está correcto
        console.log("Producto ID que se está enviando:", producto.id);
        console.log("Producto a actualizar:", editarProducto);

        servicioStock.update(producto.id, editarProducto)
          .then(response => {
            Swal.fire("Producto Actualizado correctamente");

            setForm({
              nombre: '',
              descripcion: '',
              precio: '',
              url: '',
            });

            servicioStock.getAll()
              .then((response) => {
                setProductos(response.data);
              });

            onClose();
          })
          .catch(error => {
            console.error("Error al actualizar producto:", error);
            Swal.fire("ERROR, Al actualizar el producto");
          });
      }
    };

    return (
      <form onSubmit={enviarFormulario}>
        <label htmlFor="nombre">Nombre del Producto a Editar</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={gestionarCambio}
          placeholder="Escribe el nombre del producto"
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}

        <label htmlFor="descripcion">Descripción del Producto</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={form.descripcion}
          onChange={gestionarCambio}
          placeholder="Escribe una breve descripción del producto"
        />
        {errores.descripcion && <p className="error">{errores.descripcion}</p>}

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

        <button type="submit">Enviar</button>
      </form>
    );
}

export default ProductoEditar;
