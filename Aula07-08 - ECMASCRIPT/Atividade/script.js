const verificarPromise = new Promise((resolve, reject) => {
    let nome = "AD";
    let senha = "ADM";

    if(nome == "ADM" && senha == "ADM"){
        resolve("Seja bem vindo administrador!");
    }else{
        reject("O usuário não é ADM! Faça o login de maneira alternativa!");
    }
});

verificarPromise.then((x) => {
    alert("Usuário encontrado! Seja bem vindo administrador")
    console.log(x)
})

verificarPromise.catch((x) => {
    alert("Erro! Usuário não cadastrado")
    console.log(x)
})