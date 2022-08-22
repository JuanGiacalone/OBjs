//- Un nuevo Set con los nombres de tu familia

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

let setFamily = new Set(["jp", "dan", "peter", "payne", "mike"]);

console.log(setFamily);

setFamily.add("peter");

setFamily.add("javascript");
console.log(setFamily);
