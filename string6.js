console.log("Start")
let url_facebook = "https://www.facebook.com/edwin.arroyo.2003";
let posicion_barra = 0;
for (let i = 0; i < url_facebook.length; i++) {
  if (url_facebook[i] == "/") {
    posicion_barra = i;
  }
}
let nombre_usuario = url_facebook.substring(posicion_barra + 1);
console.log("El nombre de usuario de Facebook es: " + nombre_usuario);