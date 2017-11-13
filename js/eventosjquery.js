var inicia = function()
{
	var nuevo = function()
	{
			$.ajax({
  url:'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	//alert(data.results[0].name.first);
    //console.log(data);
    $("#nombre").html(data.results[0].name.first+" "+
    	              data.results[0].name.last);
    $("#foto").attr("src",data.results[0].picture.large);
    $("#genero").html(data.results[0].name.gender);
    	             

  }
});

}
$("#btnNuevo").on("click",nuevo);

}
//Iniciamos jquery
//cuando la pagina esta lis
//ejecuta la funcion inicia.

$(document).ready(inicia);