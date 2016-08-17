(function($, undefined){
  
	/***** GLOBALS ****/
	var products = [];
	/***** END GLOBALS ****/
	
	$(document).ready(function(){
		
		//disable element 
		if($("#user_ajax_wrapper").hasClass('disable'))
		{
			$("#user_ajax_wrapper fieldset").attr('disabled', true);
		}
		
     //Obtener el listado de todos los usuarios
     $.ajax({
        url: "/products-therapy",
			  async: false,
        success: function(response) {
          saveListProducts(response);
        }
      });
	
		/*textarea input*/
		$('#edit-recommendations').live('input', function() {
			//console.log($(this).textareaHelper('caretPos'));
				var text = $(this).val();
				var code = text.indexOf("#");
			  if(code !== -1){
					var position = $(this).textareaHelper('caretPos');
					if($('#list-products').length < 1){
						$('.form-item-recommendations').append(getListProducts(position));
					}else{
						//change position
						$("#list-products").css("top",(20 + position.top));
						$("#list-products").css("left",position.left);
					}
				} else {
					$("#list-products").remove();
				}
		});
		
		/* LIVE click on product*/
		$("#list-products li a").live("click", function(e){
			e.preventDefault;
			var idProduct = $(this).parent("li").attr("id");
			var urlProduct = $(this).attr("data-href");
			var nameProduct = $(this).text();
			
			//obtener la informacion del campo de texto
			var info = $('#edit-recommendations').val();
			var infoCodeRemplaced = info.replace('#', '{' + idProduct + ' : ' + nameProduct + '}');
			$('#edit-recommendations').val(infoCodeRemplaced);
			$("#list-products").remove();
		});
		
		function saveListProducts(response)
		{
			$.each(response, function(k,listado){
				 $.each(listado, function(k2,productos){
					 var product = {};
					 $.each(productos, function(k3,producto){
						 product = producto;
					 });
					 products.push(product);
				 });
			});
		}
		
		function getListProducts(position)
		{
			var list = '<ul id="list-products" style="top:' + (position.top + 20) + 'px; left:' + position.left + 'px;">';
			//var list = '<ul id="list-products">';
			$.each(products, function(k,v){
				list += '<li id="' + v.nid + '"><a href="javascript:void(0);" data-href="' + v.url + '">' + v.title + '</a></li>';
			});
			list += '</ul>';
			return list;
		}
		
	});
	
})(jQuery);
 
