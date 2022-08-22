// iterar valores de una lista
let arr = ["hola", 2, 4, 55, false, undefined];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

arr.forEach((element) => {
  console.log(element);
});

// otro ejmplo

let suma = 0;

const arrSuma = [3, 4, 57, 9, 88];

arrSuma.forEach((element) => {
  suma += element;
  console.log(element);
});
console.log(suma);

// busqueda de un valor con find
// encontrar elemento 9

const valorEncontrado = arrSuma.find((valor) => {
  if (valor === 9) {
    return true;
  }
});

console.log(valorEncontrado);

const listaObjs = [
  { nombre: "juan", edad: 22 },
  { nombre: "pablo", edad: 23 },
  { nombre: "CRUZ", edad: 25 },
  { nombre: "lalo", edad: 27 },
  { nombre: "caco", edad: 99 },
];

const objeto = listaObjs.find((o) => {
  if (o.nombre === "caco") {
    return true;
  }
});
console.log(objeto.edad);

const objetoNuevo = listaObjs.find((o) => o.nombre === "caco");

console.log(objetoNuevo);

// la constante tiene q tener el name de la key

const { edad } = listaObjs.find((o) => o.nombre === "lalo");

console.log(edad);
