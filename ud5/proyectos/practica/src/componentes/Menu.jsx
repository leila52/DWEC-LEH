import React, { useEffect, useState } from "react";
import '../estilos/Menu.css';

function Menu({ servicios }) {
    let total =0
    let elementos= servicios.length;
    //para calcular el total
    servicios.forEach(servicio => {
        total+=servicio.importe
        
    });
  return (
    <>
      <header>
        <nav>
          <a href="#contador">Puestos: {elementos}</a>
          <a href="#coste">
            Importe: {total ? total.toFixed(2) : "0.00"}€
          </a>
        </nav>
      </header>
    </>
  );
}

export default Menu;