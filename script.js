// 1.26.17 jQuery Refresher

$(document).ready(function(){
    $('div').mouseenter(function(){
     $('div').fadeTo('fast',1);    
    });  
});




//  using variable iin jquery 
$(document).ready(function() {
    var $target = $('li:nth-child(4)');
    $target.fadeOut('fast');
});


//$(document).ready(function() {
//    $('thingToTouch').event(function() {
//        $('thingToAffect').effect();
//    });
//});


// key down event moves div to the right
$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'},500);
        
    });    
});

