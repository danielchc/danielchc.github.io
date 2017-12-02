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
function colorize(){
	if ($(window).width()<=1080){return;}
	if ($(window).scrollTop()>=200){
		$("header").css("background-color","#34233e");
	}else{
		$("header").css("background-color","transparent");
	}
}
$(document).ready(function(){
	colorize();
	$(window).scroll(function(){
		colorize();
	});
	
	$( "img[altsrc]" ).hover(
	  function() {
		$( this ).attr("defaultsrc",$( this ).attr("src"));
		$( this ).attr("src",$( this ).attr("altsrc"));
		
	  }, function() {
		$( this ).attr("src",$( this ).attr("defaultsrc"));
	  }
	);
	writing=false; //Estase escribindo ou borrando
	index=0; //Palabra actual
	currlett=0; //Letra actual
	paused=true;
	setTimeout(function(){
		paused=false; //Establece unha pausa antes de empezar de 2 segundos,para poder leer o texto
	},2000);
	usitios=["SysAdmin","Python","Java","PHP","VB.Net","SQL","JQuery","Javascript","AJAX","HTML5","CSS3","Libgdx2d"];
	sitios=shuffle(usitios); //Mezcla os datos
	setInterval(function(){
		if (paused) return; //Se está pausado non segue
		str=$("#ame").text() //Obten o texto
		if(!writing){ //Borranse as letras
			str=str.substring(0,str.length - 1);
			if(str.length==0){ //Se non hai máis letras pasase a escribir
				writing=true;
			}
		}else{
			if (index==sitios.length){index=0;} //Si o index
			
			str+=sitios[index][currlett]; //Engadese a letra currlett da palabra sitios[index]
			if (str.length==sitios[index].length){
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
		$("#ame").text(str)
	}, 200); //Establece que se cambie unha letra cada 200ms
	
	
	$("#shownav").on("click",function(e){
		event.stopPropagation();
		if($("nav").css("display")=="block"){
			$("nav").css("display","none");
		}else{
			$("nav").css("display","block");
		}
	});
	
	
	
});