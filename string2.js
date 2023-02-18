console.log("Start")
let num_oficina = "01.24";
let posicion_punto = 0;
for (let i = 0; i < num_oficina.length; i++) {
  if (num_oficina[i] == ".") {
    posicion_punto = i;
  }
}
let num_piso = num_oficina.substring(0, posicion_punto);
console.log("El numero de piso es: " + num_piso);