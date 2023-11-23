// ARRAY
var estoqueProdutos = ["tenis", "bola", "videoGame"];
console.log(estoqueProdutos)
// INDICE
console.log(estoqueProdutos[1])

// METODO ALTERNATIVO
// var frutas = Array();
// frutas[0] = "banana"
// frutas[1] = "abacaxi"
// frutas[2] = "laranja"
// console.log(frutas)

//COMANDOS ARRAY
// push - adiciona um elemento na ultima posição
estoqueProdutos.push("chocolate");
console.log(estoqueProdutos);
// unshift - adiciona um elemento na primeira posição
estoqueProdutos.unshift("refrigerante");
console.log(estoqueProdutos)
// pop - remover um elemento na ultima posição
estoqueProdutos.pop();
console.log(estoqueProdutos)
// shift - remove o primerio elemento de um array
estoqueProdutos.shift();
console.log(estoqueProdutos)
// splice - (indice, quantos indices, novo elemento)
estoqueProdutos.splice(1,0,"chocolate")
console.log(estoqueProdutos)
// includes - busca um item no array
console.log(estoqueProdutos.includes("chocolate"));
// length - quantidade de elementos no array
console.log(`Existem ${estoqueProdutos.length} produtos no estoque`)