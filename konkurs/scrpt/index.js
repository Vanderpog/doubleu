	$(document).ready(function() {
		$('.menu').click(function(event){
			$('.nav,.hdr').toggleClass('active1')
	});
		$('main, .ftr').click(function(event){
			$('.nav,.hdr').removeClass('active1')
	});
	});