import React, { useState } from "react";
import './estilos/FormularioBase.css';


function FormularioBase(){

    const [errores,setErrores]=useState({});

    const [form,setForm] = useState({
        nombre: '',
        appellido:'',
        descripcion:''
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
        if(!form.appellido.trim()){
            nuevosErrores.apellido='el apellido es obligatorio';
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
            console.log("correct valores del formulario: ",form)
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
            <label htmlFor="apellido"> appellido</label>
            <input
                id="appellido"
                type="text"
                name="appellido"
                value={form.appellido}
                onChange={gestionarCambio}
                placeholder='Escribe tu appellido'
            
            />
            {errores.apellido && <p className="error">{errores.apellido}</p>}
             <label htmlFor="descripcion"> descripcion</label>
            <input
                id="descripcion"
                type="textarea"
                name="descripcion"
                value={form.descripcion}
                onChange={gestionarCambio}
            
            />
            {errores.descripcion && <p className="error">{errores.descripcion}</p>}
            <button type='submit'>enviar</button>
            
        </form>
    )
}

export default FormularioBase;