// unir 2 listas .concat()

let lista1 = ["hola", 2, false];
let lista2 = ["nosvi", true, NaN];

let lista3 = lista1.concat(lista2);

console.log(lista1);
console.log(lista3);

// unir 2 listas con factor de propagacion

console.log(...lista3);

const lista4 = [...lista1, ...lista2];

console.log(lista4);

/// mal entendido el concepto de propagacion:
const lista5 = [lista1, lista2];
console.log(lista5);

//
