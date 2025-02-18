import React, { useEffect, useState } from "react";
import servicioInformacion from "../serviciosAxios/servicioInformacion";
import { buscarProducto, añadir } from "../herramientas/herramientas";
import "../estilos/Inicio.css";
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
            <div></div>
        </>

    );
}
export default Inicio;
