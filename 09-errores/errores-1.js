// errores en JS

const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  //return false;
  throw new Error("No es number");
};
const elDoble = miFuncion(3);

console.log(elDoble);

// try y catch
const numero = 10;

try {
  // codigo q puede fallar
  console.log("se ejecuta OK");
  const doble = miFuncion("2");
  console.log(doble);
} catch (e) {
  // en caso de fallar ... la e es el error q es revoleado
  console.error(`el valor de e es: ${e}`);
} finally {
  /// se ejecuta siempre para realizar limpieza o cosos
  console.log("algo ha pasao xd");
}

/// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
//
