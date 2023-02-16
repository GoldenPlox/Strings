console.log("Start")
let nombres= "Cristiano-Ronaldo";
let pri_inicial="";
let seg_inicial="";
let resultado="";
pri_inicial = nombres.substring(0,1);

for(let i=0; i < nombres.lenght ; i++){
    if(nombres[i]=== "-"){
        seg_inicial = nombres.substring(i+1, i+2);
    }
}
if(pri_inicial=="C" && seg_inicial=="R"){
    resultado=pri_inicial+seg_inicial+"7";
}
if(pri_inicial=="L" && seg_inicial=="M"){
    resultado=pri_inicial+seg_inicial+"10";
}

console.log("primera inicial" + pri_inicial + "segunda inicial" + seg_inicial);
console.log("Iniciales: "+resultado);