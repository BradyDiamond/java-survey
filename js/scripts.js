  // BUSINESS LOGIC
  // function sum(name , city , time , work ) {
  //   return name + city + time + work ;
  // }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const city = parseInt($("#city").val());
    const time = parseInt($("#time").val());
    const pace = parseInt($("#pace").val());
    const work = parseInt($("#work").val());
  
  
    if (city + time + work + pace < 7 ) {
    $("#ruby").show();
    $("#rust").hide();
    $("#python").hide();
    $("#ideal-city").hide();
    $("#time-of").hide();
    $("#workey").hide();
    $("#good-boss").hide();
    $("#work-life").hide();
    $("#start").hide();
    } else if (city + time + work + pace > 9) {
    $("#rust").show();
    $("#ruby").hide();
    $("#python").hide();
    $("#ideal-city").hide();
    $("#time-of").hide();
    $("#workey").hide();
    $("#good-boss").hide();
    $("#work-life").hide();
    $("#start").hide();
    } else {
    $("#python").show();
    $("#rust").hide();
    $("#ruby").hide();
    $("#ideal-city").hide();
    $("#time-of").hide();
    $("#workey").hide();
    $("#good-boss").hide();
    $("#work-life").hide();
    $("#start").hide();
    }

  });
});