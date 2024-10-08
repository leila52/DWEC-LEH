let cantidadAlumnos= prompt("introduce el numero de alumnos:");
let alumnos= new Map();
let nota ="";
let nombre ="";
let notasTotales=0;
let media=0;
for(let i=0;i<cantidadAlumnos;i++){
    nombre=prompt("introduce el nombre del alumno");
    nota =prompt("introduce la nota del alumno");
    alumnos.set('nombre', nombre);
    alumnos.set('nota',nota);
    console.log(alumnos);
    notasTotales=notasTotales + parseInt(alumnos.get("nota"));

}
media=notasTotales/cantidadAlumnos;
console.log(`la media es: ${media}`);

