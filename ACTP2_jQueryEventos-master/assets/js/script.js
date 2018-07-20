

$(function(){

$(window).on('load', function(){
			alert("pagina cargada")
		});

$('.card').click(function(e){
	 e.preventDefault();
    $(this).toggleClass('.card--open');
   
});

$('.card').click('a', function(e){

	e.preventDefault();
	e.stopPropagation();

})

// $(".card__highlight").click(function(e){
//     alert($(this).attr('alt'));
// });



});




		