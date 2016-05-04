$(function() {

  function receiveContacts(contacts) {
    $.each(contacts);
  }

  function getContacts() {
    $("#displayContacts").empty();
    $.getJSON("/contacts", receiveContacts);
  }

  getContacts();

  $("#search-field").on("keyup", function() {
    var searchInput = $(this).val().toLowerCase();
    $("#displayContacts tr").each(function() {
      var searchOutput = $(this).text().toLowerCase();
      if (searchOutput.indexOf(searchInput)!=-1) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    });
  });

});
