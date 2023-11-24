var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener('click', calcular );

function calcular(){
    // var empregado = document.getElementById("empregado");
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filhos").value;
    let salario = document.querySelector("#salario").value; 
    let resultadoSpan = document.querySelector("#resultado")  
    if (filhos == 0 || salario == 0 || empregado == ''){
        resultadoSpan.innerHTML = `Dados inválidos! Insira as informações corretamnete!`
    }
    else if(salario <= 806.8){
        var resultado = filhos * 41.37;
        resultadoSpan.innerHTML = `O salário família do empregado ${empregado} é de ${resultado}`
    }
    else if(salario >= 806.81 && salario <= 1212.64){
        var resultado = filhos * 29.16;
        resultadoSpan.innerHTML = `O salário família do empregado ${empregado} é de ${resultado}`
    }
    else{
        resultadoSpan.innerHTML = `Não ha salário família para o empregado ${empregado}`
    }
}