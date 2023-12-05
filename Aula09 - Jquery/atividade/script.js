const btnTabuada = document.querySelector("#btnTabuada");
const btnTema = document.querySelector("#btnTema")

btnTabuada.addEventListener("click", verTabuada);
btnTema.addEventListener("click", escolherTema);

function verTabuada() {
    let tabuadaDesejada = document.querySelector("#tabuadaDesejada").value;
    let resposta = document.querySelector("#resposta");

    console.clear();

    let resultadoTabuada = "";

    for (let controlador = 0; controlador <= 10; controlador++) {
        resultadoTabuada += `${tabuadaDesejada} x ${controlador} = ${tabuadaDesejada * controlador}<br>`;
    }

    resposta.innerHTML = resultadoTabuada;
}

let temaEscuroAtivo = false;

function escolherTema() {
    if (temaEscuroAtivo) {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    // Inverter o estado do tema
    temaEscuroAtivo = !temaEscuroAtivo;
}


