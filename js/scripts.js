  // BUSINESS LOGIC
  // function add(name , city , time , work ) {
  //   return name + city + time + work ;
  // }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    console.log ("name");
    const city = parseInt($("#city").val());
    const time = parseInt($("#time").val());
    const pace = parseInt($("#pace").val());
    const work = parseInt($("#work").val());
    const sum = (city + time + work + pace)
    if (sum > 10) {
    $("#rust").show();
    }
    else if (sum < 6) {
    $("#Ruby").show();
    }
    else {
    $("#python")  
    }
  });
});