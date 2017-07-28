var mensajes = {
	cl_azul:{
		titulo: "Azul",
		mensaje: "Persona tranquila a la cual le gusta la calma, el silencio y la tranquilidad del mar. Tiene una conexión muy fuerte con el agua y no toma decisiones a la ligera."
	},
	cl_rojo:{
		titulo: "Rojo",
		mensaje: "Fortaleza. Acción. Energía. El despertar de la conciencia. Estar conectado a la Tierra. Es una persona apasionada en todos los sentidos."
	},
	cl_amarillo:{
		titulo: "Amarillo",
		mensaje: "Alegría. Conocimiento. Nuestro poder personal. Persona muy segura de sí misma."
	},
	cl_verde:{
		titulo: "Verde",
		mensaje: "Espacio. Dirección. Toma de decisiones. Verdad. Persona buena ejecutando y tomando decisiones."
	},
	cl_violeta:{
		titulo: "Violeta",
		mensaje: "Sanación. Espiritualidad. Transformación. Persona que, con un cambio de perspectiva, puede transformar cualquier situación en lo que quiera."
	},
	cl_rosado:{
		titulo: "Rosado",
		mensaje: "Compasión. Amor incondicional. Aceptación. Persona muy cálida, dulce, muy dada a estar pendiente de los demás y a dar amor incondicional."
	},
	cl_naranja:{
		titulo: "Naranja",
		mensaje: "Éxtasis. Todo lo que nos ha pasado en la vida lo guardamos en la chacra que está conectada con el naranja. Persona que siempre busca solucionar los problemas en sus relaciones interpersonales."
	},
	cl_dorado:{
		titulo: "Dorado",
		mensaje: "Sabiduría. Alegría muy profunda. Persona que siempre está contenta a pesar de los inconvenientes. Siempre es optimista. Siempre ve más allá de los problemas. Un líder es dorado por excelencia."
	},
	cl_magenta:{
		titulo: "Magenta / Fucsia",
		mensaje: "Persona detallista: siempre le pone mucha atención a todas las pequeñas cosas."
	},
	cl_turquesa:{
		titulo: "Turquesa",
		mensaje: "Comunicación a través del corazón. Persona que trabaja con tecnología y comunicación o que rechaza toda la parte tecnológica. Es aquella que te habla desde el corazón."
	},
	cl_oliva:{
		titulo: "Oliva",
		mensaje: "Esperanza. Intuición femenina. Como el árbol de oliva se modifica y transforma lo peor en cosas buenas. Persona muy flexible de pensamiento."
	},
	cl_azul_real:{
		titulo: "Azul Real",
		mensaje: "Paz más allá de nuestro entendimiento. Persona a las que les ha pasado algo muy difícil y entran en una paz interna; ya tienen paz o están buscando paz."
	},
	cl_coral:{
		titulo: "Coral",
		mensaje: "Interdependencia. No hay vida uno sin el otro. Persona muy consciente de que no puede hacer todo sola. Es buena trabajando en equipo."
	}
}


