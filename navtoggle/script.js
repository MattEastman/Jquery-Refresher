var main = function(){
  $('.dropdown').click(function(){
   	$('.dropdown').children('.dropdown-menu').hide();
    var menu = $(this).children('.dropdown-menu');
  //  $('').empty();
    $(menu).toggle();
  });
  
  
};

$(document).ready(main);