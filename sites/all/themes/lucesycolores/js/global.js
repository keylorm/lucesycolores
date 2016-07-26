$( function() {
    $( ".datepicker" ).datepicker();
   
    

} );

(function($){

	$(document).ready(function(){
		$('.bxslider').bxSlider({
		  video: true,
		  useCSS: false,
		  responsive:true,
		  pager: false,
		  auto: true,
		  pause: 15000,
		  autoStart: true,
		  infiniteLoop:true,

		});
		
		$('.bxslider-carousel').bxSlider({
		 
		  responsive:true,
		  pager: false,
		  auto: false,
		  infiniteLoop:true,
			minSlides: 3,
			maxSlides: 3,
			slideWidth: 308,
			slideMargin: 30,
			moveSlides: 1,

		});
		
		
	});
	
})(jQuery);
 
