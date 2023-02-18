console.log("Start")
let correo = "ejarroyo@sudamericano.edu.ec";
let posicion_arroba = 0;
for (let i = 0; i < correo.length; i++) {
  if (correo[i] == "@") {
    posicion_arroba = i;
  }
}
let nombre_usuario = correo.substring(0, posicion_arroba);
console.log("El nombre del usuario es: " + nombre_usuario);