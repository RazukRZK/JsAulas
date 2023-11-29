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

var filmes = []

btnFilme.addEventListener("click", cadastrarFilme)

function cadastrarFilme(){


    let nomeInput = document.querySelector("#nome").value
    let descricaoInput = document.querySelector("#descricao").value
    let dataInput = document.querySelector("#data").value
    let diretorInput = document.querySelector("#diretor").value
    let categoriaInput = document.querySelector("#categoria").value

    filmes.push( new Filme(nomeInput, descricaoInput, dataInput, diretorInput, categoriaInput, infoFilmes));

    
    listar()

}

function listar(){
    let infoFilmes = document.querySelector("#infoFilmes")

    infoFilmes.innerHTML = "";

    filmes.forEach((elemento) =>{
        infoFilmes.innerHTML += `<div class="post">
        <h3>${elemento.nome}</h3>
        <p>Descrição : ${elemento.descricao}</p>
        <p>Data : ${elemento.data}</p>
        <p>Diretor : ${elemento.diretor}</p>
        <p>Categoria : ${elemento.categoria}</p>
        </div>`
    });
} 

