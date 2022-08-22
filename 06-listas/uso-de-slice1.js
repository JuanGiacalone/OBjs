// como obtener lista a partir de otra .slice()
let arr = ["hola", 1, 2, 3, true, null, "bye"];

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

console.log(arr.slice(0, 4));

let arr2 = arr.slice(0, 4);

console.log(arr2);

let arr3 = arr.slice(2, -2);

console.log(arr3);
