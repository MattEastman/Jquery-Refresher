

var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');
 		var deleteThumb = function(){
      $('.thumbnail').removeClass('selected');
   };                      
    $('.nav li').removeClass('active');
    $(this).addClass('active');

    
    
    if (category === 'nav-consumer'){
      deleteThumb();
   	// Doing it this way would not be dyi so I made deleteThumb function
    // $('.thumbnail').removeClass('selected');
      $('.consumer').addClass('selected');
    }
    
    else if(category === 'nav-mobile'){
       deleteThumb();
      $('.mobile').addClass('selected');
    }
    
    else if(category === 'nav-commerce'){
       deleteThumb();
      $('.commerce').addClass('selected');
    }
    else if(category === 'nav-enterprise'){
       deleteThumb();
      $('.enterprise').addClass('selected');
    }
	 else if (category==='nav-all'){
       deleteThumb();
    }

  });
};
 
$(document).ready(main);