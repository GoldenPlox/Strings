console.log("start")
let placa= "ABC-2030";
let partenumerica = "2030";
for (let i = 0; i < placa.length; i++) {
 if (placa[i] == "-") {
        var posicion = i;
      }
    }
let parnumerica = placa.substring(0, posicion);
console.log("La parte numérica es: " + partenumerica);