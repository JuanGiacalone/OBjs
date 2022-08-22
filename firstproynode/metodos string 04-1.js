// metodos para strings

// obtener longitud de str

let str = "asdddd";

console.log(str.length);

// obtener partes de str
// slice - substring y substr

console.log(str.slice(0, 4));
//hacen lo mismo
console.log(str.substring(1, 4));

// reemplazar parte de un str

let cadena = "my name is juan";

console.log(cadena.replace("juan", "jp"));

let text = "la casa de mi Casa es la Casa de los q no tienen casa";

console.log(text.replace("casa", "home")); //remplaza 1 sola vez

// al utilizar regex /g reemplaza todas
console.log(text.replace(/casa/g, "home"));

console.log(text.toUpperCase());

console.log(text.toLowerCase());

/// concatenacion
let strr = "inicio";
let ster = "fin";

console.log(strr.concat(" ", ster));
console.log(strr + " " + ster);
console.log(`${strr} ${ster}`);

// eliminar espacios

let espacio = " im a string with spaces ";
console.log(espacio.length);
console.log(espacio.trim().length);

console.log(espacio.trimEnd().length);
console.log(espacio.trimStart().length);

// obtiene el caracter x

let star = " soy el caracter x caracter";
console.log(star.charAt(17));
console.log(star[17]);

// obtener posicion de una palabra
let star2 = " soy el caracter xxx caracter xxx";
console.log(star2.indexOf("xxx"));
console.log(star2.charAt(17));
console.log(star2.lastIndexOf("xxx"));
