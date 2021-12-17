	$(document).ready(function() {
		$('.menu').click(function(event){
			$('.nav').toggleClass('active1')
	});
		$('main, .ftr').click(function(event){
			$('.nav').removeClass('active1')
	});
	});