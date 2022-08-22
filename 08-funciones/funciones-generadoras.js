// funciones generadoras

function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id >= 10) {
      return id;
    }
    yield id; // hace un return esperando a q se vuelva a llamar
  }
}

const gen = generaId();

// los generator se comportan como iterators
console.log(gen);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
