// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const datosPersonales = {
  nombre: "jp",
  apellido: "giacalone",
  edad: 24,
  altura: 178,
  eresDesarrollador: true,
};

console.log(datosPersonales);

const miEdad = datosPersonales.edad;

const lista = [
  { ...datosPersonales },
  {
    nombre: "amigo1",
    edad: 29,
  },
  {
    nombre: "amigo2",
    edad: 17,
  },
];

const listaEdad = lista.sort((a, b) => b.edad - a.edad);

console.table(listaEdad);
