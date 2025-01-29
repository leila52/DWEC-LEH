import React, { useState } from "react";
import servicioProductos from "../../servicios/servicioProductos";
import Swal from "sweetalert2";
function EditarProductos({ productos, setproductos, onClose }) {
  // Almacenar los errores del formulario
  const [errores, setErrores] = useState({});

  // Almacenar los valores del formulario
  const [form, setForm] = useState({
    nombre: productos.nombre,
    descripcion: productos.descripcion,
    precio: productos.precio,
    url: productos.url,
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
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    // Validación para "descripcion"
    if (form.descripcion.length === 0 || form.descripcion.length > 100) {
      nuevosErrores.descripcion =
        "La descripción debe tener entre 0 y 100 caracteres";
    }
    // Validación para "importe" (precio)
    if (!form.precio || isNaN(form.precio) || form.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser un número mayor que 0";
    }
    //Validación de la url
    if (!form.url.trim()) {
      nuevosErrores.url = "LA URL DEL SERVICIO ES OBLIGATORIO";
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
      console.log("Formulario Enviado", form);

      const editarProducto = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        precio: form.precio,
        url: form.url,
      };

      //Enviar por Axios al Json de BD
      servicioProductos
        .update(productos.id, editarProducto)
        .then((response) => {
          Swal.fire("Servicio actualizada correctamente");
          // Limpiar el formulario después de agregar
          setForm({
            nombre: "",
            descripcion: "",
            precio: "",
            url: "",
          });

          //Le ponemos el id correcto de la BD
          // nuevaAficion.id=response.data.id

          servicioProductos.getAll().then((response) => {
            setproductos(response.data);
          });
          
          onClose();
        })
        .catch((error) => {
          Swal.fire("ERROR al crear producto");
        });
    }
  };

  return (
    <form onSubmit={enviarFormulario}>
      {/* Campo de texto para nombre */}
      <label htmlFor="nombre">Nombre del servicio a Editar</label>
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

      {/* Campo de texto para (precio) */}
      <br />
      <label htmlFor="precio">Precio del Servicio (€)</label>
      <input
        id="precio"
        type="number"
        name="precio"
        value={form.precio}
        onChange={gestionarCambio}
        placeholder="Escribe el precio del servicio"
      />
      {errores.precio && <p className="error">{errores.precio}</p>}

      {/* Campo de texto para la url */}
      <br />
      <label htmlFor="url">Nombre de la url:</label>
      <input
        type="text"
        id="url"
        name="url"
        value={form.url}
        onChange={gestionarCambio}
        placeholder="Escribe la url de la foto"
      />
      {errores.url && <p className="error">{errores.url}</p>}
      {/* Botón de envío */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default EditarProductos;
