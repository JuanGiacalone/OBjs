// carga y sobrecarga de funciones

function saludar() {
  hola();
}

function hola() {
  console.log("function hola");
}

saludar();

// 1. carga la funcion global
// 2.carga a su lado la funcion saludar
// 3. carga la funcion hola al lado de saludar
// 4. termina hola y queda saludar
//5. termina saludar y queda global

// function recursivo () {
//     recursivo()
// }
