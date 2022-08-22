// objetos

const obj = {
  id: 1,
  nombre: "JP",
  apellido: "giacalone",
  isDev: true,
  librosFavoritos: ["libro1", "libro2", "libro3", "libro4"],
  "4-juegos": [
    { id: 1, name: "doom" },
    { id: 2, name: "dooms" },
  ],
};

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDev";
console.log(obj[prop]);

// para replicar la direccion de memoria del objeto
const obj2 = obj;
console.log(obj2);

obj2.nombre = "pepe";
console.log(obj2.nombre);
//se replica el cambio pq se copio la referencia
console.log(obj.nombre);

/// MANERA CORRECTA DE COPIAR OBJETOS
const obj3 = { ...obj };
obj3.nombre = "nombreobj3";

console.log(obj3.nombre);
console.log(obj2.nombre);

////
// como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
  { titulo: "lo que el viento se llevo", year: 1939 },
  { titulo: "titanic", year: 1997 },
  { titulo: "moana", year: 2016 },
  { titulo: "butterflyeffect", year: 2004 },
  { titulo: "TED", year: 2012 },
];

console.log(listaPeliculas);

// .sort() muta los valores de la lista

listaPeliculas.sort((a, b) => a.year - b.year);

console.table(listaPeliculas);
