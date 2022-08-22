// operaciones aritmeticas

let a = 3.5;
let b = 4.8;

//suma
console.log(a + b);

//resta
console.log(a - b);

//multip
console.log(a * b);

// div
console.log(a / b);

// representacion de numero en cadenas
console.log(typeof a);

let a_string = a.toString();
console.log(a_string);
console.log(typeof a_string);

// redondeo de numero decimales
let c = 3.3;
let d = c * 3;
let e = 111;

console.log(d);

// .toFixed  - limitar numero de decim al valor deseado y deja en string
console.log(d.toFixed(3));
console.log(e.toFixed(3));
console.log(typeof d.toFixed(3));

// toPrecision - limita el numero de cifras significativas

console.log(d.toPrecision(2));
console.log(e.toPrecision(4));

console.log(typeof e.toPrecision(4));
