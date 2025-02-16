const frutas =["manzana" , "mango", "pera","mango","mango","naranja","manzana"];
const contador = {};
for (let i=0; i<frutas.length; i++){
    let fruta = frutas[i];
    contador[fruta]=(contador[fruta] || 0 ) + 1;
}
console.log(contador);