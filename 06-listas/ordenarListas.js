//ordenar arrays .sort()

const arr = [2, 5, 7, 9, 0, 1, 2, 3];

console.log(arr);

/// console.log(arr.sort());

arr.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(arr);

// ordenar unicamente array numerico
const arrNum = [2, 6, 9, 0, -1, 4, 6, 8, 9, 1, -22];

// ordena de menor a mayor y con b-a de mayor a menor
arrNum.sort((a, b) => a - b);

console.log(arrNum);

// interesante en arrays de objetos

const listaObjs = [
  { nombre: "juan", edad: 22 },
  { nombre: "pablo", edad: 2 },
  { nombre: "CRUZ", edad: -1 },
  { nombre: "lalo", edad: 27 },
  { nombre: "caco", edad: 99 },
];

// listaObjs.sort ((a,b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return 1
//     } else {
//         return 0
//     }
// });

listaObjs.sort((a, b) => a.edad - b.edad);

console.table(listaObjs);
