console.log("Start")
let nombre_jugador = "CR-7";
let posicion_guion = 0;
for (let i = 0; i < nombre_jugador.length; i++) {
  if (nombre_jugador[i] == "-") {
    posicion_guion = i;
  }
}
let iniciales = nombre_jugador.substring(0, posicion_guion);
console.log("Las iniciales del jugador son: " + iniciales);