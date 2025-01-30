import React, { useState } from 'react';
//import servicioInformacion from '../../servicios/servicioInformacion';
import '../estilos/formulario.css';


function FormularioCarrito({ productos,setProductos,informacion }) {
     // Almacenar los errores del formulario
     const [errores, setErrores] = useState({});
    // Almacenar los valores del formulario
    const [form, setForm] = useState({
        producto:'',
        cantidad: ''
    });
    //para gestionar los cambios
    const gestionarCambio = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

     //para validar que este correcta
     const validar = () => {
        const nuevosErrores = {};

        // Validación para "nombre"
        if (!form.producto.trim()) {
            nuevosErrores.producto = 'El producto es obligatorio';
        }
        /**  informacion.map((info) => {
            if(form.producto!= info){
                nuevosErrores.producto = 'El producto no esta';
            }
        }
        )*/
       
        

        // Validación para "precio"
        if (!form.cantidad.trim()) {
            nuevosErrores.cantidad = 'la cantidad es obligatorio';
        } else if (isNaN(form.cantidad) || Number(form.cantidad) >5) {
            nuevosErrores.precio = 'la cantidad debe ser un número válido y menor que 5 ';
        }

        setErrores(nuevosErrores);

        // Retorna true si no hay errores, de lo contrario retorna false
        return Object.keys(nuevosErrores).length === 0;
    };

    //para enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault();

        // Validar antes de enviar
        if (validar()) {
            console.clear();
            console.log('Formulario Enviado', form);
            /*if(buscarProducto(informacion,form.producto)){
                const nuevoProducto = {

                    producto: form.producto,
                    cantidad:Number(form.cantidad ) ,
                };
            } */
                /**const nuevoProducto = {
                    producto: form.producto,
                    //acuerdate
                    cantidad:Number(form.cantidad ) ,
                };
           servicioInformacion.getAll()
                .then((response)=>{
                    setProductos(response.data);
                })
            } */
            
            
            
            /*prductito=nuevoProducto.producto;
            function buscarProducto(informacion,prductito ) {
                if(informacion.find(producto => producto.nombre.toLowerCase() === prductito.toLowerCase()) || null){
                    setProductos([...productos, nuevoProducto]);
                }
            } */
            setProductos([...productos, nuevoProducto]);

        }
    };
    return(
        <div class="form-container">
        <h1>Incluir Producto al Carrito</h1>
        <form onSubmit={enviarFormulario}>
            <label htmlfor="producto">Productos:</label>
            <select 
            id="producto"
             name="producto"
             value={form.producto}
             onChange={gestionarCambio}
             >
                <option value="aceitunas">Aceitunas</option>
                <option value="calabacin">Calabacín</option>
                <option value="ajos">Ajos</option>
                <option value="calabaza">Calabaza</option>
            </select>
            {errores.producto && <p >{errores.producto}</p>}

            <label htmlfor="cantidad">Cantidad:</label>
            <input
             type="number" 
             id="cantidad"
              name="cantidad"
              value={form.cantidad}
              onChange={gestionarCambio}
               min="1"
                max="10"
                 required/>
            {errores.cantidad && <p >{errores.cantidad}</p>}

            <button type="submit">Agregar al Carrito</button>
        </form>
    </div>
    )


}
export default FormularioCarrito;
