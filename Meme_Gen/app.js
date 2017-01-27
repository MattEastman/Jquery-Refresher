var main = function() { 
	$('#top-text').keyup(function(){
			var $t = $(this).val();
 			$('.top-caption').text($t);
  });
	$('#bottom-text').keyup(function(){
  		var $b =$(this).val();
    	$('.bottom-caption').text($b);
	});
  
  
  $('#image-url').keyup(function() {
			var $i = $(this).val();
			$('img').attr('src', $i);
	});
  
};
$(document).ready(main);



