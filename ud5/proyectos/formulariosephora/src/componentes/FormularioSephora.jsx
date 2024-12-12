import React, { useState } from "react";
import '../estilos/Formulario.css';

function FormularioSephora({añadirfoto}){
    const [errores,setErrores]=useState({});

    const [form,setForm] = useState({
        nombre: '',
        descripcion:'',
        url:''
    })


    const gestionarCambio=(evento) =>{
        const{name,value,type,checked}=evento.target;
        //console.log(name,value,type,checked)
        setForm({
            //te despliega el objeto form
            ...form,
            [name]:value,
        })
    }

    const validar=()=>{
        const nuevosErrores={};
        if(!form.nombre.trim()){
            nuevosErrores.nombre='el nombre es obligatorio';
        }
        if(!form.url.trim()){
            nuevosErrores.url='el ur debe de ser obligatorio';
        }
        if(!form.descripcion.trim()){
            nuevosErrores.descripcion='la descripcion es obligatorio';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    }


    const enviarFormulario=(evento)=>{
        evento.preventDefault();   
        if(validar()){
            const nuevoproducto ={
                id:new Date().getTime,
                nombre: form.nombre,
                descripcion: form.descripcion,
                url: form.url
        };
        //lamamos a la funcion de onAddProduct para añadirlo
        añadirfoto(nuevoproducto);
        //limpiamos el formulario
        setForm({
            nombre: '',
            descripcion: '',
            url: ''
          });
        }else{
            console.log("valores del error ",errores)
        }
        
    }
    
    return (
        <form onSubmit={enviarFormulario}>
            
            <label htmlFor="nombre"> nombre</label>
            <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={gestionarCambio}
                placeholder='Escribe tu nombre'
            
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}
             <label htmlFor="descripcion"> descripcion</label>
            <input
                id="descripcion"
                type="textarea"
                name="descripcion"
                value={form.descripcion}
                onChange={gestionarCambio}
            
            />
            {errores.descripcion && <p className="error">{errores.descripcion}</p>}
            <label htmlFor="url">Url de la imagen</label>
            <input
                id="url"
                type="text"
                name="url"
                value={form.url}
                onChange={gestionarCambio}            
            />
            {errores.url && <p className="error">{errores.url}</p>}
            <button type='submit'>enviar</button>
            
        </form>
    )
}
export default FormularioSephora;