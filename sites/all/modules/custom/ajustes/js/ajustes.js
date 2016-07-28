$( function() {
  
  $(document).ready(function(){
    $('a.ver-mas').on('click', function(e){
      e.preventDefault();
      $("category-description").hide("slow");
    })
  });
	
})(jQuery);