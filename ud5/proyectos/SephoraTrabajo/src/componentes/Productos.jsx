import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
//import "../estilos/Productos.css";

const Productos = ({ }) => {


  return (
    <>
      <h2>Productos</h2>
      <ul>
        <li><Link to="maquillaje">Maquillaje</Link></li>
        <li><Link to="skinCare">Skin Care</Link></li>
      </ul>
      <Outlet />
    </>

  );
}
export default Productos;
