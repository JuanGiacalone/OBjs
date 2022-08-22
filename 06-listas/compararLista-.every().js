// comparar listas
//  .every()  si todos cumple x condicion

const arr = [4, 5, 6, 8, 9, 1, 2, -1, -4, -5];

// const isNumber = arr.every(valor => {
//     if (typeof valor === 'number'){
//         return true
//     } else {
//         return false
//     }
// });
const isNumber = arr.every((valor) => typeof valor === "number");

console.log(isNumber);

const isInt = arr.every((value) => value > 0);

console.log(isInt);

// comparacion de listas

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

// las listas no se pueden comparar asi nomas
console.log(ar1 === ar2);

///
const compararArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const res = arr1.every((valor, i) => {
    if (valor === arr2[i]) return true;
    else return false;
  });
  return res;
};
const compararArrays2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const res = arr1.every((valor, i) => valor === arr2[i]);
  return res;
};

const ar3 = [1, 2, 3, 55];

// los 2 casos q se pueden dar
const sonIguales1 = compararArrays(ar1, ar2);
const sonIguales = compararArrays(ar1, ar3);

console.log(sonIguales1);
console.log(sonIguales);
