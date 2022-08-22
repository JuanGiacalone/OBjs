const obj = {
  id: 1,
  nombre: "JP",
  apellido: "giacalone",
  isDev: true,
  librosFavoritos: ["libro1", "libro2", "libro3", "libro4"],
  "4-juegos": [
    { id: 1, name: "doom" },
    { id: 2, name: "dooms" },
  ],
  comment: function (estado) {
    return `La cuenta de ${this.nombre} se encuentra ${estado}`;
  },
};

const estadomioBind = obj.comment.bind(obj);

console.log(estadomioBind("activada"));

const estadomioCall = obj.comment.call(obj, "inactiva");

console.log(estadomioCall);

const estadomioApply = obj.comment.apply(obj, ["baneada"]);

console.log(estadomioApply);

// chequear si objeto tiene prop

const hasComment = Object.hasOwn(obj, "comment");
console.log(hasComment);
