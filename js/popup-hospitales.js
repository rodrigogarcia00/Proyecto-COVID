$(document).ready(function(){
$("#popup-1").hide();
$("#popup-2").hide();
$("#popup-3").hide();

/*Boton 1 */
$("#boton-ver-1").click(function(){
    if($("#popup-1").hide()){
        $("#popup-1").show();
    }
});

$("#boton-ver-1").click(function(){
$("body, html").animate({scrollTop:"270px"}, 400);
});


$("#boton-cerrar-1").click(function(){
    if($("#popup-1").show()){
        $("#popup-1").hide();
    }
});

$("#boton-cerrar-1").click(function(){
    $("body, html").animate({scrollTop:"800px"}, 400);
    });



    /*Boton 2 */

$("#boton-ver-2").click(function(){
    if($("#popup-2").hide()){
        $("#popup-2").show();
    }
});

$("#boton-ver-2").click(function(){
$("body, html").animate({scrollTop:"270px"}, 400);
});


$("#boton-cerrar-2").click(function(){
    if($("#popup-2").show()){
        $("#popup-2").hide();
    }
});

$("#boton-cerrar-2").click(function(){
    $("body, html").animate({scrollTop:"800px"}, 400);
    });

/*Boton 3 */

$("#boton-ver-3").click(function(){
    if($("#popup-3").hide()){
        $("#popup-3").show();
    }
});

$("#boton-ver-3").click(function(){
$("body, html").animate({scrollTop:"270px"}, 400);
});

$("#boton-cerrar-3").click(function(){
    if($("#popup-3").show()){
        $("#popup-3").hide();
    }
});

$("#boton-cerrar-3").click(function(){
    $("body, html").animate({scrollTop:"800px"}, 400);
    });


});