class Aluno {
    constructor(valorNome, valorIdade, valorTurma){
        this.nome = valorNome;
        this.idade = valorIdade;
        this.turma = valorTurma;
    }
    
}

class Curso {
    constructor(valorNome, valorDuracao, valorTipo){
        this.nome = valorNome;
        this.duracao = valorDuracao;
        this.tipo = valorTipo;
    }
    
}

var curso1 = new Curso("Front", 220, "Tecnologia")
var curso2 = new Curso("Java", 400, "Tecnologia")

var aluno1 = new Aluno("Leandro", 25, curso1);
var aluno2 = new Aluno("Alice", 20, curso2);

// Atributo privativo = apenas o objeto em si poderá mudar seus valores, não aceitando uma reatribução fora de seu objeto
