import Swal from "sweetalert2";
import servicioInformacion from "../../servicios/servicioInformacion";
const InformacionBorrar=(info,informacion,setInformacion)=>{
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      })
      //para almacenar el nuevo json
      .then((result) => {
        if (result.isConfirmed) {
            servicioInformacion.delete(info.id)
            .then(() => {
              Swal.fire("Afición borrada correctamente");
              const nuevasInformaciones = informacion.filter((a) => a.id !== info.id);
              setInformacion(nuevasInformaciones);
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

export default InformacionBorrar;