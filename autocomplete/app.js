//jquery UI auto complete wedget

var main = function() {

  $( function() {
    var cities = [
 			"LA",
      "Santa Monica",
      "echo Park",
      "DownTown LA",
      "Culver City"
    ];
    $( "#input-form" ).autocomplete({
      source: cities
    });
  });
};
 
$(document).ready(main);