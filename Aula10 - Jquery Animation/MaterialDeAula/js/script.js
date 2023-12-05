var caixa = $("#caixa");

$("#animacao1").on("click", function(){
    caixa.animate({width: "500px", height: "500px", borderRadius: "100%"})
});

$("#animacao2").on("click", function(){
    caixa.animate({width: "300px", height: "300px", borderRadius: "0%"}).animate({marginLeft: "200px"})
})

$("#animacao3").on("click", function(){
    caixa.animate({marginTop: "300px", marginRight: "100px", rotate:"360deg"}, {duration: 1000, complete: () => {alert("Se o seu cao tiver deprecao, animacao")}})
})

$("#animacao4").on("click", function(){
    caixa.animate({margin: "0px",rotate:"-360deg"})
})

$("#animacao5").on("click", function(){
    // caixa.fadeOut(1000)
    // caixa.slideUp(1000)
    caixa.hide(1000)
})

$("#animacao6").on("click", function(){
    // caixa.fadeIn(1000)
    // caixa.slideDown(1000)
    caixa.show(1000)
})

$("#animacao7").on("click", function(){
    caixa.fadeToggle(1000);
    // caixa.slideToggle(1000);
})

$("#animacao8").on("click", function(){
    caixa.css("transition", "1s");
    caixa.css("backgroundColor", "red");  
    $("#teste").attr("placeholder", "Isso é um input bacana")
    $("#teste").attr("class", "bacana")
    $("img").attr("src", "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg")
    $("img").attr("width", "500px")
})

