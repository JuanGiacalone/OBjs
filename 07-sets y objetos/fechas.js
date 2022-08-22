// fechas

/// fecha actual
const fecha = new Date();
console.log(fecha);

// los meses inician en 0. 8 es septiembre
const fecha2 = new Date(1997, 8, 12);
console.log(fecha2);

// milisecs
const fecha3 = new Date(-1000000000000);
console.log(fecha3);

// fechas a partir de strings

const fecha4 = new Date("September 12, 1997 19:40:00");

const fecha4bis = new Date("September 12, 1997 19:40:00");
console.log(fecha4);

// comparaciones
console.log(fecha > fecha2);

// igualdad
// ERROR NO SE PUEDE DE ESTA MANERA
console.log(fecha4 === fecha4bis);

//  se debe convertir a milisecs

console.log(fecha4.getTime() === fecha4bis.getTime());

/// obtener el dia

console.log(fecha4.getDate());

//obtener mes

console.log(fecha4.getMonth() + 1);

// obtener amio

console.log(fecha4.getFullYear());

// mostrar en string

console.log(fecha4.toLocaleString("en-US"));
console.log(fecha4.toLocaleString("en-GB"));
