// REPETIÇÕES


// WHILE (VERIFICA E DEPOIS FAZ);
var contador = 0;

while (contador <= 10) {
    console.log(contador);
    contador++
    // contador = contador + 1
}

// DO WHILE (FAZ E VERIFICA)


var cont = 20
do{
 console.log(`Fiz ${cont} vezes`)
 cont++;
}
while(cont <= 10);

// FOR
for (let controlador = 0; controlador <= 10; controlador++){
    console.log(controlador+" for é legal")
}

// FOR EACH
console.log("ELEMENTOS");
var elementos = ["ELEMENTO1", "ELEMENTO2","ELEMENTO3"];
// function pseudofuncition, anonima
elementos.forEach((cadaElemento) => {
    console.log(" - "+cadaElemento);
});