$(document).ready(function () {

	$(".conti2").fadeOut(1);
	$(".conti3").fadeOut(1);
	$(".conti4").fadeOut(1);
	$(".conti5").fadeOut(1);
	$(".conti6").fadeOut(1);
	$("li").click(function () {

switch(this){
case main: 
	$("#polzun").animate({left: '279px'});
	$(".conti1").fadeIn(600);
	$(".conti2").fadeOut();
	$(".conti3").fadeOut();
	$(".conti4").fadeOut();
	$(".conti5").fadeOut();
	$(".conti6").fadeOut();
	breake;
case about: 
	$("#polzun").animate({left: '371px'});
	$(".conti1").fadeOut();
	$(".conti2").fadeIn(600);
	$(".conti3").fadeOut();
	$(".conti4").fadeOut();
	$(".conti5").fadeOut();
	$(".conti6").fadeOut();
	breake;
case services:
	$("#polzun").animate({left: '475px'});
	$(".conti1").fadeOut();
	$(".conti2").fadeOut();
	$(".conti3").fadeIn(600);
	$(".conti4").fadeOut();
	$(".conti5").fadeOut();
	$(".conti6").fadeOut();
	breake;
case clients:
	$("#polzun").animate({left: '614px'});
	$(".conti1").fadeOut();
	$(".conti2").fadeOut();
	$(".conti3").fadeOut();
	$(".conti4").fadeIn(600);
	$(".conti5").fadeOut();
	$(".conti6").fadeOut();
	breake;
case contacts:
	$("#polzun").animate({left: '743px'});
	$(".conti1").fadeOut();
	$(".conti2").fadeOut();
	$(".conti3").fadeOut();
	$(".conti4").fadeOut();
	$(".conti5").fadeIn(600);
	$(".conti6").fadeOut();
	breake;
case vacancies:
	$("#polzun").animate({left: '852px'});
	$(".conti1").fadeOut();
	$(".conti2").fadeOut();
	$(".conti3").fadeOut();
	$(".conti4").fadeOut();
	$(".conti5").fadeOut();
	$(".conti6").fadeIn(600);
	
	breake;
	default:
	$("#polzun").animate({left: '279px'});	
	$(".conti1").fadeIn(600);
	$(".conti2").fadeOut();
	$(".conti3").fadeOut();
	$(".conti4").fadeOut();
	$(".conti5").fadeOut();
	$(".conti6").fadeOut();
	breake;
} 

	});


});

