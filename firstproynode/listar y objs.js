// listas/array/arreglo

const lista = [1, "asd", true, undefined, null];

const lista2 = new Array(2, "asd", true, undefined, null);

const lista3 = new Array(3);

const list4 = [lista, lista2, lista3];

lista3[0] = "first elem";

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(list4);

//objetos

const movil = {
  altura: 10,
  ancho: 15,
  marca: "apple",
  funciona: true,
  specs: ["5,4", "16GB"],
  target: {
    asd: "2",
    abc: 1,
  },
  "altura-ancho": "10por10",
};

console.table(movil);

movil.anyo = 2019;
movil.marca = "samsun";

console.table(movil);
console.log(movil.target.asd);

//fechas
// librerias de apoyo moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //utilizando MS
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2022");

console.log(fecha_cadena);

const fecha_valores = new Date(2022, 7, 15);
console.log(fecha_valores);

const dia = ahora.getDay();
const mes = ahora.getUTCMonth();
console.log(dia, mes);
