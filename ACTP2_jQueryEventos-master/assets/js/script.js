

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
		e.preventDefault();
		$(this).toggleClass('card__like--red');

	});

	$('.card__like').on('click', function(e){

		e.preventDefault();
		e.stopPropagation();

	});

	$('.card__follow-btn').click( function(e){
		e.preventDefault();
		$(this).toggleClass('card__follow-btn--following');

	});

	$('.card__follow-btn').on('click' , function(e){

		e.preventDefault();
		e.stopPropagation();

	});

});




		