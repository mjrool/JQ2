

$(function(){

	$('.card').click(function(e){
		 e.preventDefault();
	    $(this).toggleClass('card--open');
	   
	});

	$('.card').on('a', function(e){

		e.preventDefault();
		e.stopPropagation();

	});

	// $(".card").click(function(e){
	//     alert($(this).attr('alt'));
	// });

	$('.card__like').click( function(e){
		e.stopPropagation();
		$(this).toggleClass('..card__like--red');

	});

});




		