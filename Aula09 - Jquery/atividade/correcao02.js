var btnTema = $("#trocaTema");
var body = $("body")

btnTema.on("click", function(){
    if(btnTema.hasClass("temaClaro")){
        btnTema.removeClass("temaClaro")
        btnTema.addClass("temaEscuro")
        btnTema.text("TEMA CLARO")

        body.removeClass("temaClaro")
        body.addClass("temaEscuro")
    }else{
        btnTema.removeClass("temaEscuro")
        btnTema.addClass("temaClaro")
        btnTema.text("TEMA ESCURO")

        body.removeClass("temaEscuro")
        body.addClass("temaClaro")
    }
})