



$("section").animate({width:'100%'},1000)
$("section").animate({height:'90%'},1000,function(){

$("section h2").fadeIn(1000,function(){


$(".one").fadeIn(1000,function(){
    $(".two").fadeIn(1000,function(){
        $(".three").fadeIn(1000);   
    })
})


})

});



// this js for slider 




$(".items").click(function(){

var imgsrc = $(this).attr("src");

$("#mainimage").attr("src",imgsrc);


});

/*
setInterval("change()",250);

function change(){

var color = Math.round(Math.random()*255);
var color2 = Math.round(Math.random()*255);
var color3 = Math.round(Math.random()*255);

$(".test").css("backgroundColor","rgb("+color+","+color2+","+color3+")");
}
$(".test").click(function(){

var bgc = $(".test").css("backgroundColor");

$("p").css("color",bgc);


})


*/


































