var main = function() {
	$('.more-btn').click(function(){
    //$('.more-menu').toggle();
      $(this).next().toggle();
  });
  $('.share').click(function(){
    $('.share-menu').toggle();
  });
   $('.notification').click(function(){
    $(this).toggleClass('active');
  });
};

$(document).ready(main);