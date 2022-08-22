//funciones asincronas y promesas

function miAsinc() {
  // llamada a BD
  // puede darnos error!
}

const miPromesa = new Promise((resolve, reject) => {
  let i = Math.floor(Math.random() * 2);
  // pueden o no ejecutarse de forma ejecutosa
  //si esta todo bien
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

/// como consumir promesas

miPromesa
  .then(() => console.log("se ejecuto de forma correcta (resolve)"))
  .catch(() => console.log("catch agarra el error (reject)"))
  .finally(() => console.log(" finally se ejecuta siempre"));
