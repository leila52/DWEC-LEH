import ServicioAficiones from "../../servicios/servicioAficiones.js";
import Swal from "sweetalert2";

const AficionBorrar = (aficion, aficiones, setAficiones) => {
 
Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
        ServicioAficiones.delete(aficion.id)
        .then(() => {
          Swal.fire("Afición borrada correctamente");
          const nuevasAficiones = aficiones.filter((a) => a.id !== aficion.id);
          setAficiones(nuevasAficiones);
          Swal.fire(
            "¡Eliminado!",
            "El elemento ha sido eliminado.",
            "success"
          );
        })
        .catch(() => {
          Swal.fire("ERROR, No se ha borrado la afición");
        });           
    }
  });
};

export default AficionBorrar;

