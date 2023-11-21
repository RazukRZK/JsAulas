// var cliente = Number(prompt("Quantos clientes tem na sua mesa ?"))
// var valor = Number(prompt("Qual o valor total da conta ?"))
// var dividido = valor / cliente 

// alert(`Ficou ${dividido} reais pra cada`)

function calculeConta(cliente, valor){
    let dividido = valor / cliente 
    alert(`Ficou ${dividido} reais pra cada`)
}

var cliente = Number(prompt("Quantos clientes tem na sua mesa ?"))
var valor = Number(prompt("Qual o valor total da conta ?"))
calculeConta(cliente,valor)
