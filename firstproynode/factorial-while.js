//Este archivo debe calcular el factorial de 10 utilizando un bucle while
let numFactor = 10;
let result = 1;
let counter = 1;

while (counter < numFactor) {
  result += result * counter;
  counter++;
}

console.log(result);
