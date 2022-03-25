  // BUSINESS LOGIC
  function add(city, timeOf) {
    return city + timeOf;
  }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    console.log ("name")
    const city = parseInt($("#city").val());
    const time = parseInt($("#time").val());
    const pace = parseInt($("#pace").val());
    const work = parseInt($("#work").val());
    
    console.log ("value");
    $("#output").text(name + city + time + work +pace);
    $("#output").show();
   
});

});