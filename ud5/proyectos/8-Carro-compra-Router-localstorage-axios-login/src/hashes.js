const bcrypt = require("bcrypt");

const usuarios = [
  { id: "1", nombre: "agustin", pass: "123" },
  { id: "2", nombre: "ana", pass: "456" },
  { id: "3", nombre: "juanito", pass: "789" },
];

const saltRounds = 10;
usuarios.forEach(user => {
  user.pass = bcrypt.hashSync(user.pass, saltRounds);
});

console.log(JSON.stringify({ usuarios }, null, 2));