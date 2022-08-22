// // Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaCompras = ["cerveza", "pizza", "pancakes", "fernet", "coca-cola"];

listaCompras.push("aceite de girasol");
console.log(listaCompras);
listaCompras.pop();

const peliculas = [
  {
    titulo: "uncut gems",
    director: "no lo se juancito",
    fecha: new Date(2011, 1, 2),
  },
  {
    titulo: "ant-man",
    director: "tomassino tomas",
    fecha: new Date(2008, 11, 22),
  },
  {
    titulo: "green mile",
    director: "scorcese mario",
    fecha: new Date(2012, 3, 20),
  },
];

const peliculasPost2010 = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
const directores = peliculas.map((pelicula) => pelicula.director);
const titulos = peliculas.map((pelicula) => pelicula.titulo);

const titulosDirectores = titulos.concat(directores);
const titulosDirectoresProp = [...directores, ...titulos];

console.table(titulosDirectoresProp);
