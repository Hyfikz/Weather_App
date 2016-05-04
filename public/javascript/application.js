$(function() {

  function receiveCities(cities) {
    $.each(cities);
  }

  function getCities() {
    $("#displayCities").empty();
    $.getJSON("/cities", receiveCities);
  }

  getCities();

  $("#search-field").on("keyup", function() {
    var searchInput = $(this).val().toLowerCase();
    $("#displayCities tr").each(function() {
      var searchOutput = $(this).text().toLowerCase();
      if (searchOutput.indexOf(searchInput)!=-1) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    });
  });

  $.ajax({
    url : "http://api.wunderground.com/api/c20dfb1aaf678d94/geolookup/conditions/q/IA/Cedar_Rapids.json",
    dataType : "jsonp",
    success : function(parsed_json) {
    var cities = parsed_json.location.city;
    var current_temp = parsed_json.current_observation.temp_c;
    alert("Current temperature in " + cities + " is: " + current_temp);
    }
  });

});
