  // BUSINESS LOGIC
  // function sum(name , city , time , work ) {
  //   return name + city + time + work ;
  // }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    const city = parseInt($("#city").val());
    const time = parseInt($("#time").val());
    const pace = parseInt($("#pace").val());
    const work = parseInt($("#work").val());
  
    if (city + time + work + pace < 5 ) {
    $("#ruby").show();
    } else if (city + time + work + pace > 9) {
    $("#rust").show();
    } else {
    $("#python").show();
    }
  });
});