
var main = function() {
  $('img').click(function(){
    $('ul').toggle('.dowpdown-menu');
  });
  
  
};
 
$(document).ready(main);



// also works but with next().
/*
var main = function() {
  $('img').click(function(){
    $(this).next().toggle('.dowpdown-menu');
  });
  
  
};
 
$(document).ready(main);
*/


