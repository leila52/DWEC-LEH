
import http from "./http-axios.js";

class ServicioInformacion {
   getAll() {
     return http.get("/informacion");
   }  

   getPorNombre(nombre) {
    return http.get(`/informacion?nombre=${nombre}`);
  } 

  getPorPrecio(precioMenor,precioSuperior){
    let url= "/informacion?"
    if (precioMenor){
      url+=`precio_gt=${precioMenor}`
    }
    if (precioSuperior){
      url+=`&precio_lt=${precioSuperior}`
    }
    return http.get(url);
  }

  get(id) {
    return http.get(`/informacion/${id}`);
  } 

  borrarElemento(id){
    
    return http.delete(`/informacion/${id}`)
  }

  actualizarElemento(id,nombre,precio,descripcion){
    return http.patch(`informacion/${id}`,
      { "id":id, "nombre": nombre, "precio": Number(precio),  "descripcion": descripcion}
    )
  }
}

export default new ServicioInformacion();
