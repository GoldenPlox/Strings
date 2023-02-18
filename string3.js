console.log("Start")
let fecha = "2022-10";
let posicion_guion = 0;
for (let i = 0; i < fecha.length; i++) {
    if (fecha[i] == "-") {
      posicion_guion = i;
    }
  }
let mes = fecha.substring(posicion_guion + 1);
console.log("El mes de esta fecha es: " + mes);