

$( function() {
    $( ".datepicker" ).datepicker();
} );

(function($){

	$(document).ready(function(){
		
		
		
		/* Para eventos de Google */
		var urlactual = document.URL.replace( /#.*/, "");
		urlactual = urlactual.replace( /\?.*/, "");
		var times = 0;
	
		/* Evento Scroll 50% */
		$(window).scroll(function(){
			var bottom = $(window).height() + $(window).scrollTop();
			var height = $(document).height();
			var percentage = Math.round(100*bottom/height);
			if(percentage > 50 && times==0){
				times=times + 1;
				ga('send', 'event', 'Scroll', '50%', urlactual);
				
			}
		
		});

		/* Evento más de 30 segundos */
		setTimeout(function(){ga('send', 'event', 'T>30s', 'Tiempo mayor a 30 segundos', urlactual);},30000);
		
		
		/* Evento cuando añaden producto al carrito */
		$('form.commerce-add-to-cart').on('submit',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Pago', 'Paso 1 - Click en botón para añadir un producto al carrito', urlactual); },500);
			this.submit();
		});
		
		/* Evento cuando pasan del carrito al checkout */
		$('form#views-form-commerce-cart-form-default input#edit-checkout').live('click',function(){
			
			setTimeout(function(){ga('send', 'event', 'Pago', 'Paso 2 - Click para pasar del carrito al Check Out', urlactual);},500);
			
		});
		
		/* Evento cuando pasan del checkout al shipping */
		$('form#commerce-checkout-form-checkout input#edit-continue').live('click',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Pago', 'Paso 3 - Click para pasar del check out a la página de shipping', urlactual);},500);
			
		});
		
		
		/* Evento cuando pasan del shipping al review y para insertar tarjeta  */
		$('form#commerce-checkout-form-shipping input#edit-continue').live('click',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Pago', 'Paso 4 - Click para pasar del shipping page a la página de review de la compra', urlactual);},500);
			
		});
		
		/* Evento cuando pasan a pagar al banco  */
		$('form#commerce-checkout-form-review input#edit-continue').live('click',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Pago', 'Paso 5 - Click para ir a pagar al banco', urlactual);},500);
			
		});
		
		
		/* Carga cuando el pago se completó y retornó a la página de confirmación */
		if($('body').hasClass('page-checkout-complete')){
			setTimeout(function(){ga('send', 'event', 'Pago','Paso 6 - Pago exitoso', urlactual);},500);
		}
		
		
	
		
		/* Evento en cada submit de form de contacto */
		$('.not-logged-in form#user-register-form input#edit-submit').live('click',function(event){
			
			setTimeout(function(){ ga('send', 'event', 'Registro', 'Click en botón para registrarse', urlactual);},500);
			
		});
		
		
		
		if($('.bxslider').length !== 0){
			$('.bxslider').bxSlider({
				video: true,
				useCSS: false,
				responsive:true,
				pager: false,
				auto: true,
				pause: 15000,
				autoStart: true,
				infiniteLoop:false,
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
		
		
		if ($('.bxslider-carousel-cat-productos').length !== 0){
				
				
	
				$('.bxslider-carousel-cat-productos').bxSlider({
					responsive:true,
					pager: false,
					auto: true,
					infiniteLoop:true,
					minSlides: 1,
					maxSlides: 5,
					slideWidth: 200,
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
			
		$('.i18n-es .field-name-field-provincia select option[value="_none"]').text("- Provincia -");
		$('.i18n-en .field-name-field-provincia select option[value="_none"]').text("- Province -");
		
		
		var cantones = [];
		cantones["San José"] = ["San José", 
														"Escazú", 
														"Desamparados", 
														"Puriscal", 
														"Tarrazú", 
														"Aserrí", 
														"Mora", 
														"Goicoechea", 
														"Santa Ana", 
														"Alajuelita", 
													  "Vázquez de Coronado",
													 "Acosta", 
													 "Tibás", 
													 "Moravia",
													 "Montes de Oca",
													 "Turrubares",
													 "Dota",
													 "Curridabat",
													 "Pérez Zeledón",
													 "León Cortés"];
		cantones["Alajuela"] = ["Alajuela", 
														"San Ramón", 
														"Grecia", 
														"San Mateo", 
														"Atenas", 
														"Naranjo", 
														"Palmares", 
														"Poás", 
														"Orotina", 
														"San Carlos", 
													  "Zarcero",
													 "Valverde Vega", 
													 "Upala", 
													 "Los Chiles",
													 "Guatuso"];
		cantones["Heredia"] = ["Heredia", 
														"Barva", 
														"Santo Domingo", 
														"Santa Barbara", 
														"San Rafael", 
														"San Isidro", 
														"Belén", 
														"Flores", 
														"San Pablo", 
														"Sarapiquí" 
													  ];
		cantones["Cartago"] = ["Cartago", 
														"Paraíso", 
														"La Unión", 
														"Jiménez", 
														"Turrialba", 
														"Alvarado", 
														"Oreamuno", 
														"El Guarco"
													  ];
		cantones["Puntarenas"] = ["Puntarenas", 
														"Esparza", 
														"Buenos Aires", 
														"Montes de Oro", 
														"Osa", 
														"Quepos", 
														"Golfito", 
														"Coto Brus", 
														"Parrita", 
														"Corredores", 
														"Garabito"
													  ];
		cantones["Guanacaste"] = ["Liberia", 
														"Nicoya", 
														"Santa Cruz", 
														"Bagaces", 
														"Carrillo", 
														"Cañas", 
														"Abangares", 
														"Tilarán", 
														"Nandayure", 
														"La Cruz", 
														"Hojancha"
													  ];
		cantones["Limón"] = ["Limón", 
														"Pococí", 
														"Siquirres", 
														"Talamanca", 
														"Matina", 
														"Guácimo"
													  ];
		
		
		/* Para los formularios de Address Book */
		
		if($('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()!="_none"){
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton').show();
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
		}else{
			$('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val("_none");
			$('#commerce-addressbook-customer-profile-form .field-name-field-canton').hide();
		}
		
		$('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').change(function(){
			if($('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()!="_none"){
				
				// llenar los campos de dirección automáticamente
				$('#commerce-addressbook-customer-profile-form .field-name-commerce-customer-address input#edit-commerce-customer-address-und-0-thoroughfare').val("");
				$('#commerce-addressbook-customer-profile-form .field-name-commerce-customer-address input#edit-commerce-customer-address-und-0-locality').val($('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val());
				
				
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton').show();
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val("_none");
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			}else{
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val("_none");
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton').hide();
				
			}
			
			
			
		});
		
		$('#commerce-addressbook-customer-profile-form .field-name-field-canton select').change(function(){
			if($('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val()!="_none"){
				var valor_direccion = $('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()+  ", "+ $('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val();
				
				$('#commerce-addressbook-customer-profile-form .field-name-commerce-customer-address input#edit-commerce-customer-address-und-0-thoroughfare').val(valor_direccion);
					
				
				
				
				
			}
		});
		
		/* Para el formulario de Billing Address */
		
		if($('.customer_profile_billing  .field-name-field-provincia select').val()!="_none"){
			$('.customer_profile_billing  .field-name-field-canton').show();
				$('.customer_profile_billing  .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_billing  .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
		}else{
			$('.customer_profile_billing  .field-name-field-canton select').val("_none");
			$('.customer_profile_billing  .field-name-field-canton').hide();
		}
		
		$('.customer_profile_billing  .field-name-field-provincia select').change(function(){
			if($('.customer_profile_billing  .field-name-field-provincia select').val()!="_none"){
				
				// llenar los campos de dirección automáticamente
				$('.customer_profile_billing  .field-name-commerce-customer-address input.thoroughfare').val("");
				$('.customer_profile_billing  .field-name-commerce-customer-address inpu.locality').val($('.customer_profile_billing  .field-name-field-provincia select').val());
				
				
				$('.customer_profile_billing  .field-name-field-canton').show();
				$('.customer_profile_billing  .field-name-field-canton select').val("_none");
				$('.customer_profile_billing  .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_billing  .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			}else{
				$('.customer_profile_billing  .field-name-field-canton select').val("_none");
				$('.customer_profile_billing  .field-name-field-canton').hide();
				
			}
			
		});
		
		$('.customer_profile_billing  .field-name-field-canton select').change(function(){
			if($('.customer_profile_billing  .field-name-field-canton select').val()!="_none"){
				var valor_direccion = $('.customer_profile_billing  .field-name-field-provincia select').val()+  ", "+ $('.customer_profile_billing  .field-name-field-canton select').val();
				
				$('.customer_profile_billing  .field-name-commerce-customer-address input.thoroughfare').val(valor_direccion);
					

				
			}
		});
		
		/* Para el formulario de Shipping Address */
		
		if($('.customer_profile_shipping .field-name-field-provincia select').val()!="_none"){
			$('.customer_profile_shipping .field-name-field-canton').show();
				$('.customer_profile_shipping .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_shipping .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
		}else{
			$('.customer_profile_shipping .field-name-field-canton select').val("_none");
			$('.customer_profile_shipping .field-name-field-canton').hide();
		}
		
		$('.customer_profile_shipping .field-name-field-provincia select').change(function(){
			if($('.customer_profile_shipping .field-name-field-provincia select').val()!="_none"){
				
				
				// llenar los campos de dirección automáticamente
				$('.customer_profile_shipping .field-name-commerce-customer-address input.thoroughfare').val("");
				$('.customer_profile_shipping .field-name-commerce-customer-address input.locality').val($('.customer_profile_shipping .field-name-field-provincia select').val());
				
				
				
				$('.customer_profile_shipping .field-name-field-canton').show();
				$('.customer_profile_shipping .field-name-field-canton select').val("_none");
				$('.customer_profile_shipping .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_shipping .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			}else{
				$('.customer_profile_shipping .field-name-field-canton select').val("_none");
				$('.customer_profile_shipping .field-name-field-canton').hide();
				
			}
			
		});
		
		
		$('.customer_profile_shipping .field-name-field-canton select').change(function(){
			if($('.customer_profile_shipping .field-name-field-canton select').val()!="_none"){
				var valor_direccion = $('.customer_profile_shipping .field-name-field-provincia select').val()+  ", "+ $('.customer_profile_shipping .field-name-field-canton select').val();
				
				$('.customer_profile_shipping .field-name-commerce-customer-address input.thoroughfare').val(valor_direccion);
					

				
			}
		});
		
		
		
		
		
		
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
			
    });
		
		//ajuste formulario add to cart
		$("form.commerce-add-to-cart .form-item-quantity input").change(function(){
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
			
			if($(".overlaymenu").length === 0){
			  		$("body").append('<div class="overlaymenu"></div>');
			  	}
			
			if($('.menusidebar').hasClass('open')){
				$(".menusidebar").animate({right: '-350px'}, 0);
				$(".menusidebar").removeClass('open');
				
			} else {
				$(".menusidebar").animate({right: '0px'});
				
				$(".overlaymenu").fadeTo( 300, 0.5);
			  		$(".menusidebar").animate({right: '0px'}, 0);
				
				
				$(".menusidebar").addClass('open');
			}
		});
		
			
		$("body").delegate('.overlaymenu','click', function(event) {
			event.preventDefault();
			$(".overlaymenu").fadeTo( 300, 0.0, function() {
			  			$(this).remove();
			  		});
			  		$(".menusidebar").animate({right: '-350px'},0);
			$(".menusidebar").removeClass('open');
		});
		
		$('.menusidebar .cerrar-menu').on('click', function(event) {
			event.preventDefault();
			$(".overlaymenu").fadeTo( 300, 0.0, function() {
			  			$(this).remove();
			  		});
			  		$(".menusidebar").animate({right: '-350px'},0);
			$(".menusidebar").removeClass('open');
		});
		

		
		/* Menú Principal */

	/*	jQuery('a#menu-toggle').on("click", function(event) {
			event.preventDefault();
			
			jQuery('body').toggleClass('sideOpen');
			
			return false;
		});
		jQuery('.main-nav-overlay, .menusidebar .cerrar-menu').on("click", function() {
			jQuery('body').removeClass('sideOpen');
			return false;
		});
		*/
		
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


		  	
		  	/*if(rc == 0 && mresult < 0){
		  		$(".menusidebar").css({right: (rc + mresult+50)});
		  	}
		  	if(rc == -350 && mresult > 0){
		  		$(".menusidebar").css({right: (rc + mresult-50)});
		  	}	*/	  	
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
			  		$(".menusidebar").animate({right: '-350px'}, 50);
						$(".menusidebar").removeClass('open');
			  	}else{
			  		$(".overlaymenu").fadeTo( "fast", 0.3);
			  		$(".menusidebar").animate({right: '0px'}, 50);
						$(".menusidebar").addClass('open');
			  	}
			  	 
			  }else{
			  	if(result >= 150){
			  		$(".overlaymenu").fadeTo( "fast", 0.3);
			  		$(".menusidebar").animate({right: '0px'}, 50);
						$(".menusidebar").addClass('open');
			  	}else{
			  		$(".overlaymenu").fadeTo( "fast", 0.0, function() {
			  			$(this).remove();
			  		});
			  		$(".menusidebar").animate({right: '-350px'}, 50);
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
		
		
		
		/* Evento cuando añaden producto al carrito */
		$('form.commerce-add-to-cart').on('submit',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Click', 'Click en botón para añadir un producto al carrito', urlactual); },500);
			this.submit();
		});
		
		/* Evento cuando pasan del carrito al checkout */
		$('form#views-form-commerce-cart-form-default input#edit-checkout').live('click',function(){
			
			setTimeout(function(){ga('send', 'event', 'Click', 'Click para pasar del carrito al Check Out', urlactual);},500);
			
		});
		
		/* Evento cuando pasan del checkout al shipping */
		$('form#commerce-checkout-form-checkout input#edit-continue').live('click',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Click', 'Click para pasar del check out a la página de shipping', urlactual);},500);
			
		});
		
		
		/* Evento cuando pasan del shipping al review y para insertar tarjeta  */
		$('form#commerce-checkout-form-shipping input#edit-continue').live('click',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Click', 'Click para pasar del shipping page a la página de review de la compra', urlactual);},500);
			
		});
		
		/* Evento cuando pasan a pagar al banco  */
		$('form#commerce-checkout-form-review input#edit-continue').live('click',function(event){
			
			setTimeout(function(){ga('send', 'event', 'Click', 'Click para ir a pagar al banco', urlactual);},500);
			
		});
		
		
		/* Carga cuando el pago se completó y retornó a la página de confirmación */
		if($('body').hasClass('page-checkout-complete')){
			setTimeout(function(){ga('send', 'event', 'Pago','Pago exitoso', urlactual);},500);
		}
		
		
		/* Evento en cada submit de form de contacto */
		$('.node-webform-contacto form input.webform-submit').live('click',function(event){
			
			setTimeout(function(){console.log("contacto"); ga('send', 'event', 'Click', 'Click para enviar formulario de contacto', urlactual);},500);
			
		});
		
		
		
		if($("form.commerce-add-to-cart .form-item-quantity input").length>0){
			$("form.commerce-add-to-cart .form-item-quantity input").val(1);
			
		}
			
		
		
		
		$("form.commerce-add-to-cart .form-item-quantity input").on('change', function(){
				var cantidad = $(this).val();
				var monto = $("#monto-precio-unidad").text();
			 	monto = monto.replace('$', '');
				$("#monto-precio-preliminar").text('$'+ (cantidad * monto).formatMoney(2, '.', ','));
		});	
		
		$('.i18n-es .field-name-field-provincia select option[value="_none"]').text("- Provincia -");
		$('.i18n-en .field-name-field-provincia select option[value="_none"]').text("- Province -");
		
		
		var cantones = [];
		cantones["San José"] = ["San José", 
														"Escazú", 
														"Desamparados", 
														"Puriscal", 
														"Tarrazú", 
														"Aserrí", 
														"Mora", 
														"Goicoechea", 
														"Santa Ana", 
														"Alajuelita", 
													  "Vázquez de Coronado",
													 "Acosta", 
													 "Tibás", 
													 "Moravia",
													 "Montes de Oca",
													 "Turrubares",
													 "Dota",
													 "Curridabat",
													 "Pérez Zeledón",
													 "León Cortés"];
		cantones["Alajuela"] = ["Alajuela", 
														"San Ramón", 
														"Grecia", 
														"San Mateo", 
														"Atenas", 
														"Naranjo", 
														"Palmares", 
														"Poás", 
														"Orotina", 
														"San Carlos", 
													  "Zarcero",
													 "Valverde Vega", 
													 "Upala", 
													 "Los Chiles",
													 "Guatuso"];
		cantones["Heredia"] = ["Heredia", 
														"Barva", 
														"Santo Domingo", 
														"Santa Barbara", 
														"San Rafael", 
														"San Isidro", 
														"Belén", 
														"Flores", 
														"San Pablo", 
														"Sarapiquí" 
													  ];
		cantones["Cartago"] = ["Cartago", 
														"Paraíso", 
														"La Unión", 
														"Jiménez", 
														"Turrialba", 
														"Alvarado", 
														"Oreamuno", 
														"El Guarco"
													  ];
		cantones["Puntarenas"] = ["Puntarenas", 
														"Esparza", 
														"Buenos Aires", 
														"Montes de Oro", 
														"Osa", 
														"Quepos", 
														"Golfito", 
														"Coto Brus", 
														"Parrita", 
														"Corredores", 
														"Garabito"
													  ];
		cantones["Guanacaste"] = ["Liberia", 
														"Nicoya", 
														"Santa Cruz", 
														"Bagaces", 
														"Carrillo", 
														"Cañas", 
														"Abangares", 
														"Tilarán", 
														"Nandayure", 
														"La Cruz", 
														"Hojancha"
													  ];
		cantones["Limón"] = ["Limón", 
														"Pococí", 
														"Siquirres", 
														"Talamanca", 
														"Matina", 
														"Guácimo"
													  ];
		
		
		/* Para los formularios de Address Book */
		
		if($('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()!="_none"){
			$('#commerce-addressbook-customer-profile-form .field-name-field-canton').show();
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
		}else{
			$('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val("_none");
			$('#commerce-addressbook-customer-profile-form .field-name-field-canton').hide();
		}
		
		$('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').live('change',function(){
			if($('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()!="_none"){

				// llenar los campos de dirección automáticamente
				$('.customer_profile_billing  .field-name-commerce-customer-address input.thoroughfare').val("");
				$('.customer_profile_billing  .field-name-commerce-customer-address inpu.locality').val($('.customer_profile_billing  .field-name-field-provincia select').val());
				
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton').show();
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val("_none");
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('#commerce-addressbook-customer-profile-form .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			}else{
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton select').val("_none");
				$('#commerce-addressbook-customer-profile-form .field-name-field-canton').hide();
				
			}
			
		});
		
		
		/* Para el formulario de Billing Address */
		
		if($('.customer_profile_billing .field-name-field-provincia select').val()!="_none"){
			$('.customer_profile_billing .field-name-field-canton').show();
				$('.customer_profile_billing .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_billing .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
		}else{
			$('.customer_profile_billing .field-name-field-canton select').val("_none");
			$('.customer_profile_billing .field-name-field-canton').hide();
		}
		
		$('.customer_profile_billing .field-name-field-provincia select').live('change',function(){
			
			if($('.customer_profile_billing .field-name-field-provincia select').val()!="_none"){
				$('.customer_profile_billing .field-name-field-canton').show();
				$('.customer_profile_billing .field-name-field-canton select').val("_none");
				$('.customer_profile_billing .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_billing .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			}else{
				$('.customer_profile_billing .field-name-field-canton select').val("_none");
				$('.customer_profile_billing .field-name-field-canton').hide();
				
			}
			
		});
		

		$('.customer_profile_billing  .field-name-field-canton select').live('change',function(){
			if($('.customer_profile_billing  .field-name-field-canton select').val()!="_none"){
				var valor_direccion = $('.customer_profile_billing  .field-name-field-provincia select').val()+  ", "+ $('.customer_profile_billing  .field-name-field-canton select').val();
				
				$('.customer_profile_billing  .field-name-commerce-customer-address input.thoroughfare').val(valor_direccion);
					

				
			}
		});
		
		/* Para el formulario de Shipping Address */
		
		if($('.customer_profile_shipping .field-name-field-provincia select').val()!="_none"){
			$('.customer_profile_shipping .field-name-field-canton').show();
				$('.customer_profile_shipping .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_shipping .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
		}else{
			$('.customer_profile_shipping .field-name-field-canton select').val("_none");
			$('.customer_profile_shipping .field-name-field-canton').hide();
		}
		
		$('.customer_profile_shipping .field-name-field-provincia select').live('change',function(){
			if($('.customer_profile_shipping .field-name-field-provincia select').val()!="_none"){

				// llenar los campos de dirección automáticamente
				$('.customer_profile_shipping .field-name-commerce-customer-address input.thoroughfare').val("");
				$('.customer_profile_shipping .field-name-commerce-customer-address input.locality').val($('.customer_profile_shipping .field-name-field-provincia select').val());
				


				$('.customer_profile_shipping .field-name-field-canton').show();
				$('.customer_profile_shipping .field-name-field-canton select').val("_none");
				$('.customer_profile_shipping .field-name-field-canton select option').each(function(){
					//console.log(cantones[$('.field-name-field-provincia select').val()]);
					
					if ($.inArray($(this).val(), cantones[$('.customer_profile_shipping .field-name-field-provincia select').val()])>-1){
						
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			}else{
				$('.customer_profile_shipping .field-name-field-canton select').val("_none");
				$('.customer_profile_shipping .field-name-field-canton').hide();
				
			}
			
		});
		

		$('.customer_profile_shipping .field-name-field-canton select').change(function(){
			if($('.customer_profile_shipping .field-name-field-canton select').val()!="_none"){
				var valor_direccion = $('.customer_profile_shipping .field-name-field-provincia select').val()+  ", "+ $('.customer_profile_shipping .field-name-field-canton select').val();
				
				$('.customer_profile_shipping .field-name-commerce-customer-address input.thoroughfare').val(valor_direccion);
					

				
			}
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