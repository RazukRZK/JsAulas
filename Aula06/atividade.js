class Filme {
    constructor(nome, descricao, data, diretor, categoria){
        this.nome = nome
        this.descricao = descricao
        this.data = data
        this.diretor = diretor
        this.categoria = categoria
    }
}

var btnFilme = document.querySelector("#btnFilme")

btnFilme.addEventListener("click", cadastrarFilme)

function cadastrarFilme(){
    let nomeInput = document.querySelector("#nome").value
    let descricaoInput = document.querySelector("#descricao").value
    let dataInput = document.querySelector("#data").value
    let diretorInput = document.querySelector("#diretor").value
    let categoriaInput = document.querySelector("#categoria").value
    let infoFilmes = document.querySelector("infoFilmes")

    var filme = new Filme(nomeInput, descricaoInput, dataInput, diretorInput, categoriaInput, infoFilmes);

    infoFilme.innerHTML = `<div class="">
    <h3>${filme.nome}</h3>
    <p>Descrição : ${filme.descricao}</p>
    <p>Data : ${filme.data}</p>
    <p>Diretor : ${filme.diretor}</p>
    <p>Categoria : ${filme.categoria}</p>
    </div>`

}

