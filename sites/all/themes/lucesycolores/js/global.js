$( function() {
    $( ".datepicker" ).datepicker();
   
    

} );

(function($){

	$(document).ready(function(){
		if($('.bxslider').length !== 0){
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
		}
		
		
	if($('.bxslider-carousel').length !== 0){
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
	}
		
		$('a.ver-mas').click(function(e){
      e.preventDefault();
			if($('.category-description').hasClass('hidden')){
      	$(".category-description").show("slow");
				$('.category-description').removeClass('hidden');
			}else{
				$(".category-description").hide("slow");
				$('.category-description').addClass('hidden');
			}
    })
		
	});
	
	$(function (){
		//tabs productos
		if($('#tabs').length !== 0){
			$('#tabs').tabs();
		}
	})
	
})(jQuery);
 
