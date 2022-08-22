// sets o conjuntos
// listas con distinto comportamiento

const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  "hola",
  "hola",
  null,
  null,
  { id: 5 },
  { id: 5 },
];

// se sabe que objeto no es igual a objeto

console.log({ id: 6 } === { id: 6 });

////

const miSet = new Set(arr);

console.log(arr);
// toma 1 de cada valor, no repite datos. excepto objetos {}
console.log(miSet);

// los conjuntos son no ordenados de valores o elementos unicos

// .add()

miSet.add(69);
console.log(miSet);
miSet.add(69);
console.log(miSet);
// no agrega 2 veces el 69

// eliminar del conjunto .delete()

miSet.delete(69);
miSet.delete(1);
console.log(miSet);

// para limpiar el conjunto .clear()

const misetClear = new Set(miSet);
console.log(misetClear);
misetClear.clear();
console.log(misetClear);

// para buscar si existe x valor .has(x)
console.log(miSet.has(4));

// para conocer el tamanio con el .size

console.log(miSet.size);

// recorrer

miSet.forEach((value) => {
  console.log(value);
});

/// genero un iterator con los datos
const it_miSet = miSet.values();
console.log(it_miSet);

// los iterators tienen un value y un done, si done  es true, termino
console.log(it_miSet.next());

let res = it_miSet.next();
while (!res.done) {
  console.log(res.value);
  res = it_miSet.next();
}

/// para pasar un Set a Array
const ar_miSet = [...miSet];
console.log(ar_miSet[6]);
