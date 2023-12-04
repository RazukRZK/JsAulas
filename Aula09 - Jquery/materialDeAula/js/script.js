// INSTALAÇÃO
//  VISITE https://jquery.com/download/
// CLICAR NA OPÇÃO https://code.jquery.com/jquery-3.7.1.js
// SALVE EM UM LOCAL DE SUA PREFERÊNCIA!

// SELETOR JQUERY = $(# OU . ELEMENTO)
var titulo = $("#tituloDaPagina").text("JQUERY AULA");
console.log(titulo);

// var paragrafo = document.querySelector("textoDaPagina")
// paragrafo.addEventListener("mouseover", consoleListar)
// function consoleListar(){
//     console.log("Este é o texto do site")
// }

var paragrafo = $("#textoDaPagina").on("mouseover", function(){
    console.log("Este é o texto do site")
})

// COMPORTAMENTO
// JQUERY TEM CAPACIDADE DE AVALIAR VALORES NÃO DEFINIDOS E VAZIOS
var usuario = "Razuk";
var usuarioIndefinido = undefined;

var usuarioResultado = $("#testeIndefinido").text(usuarioIndefinido)

// ALGORITMO CONTAGEM DE CARACTERES
var blocoDeTexto = $("#blocoDeTexto").on("input", function(){
    let blocoDeTextoValue = $("#blocoDeTexto").val();
    let resposta = $("#numCaracteres")

    var contagem = blocoDeTextoValue.length;
    resposta.text(contagem);
})
