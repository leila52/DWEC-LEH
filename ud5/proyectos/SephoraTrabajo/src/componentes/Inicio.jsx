import React, { useEffect, useState } from "react";
import servicioInformacion from "../serviciosAxios/servicioInformacion";
import { buscarProducto, añadir } from "../herramientas/herramientas";
import "../estilos/Inicio.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Inicio = ({ }) => {



    return (
        <>
            <div class="promo-container">
                <img class="promo-image" src="https://www.sephora.es/on/demandware.static/-/Sites-siteCatalog_Sephora_ES/es_ES/dw34c6b58a/2025/PLP_BANNER/W05/PLPBANNER_PROMO_IMPOSSIBLELOVE_W8.jpg" alt="Promo Sephora" />
                <div class="promo-text">
                    <h1>-20%* en top ventas 💔</h1>
                    <span>*Oferta válida del 18 al 19 de febrero de 2025, ambos inclusive, en Sephora.es y en la APP de Sephora. No válido para comprar tarjeta regalo, ni servicios. No acumulable con otras ofertas, descuentos, y/o promociones.</span>
                </div>
            </div>
            <div class="container">
            <div class="item">
                <img src="https://www.sephora.es/on/demandware.static/-/Library-Sites-SephoraV2/es_ES/dw09019b87/HOMEPAGE/W8/UNDERBANNER_READYSETGO.jpg" alt="" />
                <h2>Prime, set, go!</h2>
                <h3>Prebases cremosas, polvos, brumas: fija el maquillaje a tu manera.</h3>
                <div class="botonnn"><Link to="/maquillaje" >Maquillaje</Link></div>
                <p>*Excepto en tiendas de la marca.</p>
                
            
            </div>
            <div class="item">
                <img src="https://www.sephora.es/on/demandware.static/-/Library-Sites-SephoraV2/es_ES/dw8f626c66/HOMEPAGE/W8/UNDERBANNER_ERBORIANSKINTHERPY.jpg" alt="" />
                <h2>Novedad Erborian</h2>
                <h3>Tratamiento coreano con resultados visibles desde la 1ª noche*.</h3>
                <div class="botonnn"><Link to="/skinCare">Skin Care</Link></div>
                <p>Resultados comprobados mediante pruebas de eficacia y/o pruebas de consumidores en 33 voluntarios</p>
                </div>

            </div>
            
        </>

    );
}
export default Inicio;
