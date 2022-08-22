// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let numFactor = 10;
let result = 1;

for (let i = 1; i < numFactor; i++) {
  result += result * i;
}
console.log(result);
