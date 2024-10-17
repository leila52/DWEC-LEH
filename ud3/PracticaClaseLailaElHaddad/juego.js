// Lista de nombres de alumnos posibles
const students = [
  "Juan", "María", "Pedro", "Ana", "Sofía", "Luis", "Miguel", "Carolina", "Fernando", "Valeria"
];

// Set para almacenar nombres únicos
const uniqueNames = new Set();

// Map para contar ocurrencias de cada nombre
const nameCount = new Map();

// Función para generar un nombre aleatorio
function getRandomName() {
  const randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
}

// Función que agrega un nombre al Set y cuenta su ocurrencia
function addNameToSet() {
  const name = getRandomName();
  uniqueNames.add(name);
  
  // Contar ocurrencias del nombre
  if (nameCount.has(name)) {
    nameCount.set(name, nameCount.get(name) + 1);
  } else {
    nameCount.set(name, 1);
  }

  console.log(`Nombre generado: ${name}`);
}

// Usar setInterval para agregar un nombre cada 2 segundos
const intervalId = setInterval(addNameToSet, 2000);

// Usar setTimeout para mostrar estadísticas después de 10 segundos
setTimeout(() => {
  clearInterval(intervalId); // Detener el setInterval
  console.log("\n*** Resumen de nombres ***");

  // Convertir Set a Array para manipularlo
  const nameArray = [...uniqueNames];

  // Filtrar nombres con más de 5 caracteres
  const filteredNames = nameArray.filter(name => name.length > 5);
  
  // Mostrar nombres filtrados
  console.log("\nNombres con más de 5 caracteres:");
  filteredNames.forEach(name => console.log(name));

  // Usar map() para poner los nombres en mayúsculas
  const uppercasedNames = filteredNames.map(name => name.toUpperCase());
  console.log("\nNombres en mayúsculas:");
  console.log(uppercasedNames);

  // Mostrar el conteo de nombres
  console.log("\nConteo de nombres:");
  nameCount.forEach((count, name) => {
    console.log(`${name}: ${count}`);
  });

}, 10000); // 10 segundos

