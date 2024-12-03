import React, { useState } from "react";
import './estilos/FormularioBase.css';


function FormularioBase(){

    const [form,setForm] = useState({
        nombre: '',
        appellido:''
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
    const enviarFormulario=(evento)=>{
        evento.preventDefault();
        console.log("valores del formulario: ",form)
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
            <label htmlFor="nombre"> appellido</label>
            <input
                id="appellido"
                type="text"
                name="appellido"
                value={form.appellido}
                onChange={gestionarCambio}
                placeholder='Escribe tu appellido'
            
            />
            <button type='submit'>enviar</button>
            
        </form>
    )
}

export default FormularioBase;