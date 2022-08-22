// funciones flecha y anonimas

const arr = [2, 3, 4, 5, 6];

const arr2 = arr.map(function (valor) {
  return valor * 2;
});

console.log(arr2);

const arr3 = arr.map((a) => a * 2); //funcion anonima

console.log(arr3);

// const dobleDelValor = valor => { return valor*2}

// lo siguiente no funciona
//console.log(dobleDelValor(2));

const dobleDelValor = (valor) => valor * 2;

console.log(dobleDelValor(2));

// las constantes se inicializan segun donde esten ubicadas
const dd = doble(2);
console.log(dd);
// las funciones se levantan primero globalmente

function doble(valor) {
  return valor * 2;
}

/// usando map con una func flecha conocida

const arr4 = arr.map(dobleDelValor);

console.log(arr4);
