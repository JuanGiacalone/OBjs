/// operador valueOf() - obtiene valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

// ejemplo con strings
let str = new String("im a string");

console.log(str);
console.log(str.valueOf());

// NaN (not a number) - Infinity
let n = Number("xd");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisior = 0;
let divisior2 = null;

console.log(numerador / divisior);
console.log(numerador / divisior2);

// convertir string a num con base int y float
let number = "5.89";
let number2 = 17.2;
console.log(typeof number);

console.log(typeof (number + number2));
// el operador castea el string a number
console.log(Number(number) + number2);

// pasa el float string a entero
console.log(parseInt(number));
// pasa el float string a float number
console.log(parseFloat(number));

console.log(parseInt(number2));

// numeros hexa
let hex = "0x3a5e7";
let hexInt = parseInt(hex, 16);

console.log(parseInt(hex, 16));

console.log(hexInt.toString(16));

// obtener los valores max y minimos en javascrip
let min_precision = Number.EPSILON;
let min_valor = Number.MIN_VALUE;
let max_valor = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor);
console.log(max_valor);

// para elevar **

console.log(2.0013555 ** 1023);
