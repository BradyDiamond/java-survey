  // BUSINESS LOGIC
  // function name() {
  //   return firstName;
  // }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    console.log ("name")
    const beverage = parseInt($("#beverage").val());
    console.log ("value")
    $("#output").text(name);
    $("#output").show();
   
});

});