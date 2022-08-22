let array = new Array(10);

for (let x = 0; x < array.length; x++) {
  const element = array[x];
  console.log(element);
}

array.forEach((element) => {
  return element;
});

/* for (const x in object) {
    if (Object.hasOwnProperty.call(object, x)) {
        const element = object[x];
        
    }
}*/

let lista = [1, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 2);
}

/// for of
for (let valor of lista) {
  console.log(valor);
}

/// for each

lista.forEach((valor) => {
  console.log(valor);
});

/// for in
let person = {
  nombre: "jp",
  edad: 22,
  isDev: true,
};

for (let propiedad in person) {
  console.log(propiedad);
  /// usa los campos del objeto como key;
  console.log(person[propiedad]);
}
