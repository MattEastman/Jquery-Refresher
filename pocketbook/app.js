var main = function() {
  $('form').submit(function() {
      var firstName = $('#first').val();
      var lastName = $('#last').val(); 
			var email = $('#email').val();
			var password = $('#password').val();    
    
      if(firstName === "") {
        var nameerror = "Please enter your first name.";
        $('.first-name-error').text(nameerror);
      }
      else if (lastName === "") {
         var nameerror2 = "Please enter your last name.";
        $('.last-name-error').text(nameerror2);
       }
    	 else if (email === "") {
         var nameerror3 = "Please enter your email address.";
        $('.email-error').text(nameerror3);
       }
    		else if(password === ""){
          var nameerror4 = 'Please enter a password.';
          $('.password-error').text(nameerror4);      
       }
    		else if(password.length < 8){
          var nameerror4 = "Short passwords are easy to guess. Try one with at least 8 characters.";
           $('.password-error').text(nameerror4);        
       }
    	
    return false;
  });
  
};


$(document).ready(main);