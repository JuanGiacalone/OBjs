// comparaciones

// Igualdad

if (5 == 5) {
  // comparador debil  solo compara el valor

  console.log("igual a 5");
}

if (5 === 5) {
  // comparador fuerte compara el valor y el tipo

  console.log("igual y fuerte a 5");
}

//////////////////////////
let a = 5;
let b = "5";

if (a == b) {
  /// solo compara el valor 5
  console.log("a igual a b");
}

if (a === b) {
  // compara el valor y el tipo y no coincide, string y number
  console.log("a igual a b");
}

//// des igual

let c = 4;
let d = 10;

if (c != d) {
  console.log("son diferentes");
}

if (c !== d) {
  /// diff en valor o tipo
  console.log("son diferentes");
}

let e = 6;
let f = "6";

if (e !== f) {
  /// diff en valor o tipo
  console.log("son diferentes");
}

// comparaciones mayor y menor

let max = 10;
let min = 5;

if (max > min) {
  console.log("max mayor q min");
}

if (max >= min) {
  console.log("max mayor q min");
}

if (min < max) {
  console.log("min menor q max");
}

if (min <= max) {
  console.log("min menor q max");
}
