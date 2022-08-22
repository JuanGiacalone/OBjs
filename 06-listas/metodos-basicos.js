// trabajando con arrays
let var1 = 69;
let arr = [
  1,
  var1,
  2,
  3,
  4,
  5,
  6,
  "hola",
  false,
  { id: 5 },
  null,
  undefined,
  NaN,
];

console.log(arr);

// acceder valores de array segun key
// array [indice ] => 0,1,2,3,4....
console.log(arr[1]);

console.log(arr[9]);

// insertar datos
// .push() y .unshift()
// push agrega al final
arr.push(69);
console.log(arr);

// valores al principio se usa unshift
arr.unshift("inicio");
console.log(arr);

// metodos para eliminar del array
// .pop y .shift -> mutan el valor del array
// .pop saca del final
arr.pop();
console.log(arr);

// shift saca del principio
arr.shift();
console.log(arr);

// para elimianr modificar o aniadir al array
// .splice(x, y, z)
let arr1 = [1, 2, 3, 4, 5, 6];

// X dicta de donde arranca a eliminar, Y cuantos elimina
arr1.splice(2, 1);
console.log(arr1);
// agregar valores con splice (indice, 0, valores)
arr1.splice(3, 0, "hola", 3, 4, 5, 6);
console.log(arr1);

// modifcar con splice (indice, 1, valores)
arr1.splice(0, 1, "primervalor");
console.log(arr1);
