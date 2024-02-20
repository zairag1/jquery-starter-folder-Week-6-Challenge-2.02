//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

    $("#box").hide();

    $("#button").click(function(){
        $("#box").toggle();
    });

    $("#name").click(function(){
        $("#name").css("color", "darkgreen");
        $("#box").css("background-color", "darkgreen");
    });

    $("#box").click(function(){
        $("#box").addClass("animation-img");

        setTimeout(function(){
            $("#box").removeClass("animation-img");
        }, 2000)
    })

    $(".circle").click(function(){
        $("#box").hide();
        $("#name").css("color", "lightblue");
        $("#box").css("background-color", "lightblue");
    })

});
