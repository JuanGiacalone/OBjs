//     Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let hoy = new Date();

let birthdate = new Date(1997, 8, 12);

let comparacion = hoy > birthdate;

console.log(comparacion);

let birthday = birthdate.getDate();

let birthmonth = birthdate.getMonth() + 1;

let birthyear = birthdate.getFullYear();

console.log(birthday, birthmonth, birthyear);
