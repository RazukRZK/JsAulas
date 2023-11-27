//  pegar o input
var input = document.querySelector("#inputText")

// add evento foco e perder foco
input.addEventListener("focus",mudaCor);
input.addEventListener("blur",mudaCorVerifica);
// fazer o input ficar amarelo quando selecionado
// pegar a quantidade de caracteres
// verificar se tem 3 ou mias para verde
// verificar se tem menos que 3 para vermelho
function mudaCor(){
    let mensagem = document.querySelector("#mensagem");
    input.style.backgroundColor = "yellow";
    mensagem.innerHTML = "Digite uma senha mais de 3 digitos"
}
function mudaCorVerifica(){
    let inputValor = input.value
    let mensagem = document.querySelector("#mensagem");
    if ( inputValor.length < 3){
        input.style.backgroundColor = "red";
        mensagem.innerHTML = "Digite uma senha valida"
    }else{
        input.style.backgroundColor = "green";
        mensagem.innerHTML = "Senha atinge os requisitos"
    } 
}
