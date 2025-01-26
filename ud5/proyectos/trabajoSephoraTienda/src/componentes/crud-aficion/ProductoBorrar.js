import servicioStock from "../../servicios/servicioStock.js";
import Swal from "sweetalert2";

const ProductoBorrar = (producto, stock, setStock) => {
 
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
        servicioStock.delete(producto.id)
        .then(() => {
          Swal.fire("Afición borrada correctamente");
          const nuevoProducto = stock.filter((a) => a.id !== producto.id);
          setStock(nuevoProducto);
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

export default ProductoBorrar;

