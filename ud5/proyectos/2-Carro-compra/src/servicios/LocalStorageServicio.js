class LocalStorageServicio {
    static get(clave) {
        try {
            const item = localStorage.getItem(clave);
            /*
            if(item === undefined){
                return null;
            }else{
                return JSON.parse(item);
            } */
            return (item != undefined) ? JSON.parse(item) : null;
        }
        catch (error) {
            console.log(`error leyendo parametro ${clave} mas detalle ${error}`)
            return null
        }
    }
    static set(clave, valor) {
        try {
            const item = localStorage.setItem(clave, JSON.stringify(valor));
        }
        catch (error) {
            console.log(`error leyendo parametro ${clave} mas detalle ${error}`)

        }
    }

}
export default LocalStorageServicio;