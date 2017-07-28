var urlactual = document.URL.replace( /#.*/, "");
urlactual = urlactual.replace( /\?.*/, "");
	
$(document).ready(function () {

	<!--Google Analytics Evento Scroll-->
	var times = 0;
	//location.hash = '';
	$(window).scroll(function(){
		var bottom = $(window).height() + $(window).scrollTop();
		var height = $(document).height();
		var percentage = Math.round(100*bottom/height);
		if(percentage > 50 && times==0){
			times=times + 1;
			ga('send', 'event', 'Scroll', '50%', urlactual);
		}
	});
	
	<!--Google Analytics Evento Segundos-->
	setTimeout(function(){ga('send', 'event', 'T>30s', 'Tiempo mayor a 30 segundos', urlactual);},30000);

	
	<!--Google Analytics Evento Clic-->
	$("a[href^='#solicite_cita']").on('click',function(){
		ga('send', 'event', 'Click', 'Solicite una cita', urlactual);
	});	

	
	<!--Valida el formulario-->
	$('#formcontacto').on('submit', function(e){
        e.preventDefault();
		var v = 1;
		$(this).find(':input,textarea').each(function() {
			var valor = this.value;
			var att = $("#"+this.id).data("role");
			if(att == 'requerido' && (valor) == "" || (valor) == null) {
				alert('Campos obligatorios están vacíos');
				$("#"+this.id).focus();
				v = 0;return false;
			}				
			if((this.id)=='correo'){
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (!regex.test(valor)) {
					alert('Por favor, escriba un e-mail válido');
					$("#"+this.id).focus();
					v = 0;return false;
				}
			}		

		});	
		if(v == 1){
			this.submit();
		}
			
    });

	<!--Valida que solo escriban numeros-->
	$("#telefono, #telefono-2").keydown(function(event) {
	   if(event.shiftKey)
	   {
	        event.preventDefault(); 
	   }
	   if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9)    {
	   }
	   else {
	        if (event.keyCode < 95) {
	          if (event.keyCode < 48 || event.keyCode > 57) {
	                event.preventDefault();
	          }
	        } 
	        else {
	              if (event.keyCode < 96 || event.keyCode > 105) {
	                  event.preventDefault();
	              }
	        }
	      }
	   });	

	<!--Oculta los mensajes del formulario-->
	if($('#send-form').length >0){
		$("#send-form").delay(9000).fadeOut('slow');
	}


});




