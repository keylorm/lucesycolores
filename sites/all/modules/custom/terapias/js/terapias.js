(function($){
  
	$(document).ready(function(){
     //Obtener el listado de todos los usuarios
     $.ajax({
        url: "/terapias-usuarios",
        success: function(response) {
          $.each(response, function(k,v){
             $.each(v, function(k2,v2){
               var option = '<option';
               $.each(v2, function(k3,v3){
                 option += ' value="' + v3.uid + '">' + v3.email;
               });
               option += '</option>';
               $('#existing-user-email').append(option);
             });
          });
        }
      });
   /* if($('#existing-user').length() !== 0){
      $('#existing-user ');
    }*/
	});
	
})(jQuery);
 