window.onload = function() {

	loadAsync('cache/comp_script.js', 'js');
	loadAsync('cache/comp_style.css', 'css');
	

	$(document).ready(function () {

		$('.caja').bind('click',function (e) {
			var clase = $(this).attr('class');
			clase = clase.replace("caja ", "");

			var color = $(this).css('backgroundColor');
			color = hexc(color);
			console.log(color);

			$("#popup").find("h3").css({"color": color}).text(mensajes[clase]["titulo"]);
			$("#popup").find("p").text(mensajes[clase]["mensaje"]);
			$("#popup").find("a.btn").css({"backgroundColor": color});

			//$("#popup").css({"top":"-800px"});
			$("#popup").css({"top":"0"});
		});
		$('.btn_cerrar').bind('click',function (e) {
			e.preventDefault();
			$("#popup").css({"top":"-800px"});
		});


		var hash = window.location.hash.replace('#','');
		if(hash != ''){
			setTimeout(function(){
				$('html, body').animate({ scrollTop: $('#' + hash).offset().top}, 1000)
			}, 500);
		}

		setTimeout(function(){
			$('.testimonios').bxSlider({
				controls: false,
			});
		}, 500);


		$(".icon.tel").on('click', function(){
			$(this).find("span").css({visibility: "visible"});
		});


		$('a[data-scroll="true"]').bind('click',function (e) {
			e.preventDefault();
			var target = this.hash,
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
				}, 1100, 'swing', function () {
					window.location.hash = target;
			});
		});


		/*Google Analytics Evento Scroll*/
		var times = 0;
		$(window).scroll(function(){
			var bottom = $(window).height() + $(window).scrollTop();
			var height = $(document).height();
			var percentage = Math.round(100*bottom/height);
			if(percentage > 50 && times==0){
				times=times + 1;
				ga('send', 'event', 'Scroll', '50%', urlactual);
			}
		});
		
		/*Google Analytics Evento Segundos*/
		setTimeout(function(){
			ga('send', 'event', 'T>30s', 'Tiempo mayor a 30 segundos', urlactual);
		},30000);

		
		/*Google Analytics Evento Clic*/
		$("a[data-evento='click']").on('click',function(){
			var title = $(this).text();
			title = title.replace(/\r?\n|\r/g, '').trim();
			var custom_title = $(this).data("nombre");
			if(custom_title !== undefined){
				title = custom_title;
			}
			ga('send', 'event', 'Click', title, urlactual);
		});	

		
		/*Valida el formulario*/
		$('form').on('submit', function(e){
	    e.preventDefault();
			var v = 1;
			$(this).find(':input,textarea,select').each(function() {
				var valor = this.value;
				var att   = $("#"+this.id).data("req");
				var inp   = "#"+this.id;
				$(inp).css({'border':'none'});
				if(att == '1' && (valor) == "" || (valor) == null) {
					alert('Campos obligatorios están vacíos');
					$(inp).css({'border':'1px solid red'}).focus();
					v = 0;return false;
				}				
				if((this.name)=='correo'){
					var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					if (!regex.test(valor)) {
						alert('Por favor, escriba un e-mail válido');
						$(inp).css({'border':'1px solid red'}).focus();
						v = 0;return false;
					}
				}		

			});	
			if(v == 1){
				this.submit();
			}
	  });

		/*Valida que solo escriban numeros*/
		$('input[data-type="num"]').keydown(function(event) {
		   if(event.shiftKey){
		        event.preventDefault(); 
		   }
		   if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9){
		   } else {
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

		/*Oculta los mensajes del formulario*/
		if($('#send-form').length >0){
			$("#send-form").delay(9000).fadeOut('slow');
		}

		/*Estilo con imágenes de los mensajes*/
		$( "body" ).append( "<style>.alert,.error,.success{background-position:10px center;text-align:left;background-repeat:no-repeat;border:1px solid;margin-bottom:15px;margin-top:13px;padding:10px 5px 10px 50px!important;width:100%;font-size:13px!important;box-sizing:border-box}.success{color:#4F8A10;background-color:#DFF2BF;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL"+"/"+"/wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8"+"/"+"/UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn"+"/"+"/tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABopJREFUeNrEl11sVMcVx393Zu71rg04KEmLwCkNkFSoUJLSYD6VhFYOAuWjrVq1Eg99a902goZKiYgFBDVqX4iI1BblsU2bqIqSKkgJpEbJIj6cOElLcIwN1PgTe7ExXq/N7t6PmenDXhuzXsD0hbM6mrt7Z8"+"/"+"/f/5z7sy5jrWWO2mCO2wKYM2v753p/DXAU8ByYB6QBPJAGmgBDgJNMwnU9MehawRuYR7wAlD/zSUPz/v20tV89e4aZiVmI6Ui1AHjuSzpy31b/tP+8QttF06ngQPAH4DgVsEda+3NFHhOKXdf3Zqn2fidLSQqqgCLBYq1Y7HWMvmxllxhnNRn75NqPkSkox3AK/+vAvuXLl6xbevmeuZUzcViyYVZxv1RfJ0j1CHaRmBBCoknE1R6c0h6VdStfYZVyzfwduNf9p3tbP0asP2mNVDG/vzd1Vvqn9zwUxAOV3JphnMDRCbEWI21FmMNFjPtWjiCe6rmc1flvWx96hccOvb2tpP/TnnAL2dKYP/jtZvrn3z0J+TCMdIjXfg6X5TaGkwMZK0pkoGYlMFSJNOdaWdAXmBB9RKe2PAM2uj6T04dC8opUUrguW/cv2zb5vU/5Er+Euls57WMMcVMJzwGKxIpUcNqAp3j7NBn1FQv4XvrNnNpqH9b18WOntKamLoPeEq6+378xM/I+kP0Zc4Sap9I+4SmOGodEGmfyPiT9yIT+3XfA7QOCKM8F4ZPcyXXz5aNP0BKtS9+qsoSePHR2jqkB72jZ+NABULjE04bi/ciO3FdHFtOdkwSCm2ByAZExqdj5AucioiV36oFeLEcASmE2LX24cfozrQS6DxhnHloCnFmhWvAMWCoC5NZt57o5PWdKc6c7CIyPtoE8dyAUBc4f/lzHllRi+M4uwBZSmDTsgce4qq+TD4cLWZhi0DaBteuTaH43fjo+J62PmdOdvP3huMAvNFwkvamPrTxMTZEWx9jA/LhKNlogMULlwBsKiWwcdF9ixjInouDFmKAwmQ2rSc6JwFNPGrr09bUyxsN1+++/9j1KYYQYwMsIcaGGAJ6M63UzK8B2FhKYOXs6ir86GqxuEwwWUyRKdB6ooe/7jxO64keQl3Aj8YJohwtxzt5s6F5+vb53mr8aBxfXyXQuXhJC+SjLJXVHsDK0sdwgaOKsoY6IDQ+xmi0DTnbNMg7e9pieT/h6d0PsGjVXVxozvDuS+engf/mvUem7/dOnK3jIGQBYEEpAW8o91/yzgiRMUxtESbAJ+zdl87z/T0PlgX/7aFVSOGUP3QcUEIQ2XGmPooTSxBoU8CVAiUEUjiT/vwHtdOC/XPPuWm/Pf9B7XX/K3UlBK4UGOMz9ZScIHAx8EM8pXClREmBFNd8Z+Oamx6pOxvXXDe/1JUUuFLiKUXghwAXSwmcGhv18aTElQLpiOJ6TfGGI2vLgjccWTttbqlLp5i9JyVjoz7AqVICjUPpcRJKklBFEkpOl3H3h+uuA9/94bqbyi6Fg5IOrhSTsYfS4wCNpQQO9/YNYyNL0nVJuLESZQLuTa0HYG9q/S3BpYjBXUnSdbGRpbdvGOBwKQFtrd3bcjpNQimSysUTEiVEWUl/d3TDLWUXTrHwPCFJKpeEUnzZcglr7V5AlzuMXm5rHyKfC6n0XJKei6ckUgqEcG7bpRR4SpL0XCo9l3wu5EzbIMDLNzoNA2PsjtTRTjzhMttLUOVWkJQKV0ikI2bsrpAkpaLKrWC2l8ATLqmjnRhjd5Q2qqXvBa/0p7Ovpo51UOkq5lR4zKrwSCqFF9eEcLihS+HgSUFSKWZVeMyp8Kh0FaljHfSns6+Wa1DLtWTbW9sveY7j1G967EE8pUioiEIUEhgd75QWM2W7FI6DM2XNE8qlQimEdTicOkdr+6UDN2pMyzalH"+"/"+"/p8rPm55aRkXz9lrqlzK1OknQ9Ah0RGo02BmOL7bkTE5CiKL0nFVIIRkbzvH+kjZ6ezIHm14afXf2re26rKxbNrw3vyf9I++mh5u0PLZvP+lX3U5WsmJxQqsCE5fIhHzV3cOrLfrIDwf6WtzK/j5da3w4BAFreyrypEk7TlTp/66ef9z7+9YVzZy1eeDfzvjKbZMJFKUEUGfKFkPTgGB3dw3R1j4yPDUQfnf9X9m9RwXbN6N2wjBnABzJRwQ62HRx9HTjYsyK3/PR9g8sT1bJGuE6lI3CtITShzRVGdV+mN2xJf5FvAUaBISATxzE3fTW7k/a/AQCLacaTMSyzFQAAAABJRU5ErkJggg==)}.alert{color:#9F6000;background-color:#FEEFB3;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL"+"/"+"/wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8"+"/"+"/UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn"+"/"+"/tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABpJJREFUWMPNVmtQVVUYdcbJH02T/epnpU35Qh4miAKCiiAPEXV8ZT5T85nkI0kTFZMUrKZxLEAuCiKIFxQEEVRAMJWngvK6lysveVxEBGs0xbHV+g5g3C7k1ZqxO7Pm3HPO96219rf32fvrB6Dfq0S"+"/"+"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)}.error{color:#D8000C;background-color:#FFBABA;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL"+"/"+"/wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8"+"/"+"/UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn"+"/"+"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)}</style>");

	});


	function loadAsync(url, type, callback) {
	 var s;
	 var r = false;
	 switch (type) {
	  case 'css':
	   s = document.createElement('link');
	   s.rel = 'stylesheet';
	   s.type = 'text/css';
	   s.href = url;
	   break;
	  case 'js':
	   s = document.createElement('script');
	   s.type = 'text/javascript';
	   s.src = url;
	   break;
	 }
	 s.async = true;
	 if (callback && typeof callback === "function") {
	  s.onload = s.onreadystatechange = function () {
	   if (!r && (!this.readyState || this.readyState == 'complete')){
	    r = true;
	    callback();
	   }
	  };
	 }
	 document.getElementsByTagName('body')[0].appendChild(s);
	}

	function hexc(colorval) {
	    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	    delete(parts[0]);
	    for (var i = 1; i <= 3; ++i) {
	        parts[i] = parseInt(parts[i]).toString(16);
	        if (parts[i].length == 1) parts[i] = '0' + parts[i];
	    }
	    return '#' + parts.join('');
	}

};	