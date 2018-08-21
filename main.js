function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
var app = angular.module('portfolio', []);
app.controller('portfolioController', function($scope) {
    $scope.languageSelection = "english";
    $scope.code="code";
    $scope.show=false;
	writing=false; //Estase escribindo ou borrando
	index=0; //Palabra actual
	currlett=0; //Letra actual
	paused=true;
	setTimeout(function(){paused=false;},2000);
	codes=["Python","PHP","VB.Net","SQL","JQuery","JavaScript","HTML5","CSS3","AngularJS","Angular.IO"];
	codes=shuffle(codes);
	setInterval(function(){
		if (paused) return; //Se está pausado non segue
		str=$scope.code;
		if(!writing){ //Borranse as letras
			str=str.substring(0,str.length - 1);
			if(str.length==0){ //Se non hai máis letras pasase a escribir
				str=" ";
				writing=true;
			}
		}else{
			if (index==codes.length)index=0; //Si o index
			if (str==" ")str="";
			str+=codes[index][currlett]; //Engadese a letra currlett da palabra codes[index]
			if (str.length==codes[index].length){
				index++; //Cambia de palabra
				currlett=0;
				writing=false;
				paused=true;
				setTimeout(function(){
					paused=false;
				},2000); //Pausase o script durante dous segundos para poder leer o texto
			}else{
				currlett++; //Cambiase de letra
			}
		}
		$scope.$apply(function () {$scope.code = str;});
	}, 200);
});

$(document).ready(function(){
	$(".socialicon").on("mouseenter mouseleave",function(){
		var src=$(this).attr("altsrc");
		$(this).attr("altsrc",$(this).attr("src"));
		$(this).attr("src",src);
	});
	$("#arrowtoogle").on("click",function(){
		$("#details").slideToggle();
		$("#basic").slideToggle();
		$(this).toggleClass("fliped",400);
	});
});
