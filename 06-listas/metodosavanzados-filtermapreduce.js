// metodos avanzados
// .map() .filter() y .reduce()

const arr = ["mdq", "ischia", "parkcity", "slc", "napole"];

const val = arr.forEach((v) => {
  console.log(v);
});

// no devuelv el valor v...
console.log(val);

const newArr = arr.map((valor, index) => {
  console.log(index);

  return `${index + 1} - ${valor}`;
});

console.log(newArr);

const newArr2 = arr.map((valor, index) => `${index + 1} - ${valor}`);

console.log(newArr2);

const listaObjs = [
  { nombre: "juan", edad: 22 },
  { nombre: "pablo", edad: 23 },
  { nombre: "CRUZ", edad: 25 },
  { nombre: "lalo", edad: 27 },
  { nombre: "caco", edad: 99 },
];

const personasMayores = listaObjs.filter((obj) => {
  if (obj.edad > 26) {
    return true;
  } else {
    return false;
  }
});

console.log(personasMayores);

// version reducida
const personasMayoresmini = listaObjs.filter((obj) => obj.edad > 26);

console.log(personasMayoresmini);

// saco a cruz del medio
const nuevaLista = listaObjs.filter((obj) => obj.nombre !== "CRUZ");

console.log(nuevaLista);

const valores = [3, 56, 77, 90, 100];

const suma = valores.reduce((acumulado, current, index, arrayOriginal) => {
  console.log(acumulado);
  console.log(current);
  console.log(index);
  console.log(arrayOriginal);
  return acumulado + current;
});

console.log(suma);
