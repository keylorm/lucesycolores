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
			minSlides: 1,
			maxSlides: 3,
			slideWidth: 308,
			slideMargin: 30,
			moveSlides: 1,
		});
	}
		
		$('.ver-mas a').click(function(e){
      e.preventDefault();
			if($('.category-description').hasClass('hidden')){
      	$(".category-description").show("slow");
				$('.category-description').removeClass('hidden');
			}else{
				$(".category-description").hide("slow");
				$('.category-description').addClass('hidden');
			}
    })
		
		//ajuste formulario add to cart
		var monto_preliminar = document.createElement("div");
		var costo_preliminar_label = document.createElement("div");
		
		costo_preliminar_label.id = "costo-preliminar-label";
		monto_preliminar.id = "costo-preliminar-monto";
		
		var precio = $(".field-name-commerce-price .field-item").text();
		
		monto_preliminar.innerHTML = precio;
		costo_preliminar_label.innerHTML = 'Costo total preliminar:';
		
		$("form.commerce-add-to-cart #edit-quantity").after(monto_preliminar);
		$("form.commerce-add-to-cart #edit-quantity").after(costo_preliminar_label);
		$("form.commerce-add-to-cart #edit-quantity").on('change', function(){
				var cantidad = $(this).val();
				var monto = $("#monto-precio-preliminar").text();
			 	monto = monto.replace('$', '');
				monto_preliminar.innerHTML = '$'+ (cantidad * monto);
		});		
				
		$("a#edit-purchasing-anonymus").on('click', function(event){
				event.preventDefault();
				$('.ajax-register-links li.first a.ctools-modal-ctools-ajax-register-style').trigger('click');
		});
		
		/*menu toggle*/
		$('a#menu-toggle').on('click', function(event) {
			event.preventDefault();
			if($('#block-taxonomy-menu-block-1').hasClass('open')){
				$('#block-taxonomy-menu-block-1').removeClass('open');
			} else {
				$('#block-taxonomy-menu-block-1').addClass('open');
			}
		});
		
		/*caregory hover*/
		$(".view-tienda .views-row").hover(function(){
			$(this).find(".field-name-title h2 a").css({
				'color' : '#fff',
			});
			$(this).find(".field-name-icono").css({
				'color' : '#fff',
			})					
			$(this).find(".field-name-more-link a").css({
				'background-image' : 'none',
				'background-color' : '#fff',
				'color' : '#e71d73',
			})
			$(this).find(".field-name-field-resumen-producto").css({
					'color': '#fff'
				})
		});	
		
		$(".view-tienda .views-row").mouseleave(function(){
				$(this).find(".field-name-title h2 a").css({
					'color' : '#e71d73',
				});
				$(this).find(".field-name-icono").css({
					'color' : '#000',
				})
				$(this).find(".field-name-more-link a").css({
					'background-image' : 'url("/sites/all/themes/lucesycolores/images/bg-boton-naranja-degradado.jpg")',
					'background-color' : 'transparent',
					'color' : '#fff',
				})
				$(this).find(".field-name-field-resumen-producto").css({
					'color': '#575756'
				})
			});	
		
		/*click cart-submit*/
		$(".info.cart-submit").on('click', function(event){
			event.preventDefault();
			$('.commerce-add-to-cart .cart-submit').trigger('click');
		})
		
	})
	
	$(function (){
		//tabs productos
		if($('#tabs').length !== 0){
			$('#tabs').tabs();
		}
	})
	
})(jQuery);
 
