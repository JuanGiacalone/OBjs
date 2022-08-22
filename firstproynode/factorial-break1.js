//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let numFactor = 10;
let result = 1;
let counter = 1;

while (counter) {
  result += result * counter;
  counter++;
  if (counter == numFactor) {
    break;
  }
}

console.log(result);
