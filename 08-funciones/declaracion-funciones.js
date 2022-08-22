// uso de funciones

const nom = "jp";

saludar(nom);

function saludar(param1) {
  console.log(`Hola ${param1}`);
}
saludar("juan");
////
despedir(nom);

function despedir(nombre) {
  nombre = "diego";
  console.log(`Adios ${nombre}`);
}
///

let persona = { nombre: "juan", apellido: "pablo" };
saludarPersona(persona);

function saludarPersona(persona) {
  console.log(`Hola ${persona.nombre} ${persona.apellido}`);
}

function saludarPersonaModifica(persona) {
  persona.nombre = "cambia2";
  console.log(`Hola ${persona.nombre} ${persona.apellido}`);
}
saludarPersonaModifica(persona);

console.log(persona);

saludar();

/// como meter un default para devolver

function imprimeNumero(num = "no envio nada") {
  return num;
}

console.log(imprimeNumero(7));
console.log(imprimeNumero());

/// con funcion propagacion

function imprimir(...params) {
  console.log(params);
}

imprimir(1, 2, 3, 4, 5, "hola", { id: 9 });

////
function suma(...nums) {
  console.log(...nums);
  return nums.reduce((a, b) => a + b);
}

console.log(suma(1, 2, 3, 4, 2));

let salt = Math.random();

console.log(multiplicar(2, 3));

function multiplicar(a = 0, b = 0) {
  let aux_local;
  return a * b + salt;
}
