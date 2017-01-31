var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
      var text = $('#todo').val();
    	var html = template(text);
      $('.list').append(html);
    	$('#todo').val("");
    return false;  
  });
  $('.glyphicon-star').on("click",function(){
   $(this).toggleClass('active');     
  });
  // this way will only remove elements that are alredy there aka not dynamic
 //  $('.glyphicon-remove').on("click", function(){
 //  $(this).parent().remove();   
//  });
  // to remve 'dynamic elements' use this version of on()
 $(document).on('click','.glyphicon-remove',function(){
      $(this).parent().remove();  
  });  

};

  
var add = function(item){
  var html = template(item);
  $('.list').append(html);
};

var commands = {
  'add *item': add
};
// Add our commands to annyang
annyang.addCommands(commands);
// Start listening
annyang.start();


$(document).ready(main);



/*
var showFlickr = function(term) {
  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
  $.getJSON(url);
}

var commands = {
  // Let's define our first command. First the command we expect, and then the function it should call   
  // annyang will capture anything after a splat (*) and pass it to the function.
  // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
  'show me *term': showFlickr,
};

// Add our commands to annyang
annyang.addCommands(commands);

// Start listening
annyang.start();
*/