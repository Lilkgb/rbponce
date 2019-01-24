$(document).ready(function() {
  $("#submit").submit(function(event) {
  event.preventDefault();
    $("#submit").hide("slow");
    $("#troll").show("slow");
  });
});
