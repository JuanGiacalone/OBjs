// mas metodos de cadenas
// mas expresiones regulares en https://regexr.com

let text_large =
  "soy un texto largo supuestamente largo de largo tan largo como largo que soy";

console.log(text_large.match(/largo/g).length);

/// verifica si existe una palabra
console.log(text_large.includes("texto"));
console.log(text_large.includes("caca"));

// saber si un testo empieza con una palabra
console.log(text_large.startsWith("soy"));
console.log(text_large.startsWith("sy"));
// saber si termina con una palabna
console.log(text_large.endsWith("soy"));
console.log(text_large.endsWith("sy"));
