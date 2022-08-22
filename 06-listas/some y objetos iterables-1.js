// como saber si algun elemento cumple x condicion .some()
// devuelve true si por lo menos 1 cumple la cond
const array = [3, 5, 6, 8, 9, 0, 22, 33, 666, 88, -233];

const res = array.some((valor) => valor < 0);
console.log(res); /// devuelve true pq hay un numero negativo

const res2 = array.some((valor) => valor < -250);
console.log(res2);
/// devuelve false pq no hay numero menos a -250

const existe = array.some((valor) => valor === 6);

console.log(existe);

const listaObjs = [
  { nombre: "juan", edad: 22 },
  { nombre: "pablo", edad: 23 },
  { nombre: "CRUZ", edad: 25 },
  { nombre: "lalo", edad: 27 },
  { nombre: "caco", edad: 99 },
];

/// se fija si existe el name
const existeMiguel = listaObjs.some((persona) => persona.nombre === "lalo");
console.log(existeMiguel);

// como obtener la lista apartir de un obj iterable

const str = "sup im juan";

console.log(str);

const ar_str = Array.from(str);

console.log(ar_str);
console.log(...ar_str);

const set = new Set([2, 3, "hola", 5]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();

console.log(keys);

const ar_keys = Array.from(keys);

console.log(ar_keys);

/// ejemplo con el obj

const keysFromObj = Array.from(listaObjs.keys());

console.log(keysFromObj);
