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
		
		
		if ($('.bxslider-carousel-productos').length !== 0){
				
				
	
				$('.bxslider-carousel-productos').bxSlider({
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
		
		/*if (!$('.bxslider-carousel-productos').is(':empty')){
				
				
				var rows = document.getElementsByClassName("views-row-1");
				for(var i = 0; i < rows.length; i++){
					if (rows[i].childNodes.length > 0){
							$('.bxslider-carousel-productos').bxSlider({
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
					}else{
						 $('.view-productos-relacionados').css('display', 'none');
					}
				
				}
		}*/
				/*if ($('.bxslider-carousel-productos ul li.views-row-1').is(':empty')){
					console.log($('.bxslider-carousel-productos ul li.views-row-1').is(':empty'));
					 $('.view-productos-relacionados').css('display', 'none');
				}else{
					$('.bxslider-carousel-productos').bxSlider({
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
				}*/
			
		
		
		$('.ver-mas a').click(function(e){
      e.preventDefault();
			if($('.category-description').length > 0){
				if($('.category-description').hasClass('hidden')){
					$(".category-description").show("slow");
					$('.category-description').removeClass('hidden');
					$('.ver-mas').removeClass("cerrado");
					$('.ver-mas').addClass("abierto");
				}else{
					$(".category-description").hide("slow");
					$('.category-description').addClass('hidden');
					$('.ver-mas').addClass("cerrado");
					$('.ver-mas').removeClass("abierto");
				}
			}
			
			if($('.tienda-descripcion').length > 0){
				if($('.tienda-descripcion').hasClass('hidden')){
					$(".tienda-descripcion").show("slow");
					$('.tienda-descripcion').removeClass('hidden');
					$('.ver-mas').removeClass("cerrado");
					$('.ver-mas').addClass("abierto");
				}else{
					$(".tienda-descripcion").hide("slow");
					$('.tienda-descripcion').addClass('hidden');
					$('.ver-mas').addClass("cerrado");
					$('.ver-mas').removeClass("abierto");
				}
			}
			
    })
		
		//ajuste formulario add to cart
		$("form.commerce-add-to-cart .form-item-quantity input").on('change', function(){
				var cantidad = $(this).val();
				var monto = $("#monto-precio-unidad").text();
			 	monto = monto.replace('$', '');
				$("#monto-precio-preliminar").text('$'+ (cantidad * monto).formatMoney(2, '.', ','));
		});	

		$("a#edit-purchasing-anonymus").on('click', function(event){
				event.preventDefault();
				$('.ajax-register-links li.first a.ctools-modal-ctools-ajax-register-style').trigger('click');
		});
		
		/*menu toggle*/
		$('a#menu-toggle').on('click', function(event) {
			event.preventDefault();
			
			if($(".overlaymenu").length == 0){
			  		$("body").append('<div class="overlaymenu"></div>');
			  	}
			
			if($('.menusidebar').hasClass('open')){
				$(".menusidebar").animate({right: '-350px'});
				$(".menusidebar").removeClass('open');
				
			} else {
				$(".menusidebar").animate({right: '0px'});
				
				$(".overlaymenu").fadeTo( "fast", 0.5);
			  		$(".menusidebar").animate({right: '0px'});
				
				
				$(".menusidebar").addClass('open');
			}
		});
		
		$('.menusidebar .cerrar-menu').on('click', function(event) {
			event.preventDefault();
			$(".overlaymenu").fadeTo( "fast", 0.0, function() {
			  			$(this).remove();
			  		});
			  		$(".menusidebar").animate({right: '-350px'});
			$(".menusidebar").removeClass('open');
		});
		
		
		
		/************** TOUCH MENU ***************/
/*****************************************/
	
   /* $(document.body).bind("touchmove", function(e) {
      e.preventDefault();
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      //CODE GOES HERE
      console.log(touch.pageY+' '+touch.pageX);
	});*/


	var s_mx = 0, m_mx = 0, e_mx = 0, rc = -350, opac = 0;
	
	$(document).bind("touchstart touchmove touchend", function(e) {
	  //Disable scrolling by preventing default touch behaviour
	  //console.log(e.type);
	  //e.preventDefault();
	  var orig = e.originalEvent;
	  var x = orig.changedTouches[0].pageX;
	  var y = orig.changedTouches[0].pageY;


	  
	  if(e.type == 'touchstart'){
	  	s_mx = x;
	  	rc = parseInt($(".menusidebar").css('right'));
	  }
	  if(e.type == 'touchmove'){
	  	m_mx = x;
	  	var mresult = s_mx - x;
	  	
	      
		  if((mresult > 50 || mresult < -50) && mresult != 0){

		  	if(mresult <= 100){/* && mresult >= -100*/
			  	if($(".overlaymenu").length == 0){
			  		$("body").append('<div class="overlaymenu"></div>');
			  	}		  		
		  		opac = Math.round(((mresult / 10) / 2));
		  		//console.log(opac);
		  		$(".overlaymenu").css({opacity: '.'+opac});
		  	}


		  	
		  	if(rc == 0 && mresult < 0){
		  		$(".menusidebar").css({right: (rc + mresult+50)});
		  	}
		  	if(rc == -350 && mresult > 0){
		  		$(".menusidebar").css({right: (rc + mresult-50)});
		  	}		  	
		  }

		 //console.log(rc + ' :: ' + x + ' :: ' + mresult);
	  }
	  if(e.type == 'touchend'){
	  	
	  	e_mx = x;
		  var result = s_mx - e_mx;
		  if(result != 0){
			  if(result <= -150){
			  	if(result <= -150){
			  		$(".overlaymenu").fadeTo( "fast", 0.0, function() {
			  			$(this).remove();
			  		});
			  		$(".menusidebar").animate({right: '-350px'});
						$(".menusidebar").removeClass('open');
			  	}else{
			  		$(".overlaymenu").fadeTo( "fast", 0.5);
			  		$(".menusidebar").animate({right: '0px'});
						$(".menusidebar").addClass('open');
			  	}
			  	 
			  }else{
			  	if(result >= 150){
			  		$(".overlaymenu").fadeTo( "fast", 0.5);
			  		$(".menusidebar").animate({right: '0px'});
						$(".menusidebar").addClass('open');
			  	}else{
			  		$(".overlaymenu").fadeTo( "fast", 0.0, function() {
			  			$(this).remove();
			  		});
			  		$(".menusidebar").animate({right: '-350px'});
						$(".menusidebar").removeClass('open');
			  	}
			  	 
			  }
		  }

	  }	  


	  // Move a div with id "rect"
	  
	  //$(".menusidebar").css({right: -x});
	});

/*****************************************/
/*****************************************/

		
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
		
		
		//Traduccion forzosa porque el String no se traduce en drupal y esta en un Módulo del Core.
		$('.i18n-es .commerce-order-handler-area-order-total .component-type-commerce-price-formatted-amount .component-title').text('Total de Pedido');
		
	})
	
	$(function (){
		//tabs productos
		if($('#tabs').length !== 0){
			$('#tabs').tabs();
		}
	})

	$(document).ajaxStop(function (){	
		
		if($("form.commerce-add-to-cart .form-item-quantity input").length>0){
			$("form.commerce-add-to-cart .form-item-quantity input").val(1);
			
		}
			
		
		
		
		$("form.commerce-add-to-cart .form-item-quantity input").on('change', function(){
				var cantidad = $(this).val();
				var monto = $("#monto-precio-unidad").text();
			 	monto = monto.replace('$', '');
				$("#monto-precio-preliminar").text('$'+ (cantidad * monto).formatMoney(2, '.', ','));
		});	
	});
	
})(jQuery);

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };