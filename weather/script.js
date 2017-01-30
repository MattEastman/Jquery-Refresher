

var main = function() {

  $('.day').click(function() {
  $(this).next('div').toggle();
  $(this).find('.weekday span').toggleClass('glyphicon-minus');
	});

};

$(document).ready(main);