// casos con break y continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (var i = 0; i < lista.length; i++) {
  const element = lista[i];
  console.log(element);

  if (element === 3) {
    continue; /// vuelve a ejecutar desde el comienzo
  }
  const k = 100;
  if (element > 5) {
    var j = 5;
    console.log(element);
    break;
  }
}

// ambito de un bucle
console.log(i);
console.log(j);
console.log(k);
